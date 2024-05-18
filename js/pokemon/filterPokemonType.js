// Initialize variable to check if pokemon is displayed
let anyDisplayed = false;

// function to filter pokemon types based on their types
filterPokemonByType = (type) => {
  // Variable for checking if pokemon is displayed
  let anyDisplayed = false;

  // Select all elements which have the class pokemonSort
  const pokemonElements = document.querySelectorAll(".pokemonSort");

  pokemonElements.forEach((pokemonElement) => {
    const pokemonTypeElement = pokemonElement.querySelector(`p:nth-child(4)`);
    let pokemonType = "";

    if (pokemonTypeElement) {
      const typeString = pokemonTypeElement.textContent.trim();
      const typeParts = typeString.split(": ");

      // Check if the type string has a type part after the colon
      if (typeParts.length === 2) {
        //check if type is the second element
        pokemonType = typeParts[1];
      } else if (typeParts.length === 1) {
        //Handle cases where type information might be formatted differently
        pokemonType = typeParts[0];
      }
    }

    // If selected filter = "all" or pokemon type matches filter type, display pokemon
    if (type === "all" || pokemonType.includes(type)) {
      pokemonElement.style.display = "flex";
      anyDisplayed = true; //indicates that at least one pokemon is displayed
    } else {
      // otherwise, hide pokemon
      pokemonElement.style.display = "none";
    }
  });
  // logs the sorted type
  console.log(`Sorting by type: ${type}`);
  // If no elements are displayed, log an error message
  if (!anyDisplayed) {
    displayErrorMessage("No pokemon found for the selected type");
  }
};

//Event listeners for filter buttons
document.querySelectorAll(".pokemonTypes").forEach((button) => {
  button.addEventListener("click", () => {
    const filterType = button.getAttribute("value");
    filterPokemonByType(filterType);
  });
});
