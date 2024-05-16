// Retrieve saved pokemon from backend
const displayFavoritePokemon = async () => {
  try {
    //show spinner
    showSpinner();

    //retrieve uuid from local storage
    const userId = localStorage.getItem("_uuid");

    //Check if uuid is present
    if (!userId) {
      throw new error("uuid not found in local storage");
    }

    //fetch current userData
    const getResponse = await fetch(url + `/${userId}`, {
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
    //console.log(userData);

    // Get array of favorited pokemon ID's
    const favoritePokemonIds = userData.favorites;

    // wait for set duration to ensure spinner is displayed
    await new Promise((resolve) => setTimeout(resolve, 300));

    // get container where savedPokemon will be displayed
    const favoritePokemonContainer = document.getElementById(
      "favoritePokemon-container"
    );

    //Clear previous content
    favoritePokemonContainer.innerHTML = "";

    //add class to container
    favoritePokemonContainer.classList.add(
      "favoritePokemon-container",
      "pokemon-container"
    );

    //retrieve existing favoritePokemon IDs from local storage
    let existingFavoritePokemonIds =
      JSON.parse(localStorage.getItem("favoritePokemonIds")) || [];

    //check if favorite pokemon IDs already exist in local storage, if not add them
    favoritePokemonIds.forEach((pokemonId) => {
      if (!existingFavoritePokemonIds.includes(pokemonId)) {
        existingFavoritePokemonIds.push(pokemonId);
      }
    });

    //Save updated favorite Pokemon IDS to local storage
    localStorage.setItem(
      "favoritePokemonIds",
      JSON.stringify(existingFavoritePokemonIds)
    );

    //Fetch data for each saved pokemonID and display them after all have been fetched
    const pokemonPromises = existingFavoritePokemonIds.map(
      async (pokemonId) => {
        try {
          const getResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!getResponse.ok) {
            throw new Error(`Failed to fetch pokemon ${pokemonId}`);
          }

          return getResponse.json();
        } catch (error) {
          console.error("Error fetching or displaying pokemon data:", error);
        }
      }
    );

    //Wait for all pokemon data to be fetched
    const pokemonData = await Promise.all(pokemonPromises);

    //filter out failed requests
    const validPokemonData = pokemonData.filter((data) => data !== null);

    //sort valid pokemonData by id
    validPokemonData.sort((a, b) => a.id - b.id);

    //CReate html element for each favorited pokemon
    validPokemonData.forEach((pokemon) => {
      const pokemonElement = document.createElement("li");
      pokemonElement.classList.add("favoritedPokemon", "pokemonSort");
      pokemonElement.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <p># ${pokemon.id}</p>
      <p>Type: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <button class="removeBtn" onclick="removeFavoritePokemon(${
        pokemon.id
      })">Remove</button>
      <button class="detailsBtn"  onclick="goToDetailsPage(${
        pokemon.id
      })">Details</button>
      `;

      //append pokemon element to favorite container
      favoritePokemonContainer.appendChild(pokemonElement);
    });

    //hide spinner after all pokemondata has been fetched and displayed
    hideSpinner();
  } catch (error) {
    console.error(
      "Error displaying saved pokemon, user might not be logged in",
      error
    );
  }
};

window.onload = displayFavoritePokemon;
