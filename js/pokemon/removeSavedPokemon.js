const removeSavedPokemon = (pokemonId) => {
  let savedPokemon = getSavedPokemon();
  savedPokemon = savedPokemon.filter((id) => id !== pokemonId);
  sessionStorage.setItem("savedPokemon", JSON.stringify(savedPokemon));
  displaySavedPokemon();
};
