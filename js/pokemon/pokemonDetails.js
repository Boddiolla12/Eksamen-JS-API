// display pokemon details
const displayPokemonDetails = (pokemonId) => {
  const pokemonDetailsContainer = document.getElementById("pokemonDetails-container");

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((pokemon) => {
      const types = pokemon.types.map((type) => type.type.name).join(", ");
      pokemonDetailsContainer.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <p># ${pokemon.id}</p>
    <p>Type: ${pokemon.type}</p>
    <p>Type: ${types}</p>

    `;
    })
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
    });
};

//retrieve pokemonId from url parameter generated from details button click
const urlParameters = new URLSearchParams(window.location.search);
const pokemonId = urlParameters.get("id");

//display pokemonDetails
window.onload = () => displayPokemonDetails(pokemonId);
