//Saving pokemon to localstorage
const saveToLocalStorage = (pokemonId) => {
  // Retrieve existing pokemon from localstorage
  let savedPokemon = JSON.parse(localStorage.getItem("savedPokemon")) || [];

  // if savedPokemon is not an array/exists intialize
  if (!Array.isArray(savedPokemon)) {
    savedPokemon = [];
  }

  //check if pokemon already saved
  if (savedPokemon.includes(pokemonId)) {
    console.log("This pokemon is already saved!");
    return;
  }

  //Adds pokemonID to savedPokemon Array
  savedPokemon.push(pokemonId);

  //Save updated array back to localstorage
  localStorage.setItem("savedPokemon", JSON.stringify(savedPokemon));

  console.log("Pokemon saved to localStorage");
};
