// initialize variable to check if pokemon is displayed
let anyDisplayed = false;

// function to filter pokemon types based on their types
filterPokemonByType = (type) => {
  // Variable for checking if pokemon is
  let anyDisplayed = false;

  const pokemonElements = document.querySelectorAll(".pokemonSort");

  pokemonElements.forEach((pokemonElement) => {
    const pokemonTypeElement = pokemonElement.querySelector(`p:nth-child(4)`);
    let pokemonType = "";

    if (pokemonTypeElement) {
      const typeString = pokemonTypeElement.textContent.trim();
      const typeParts = typeString.split(": ");

      if (typeParts.length === 2) {
        //check if type is the second element
        pokemonType = typeParts[1];
      } else if (typeParts.length === 1) {
        //check if type is first element
        pokemonType = typeParts[0];
      }
    }

    if (type === "all" || pokemonType.includes(type)) {
      pokemonElement.style.display = "flex";
      anyDisplayed = true;
    } else {
      pokemonElement.style.display = "none";
    }
  });

  // If no elements are displayed, log an error message
  if (!anyDisplayed) {
    displayErrorMessage("No pokemon found for the selected type");
    console.error("No Pokemon found for the selected type.");
  }
};

//Event listeneres for filter buttons
document.querySelectorAll(".pokemonTypes").forEach((button) => {
  button.addEventListener("click", () => {
    const filterType = button.getAttribute("value");
    filterPokemonByType(filterType);
    // check if any pokemon are displayed before logging sorting message
    if (!anyDisplayed) {
      console.log(`Sorting by type: ${filterType}`);
    }
  });
});
