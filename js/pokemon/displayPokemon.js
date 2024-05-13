const displayPokemon = (pokemonData) => {
  const pokemonContainer = document.getElementById("pokemon-container");

  // Clear previous content
  pokemonContainer.innerHTML = "";
  pokemonContainer.classList.add("pokemon-container");

  // Create HTML elements for each pokemon and append to container
  pokemonData.forEach((pokemon) => {
    const pokemonElement = document.createElement("li");
    pokemonElement.classList.add("pokemon");

    pokemonElement.innerHTML = `
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <p># ${pokemon.id}</p>
    <p>Type: ${pokemon.type}</p>
    <button onclick="saveToLocalStorage(${pokemon.id})">Favorite</button>
    <button onclick="goToDetailsPage(${pokemon.id})">Details</button>
    
    `;
    pokemonContainer.appendChild(pokemonElement);
  });
};
