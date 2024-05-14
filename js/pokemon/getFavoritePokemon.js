// Retrieve saved pokemon from local storage
const displayFavoritePokemon = async () => {
  try {
    //fetch current userData
    const getResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });

    if (!getResponse.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await getResponse.json();
    console.log(userData);

    const userDataItem = userData.items.find((item) => item._uuid);
    console.log(userDataItem);

    if (!userDataItem) {
      throw new Error("User data not found");
    }

    // Get array of favorited pokemon ID's
    const favoritePokemonIds = userDataItem.favorites;

    // get container where savedPokemon will be displayed
    const favoritePokemonContainer = document.getElementById("favoritePokemon-container");

    //Clear previous content
    favoritePokemonContainer.innerHTML = "";
    favoritePokemonContainer.classList.add("favoritePokemon-container");

    //fetch pokemon data for each saved pokemon id and displaythem
    favoritePokemonIds.forEach(async (pokemonId) => {
      try {
        const getResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!getResponse.ok) {
          throw new Error(`Failed to fetch pokemon ${pokemonId}`);
        }
        const pokemon = await getResponse.json();

        //CReate html element for each favorited pokemon
        const pokemonElement = document.createElement("li");
        pokemonElement.classList.add("favoritedPokemon");
        pokemonElement.innerHTML = `
  <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
  <h2>${pokemon.name}</h2>
  <p># ${pokemon.id}</p>
  <p>Type: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
  <button onclick="removeFavoritePokemon(${pokemon.id})">Remove</button>
  <button onclick="goToDetailsPage(${pokemon.id})">Details</button>
`;

        //append pokemon element to favorite container
        favoritePokemonContainer.appendChild(pokemonElement);
      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      }
    });
  } catch (error) {
    console.error("Error displaying saved pokemon", error);
  }
};

window.onload = displayFavoritePokemon;
