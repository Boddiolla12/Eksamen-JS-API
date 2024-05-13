const removeSavedPokemon = (pokemonId) => {
  let savedPokemon = getSavedPokemon();
  savedPokemon = savedPokemon.filter((id) => id !== pokemonId);
  localStorage.setItem("savedPokemon", JSON.stringify(savedPokemon));
  displaySavedPokemon();
};
