// Retrieve saved pokemon from session storage
const getSavedPokemon = () => {
  const savedPokemon = JSON.parse(sessionStorage.getItem("savedPokemon")) || [];
  return savedPokemon;
};

//display saved pokemon on favorites
const displaySavedPokemon = () => {
  //get pokemon id's
  const savedPokemonIds = getSavedPokemon();

  //get container where savedpokemon will be displayed
  const savedPokemonContainer = document.getElementById("savedPokemon-container");

  //Clear previous content
  savedPokemonContainer.innerHTML = "";
  savedPokemonContainer.classList.add("savedPokemonContainer");

  //Fetch pokemon data for each saved pokemon ID, then display
  savedPokemonIds.forEach((pokemonId) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((pokemon) => {
        const pokemonElement = document.createElement("li");
        pokemonElement.classList.add("favoritedPokemon");

        pokemonElement.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          <h2>${pokemon.name}</h2>
          <p># ${pokemon.id}</p>
          <p>Type: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <button onclick="removeSavedPokemon(${pokemon.id})">Remove</button>
        `;
        savedPokemonContainer.appendChild(pokemonElement);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  });
};

window.onload = displaySavedPokemon;
