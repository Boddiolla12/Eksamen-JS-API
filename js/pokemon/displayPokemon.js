const displayPokemon = (pokemonData) => {
  const pokemonContainer = document.getElementById("pokemon-container");

  // Clear previous content
  pokemonContainer.innerHTML = "";
  pokemonContainer.classList.add("displayPokemon-container", "pokemon-container");

  // Create HTML elements for each pokemon and append to container
  pokemonData.forEach((pokemon) => {
    const pokemonElement = document.createElement("li");
    pokemonElement.classList.add("pokemon", "pokemonSort");

    // Set inner html of pokeelement with details and buttons
    pokemonElement.innerHTML = `
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase()}</h2>
    <p># ${pokemon.id}</p>
    <p>Type: ${pokemon.type}</p>
    <button onclick="saveToFavorites(${pokemon.id})">Favorite</button>
    <button onclick="goToDetailsPage(${pokemon.id})">Details</button>
    
    `;
    pokemonContainer.appendChild(pokemonElement);
  });
};
