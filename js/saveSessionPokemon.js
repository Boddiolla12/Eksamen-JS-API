//Saving pokemon to sessionstorage
const saveToSessionStorage = (pokemonId) => {
  // Retrieve existing pokemon from sessionstorage
  let savedPokemon = JSON.parse(sessionStorage.getItem("savedPokemon")) || [];

  //check if pokemon already saved
  if (savedPokemon.includes(pokemonId)) {
    alert("This pokemon is already saved!");
    return;
  }

  //Adds pokemonID to savedPokemon Array
  savedPokemon.push(pokemonId);

  //Save updated array back to sessionstorage
  sessionStorage.setItem("savedPokemon", JSON.stringify(savedPokemon));

  alert("Pokemon saved to sessionStorage");
};
