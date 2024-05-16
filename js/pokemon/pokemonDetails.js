// display pokemon details
const displayPokemonDetails = async (pokemonId) => {
  try {
    const getResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!getResponse.ok) {
      throw new Error(`Failed to fetch details for pokemon ${pokemonId}`);
    }
    const pokemon = await getResponse.json();

    //create HTML elements for displaying details
    const detailsContainer = document.getElementById("pokemonDetails-container");
    detailsContainer.classList.add("pokemonDetails-container");

    const pokemonElement = document.createElement("li");
    pokemonElement.classList.add("pokemonDetails");

    pokemonElement.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h2>${pokemon.name}</h2>
    <p># ${pokemon.id}</p>
    <p>Type: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
    <p>Height: ${pokemon.height}</p>
    <p>Weight: ${pokemon.weight}</p>
    <h3>Abilities:</h3>
    <ul>
    ${pokemon.abilities.map((ability) => `<li>${ability.ability.name}</li>`).join("")}
    </ul>
    <button onclick="goBack()">Go Back</button>
    
    `;

    //Append pokemon element to the ul in the html doc
    detailsContainer.appendChild(pokemonElement);
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
  }
};

const goBack = () => {
  window.location.href = "/";
};

/*
// Add an event listener to the document to listen for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  fetchPokemon();
});
*/
//retrieve pokemonId from url parameter generated from details button click
const urlParameters = new URLSearchParams(window.location.search);
const pokemonId = urlParameters.get("id");

//display pokemonDetails
window.onload = () => displayPokemonDetails(pokemonId);
