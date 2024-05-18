// Retrieve saved pokemon from backend
const displayFavoritePokemon = async () => {
  try {
    //show spinner
    showSpinner();

    //Get array of favorited pokemon IDs
    const favoritePokemonIds = JSON.parse(localStorage.getItem("favoritePokemonIds")) || [];

    // Get pokemonData from local storage
    const pokemonData = JSON.parse(localStorage.getItem("pokemonData")) || [];

    // get container where savedPokemon will be displayed
    const favoritePokemonContainer = document.getElementById("favoritePokemon-container");

    //Clear previous content
    favoritePokemonContainer.innerHTML = "";

    //add class to container
    favoritePokemonContainer.classList.add("favoritePokemon-container", "pokemon-container");

    // fetch and display data for each saved pokemonID
    for (const pokemonId of favoritePokemonIds) {
      const pokemon = pokemonData.find((pokemon) => pokemon.id === pokemonId);
      console.log("Favorite Pokemon IDs:", favoritePokemonIds);
      console.log("Pokemon Id:", pokemonId);

      if (pokemon) {
        const pokemonElement = document.createElement("li");
        pokemonElement.classList.add("favoritedPokemon", "pokemonSort");
        pokemonElement.innerHTML = `
  <img src="${pokemon.image}" alt="${pokemon.name}">
  <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h2>
  <p># ${pokemon.id}</p>
  <p>Type: ${pokemon.type}</p>
  <button class="removeBtn" onclick="removeFavoritePokemon(${pokemon.id})">Remove</button>
  <button class="detailsBtn"  onclick="goToDetailsPage(${pokemon.id})">Details</button>
  `;

        //Append pokemon element to favorite container
        favoritePokemonContainer.appendChild(pokemonElement);
      }
    }

    //hide spinner after all pokemondata has been fetched and displayed
    hideSpinner();
  } catch (error) {
    console.error("Cannot load favorite pokemon:", error);
  } finally {
    //checks if user is not logged in and displays message, and remove spinner
    if (!localStorage.getItem("loggedIn")) {
      noUserLoggedInMessage(
        "You are not logged into your account. Please log in to view your favorite pokemon"
      );
      hideSpinner();
    }
  }
};

// run displayFavoritePokemon when window loads
window.onload = displayFavoritePokemon;
