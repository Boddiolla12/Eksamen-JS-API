// display pokemon details
const displayPokemonDetails = async (pokemonId) => {
  try {
    // Fetch pokemon details from api
    const getResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!getResponse.ok) {
      throw new Error(`Failed to fetch details for pokemon ${pokemonId}`);
    }
    const pokemon = await getResponse.json();
    console.log(pokemon.name);
    //Get container to display pokemon details
    const detailsContainer = document.getElementById("pokemonDetails-container");
    detailsContainer.classList.add("pokemonDetails-container");

    //Create element to display details
    const pokemonElement = document.createElement("li");
    pokemonElement.classList.add("pokemonDetails");

    // Set innerHTML of pokemon element with pokemon details
    pokemonElement.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h2>
    <p># ${pokemon.id}</p>
    <p>Type: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
  <p>Height: ${pokemon.height}</p>
  <p>Weight: ${pokemon.weight}</p>
  <h3>Abilities:</h3>
  <ul>
    ${pokemon.abilities.map((ability) => `<li>${ability.ability.name}</li>`)}
  </ul>
  <h3>Base Experience:</h3>
  <p>${pokemon.base_experience}</p>
  
  <h3>Forms:</h3>
  <ul>
    ${pokemon.forms.map((form) => `<li>${form.name}</li>`)}
  </ul>
  <h3>Species:</h3>
  <p>Name: ${pokemon.species.name}</p>
  <p>URL: ${pokemon.species.url}</p>
  <button onclick="saveToFavorites(${pokemon.id})">Favorite</button>
  <button onclick="goBack()">Go Back</button>
    `;

    //Append pokemon element to the ul in the html doc
    detailsContainer.appendChild(pokemonElement);
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
  }
};

// function to navigate back to previous page
const goBack = () => {
  window.history.back();
};

//retrieve pokemonId from url parameter generated from details button click
const urlParameters = new URLSearchParams(window.location.search);
const pokemonId = urlParameters.get("id");

//display pokemonDetails on windowload
window.onload = () => displayPokemonDetails(pokemonId);
