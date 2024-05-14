// Tried to make sorting functionality reusable for index.html aswell as favorites.html

// Seems to be a problem with differences in the data structure between the two pages

//Sort pokemon alphabetically
let isNameSortedAscending = false;

//sorts by name ascending
const sortByNameAscending = () => {
  const pokemonContainers = [
    document.getElementById("favoritePokemon-container"),
    document.getElementById("pokemon-container"),
  ];

  pokemonContainers.forEach((container) => {
    let pokemonElements = Array.from(container.getElementsByClassName("favoritedPokemon"));
    if (pokemonElements.length === 0) {
      //If no elements with class "favoritedPokemon" are found, try class "pokemon"
      pokemonElements = Array.from(container.getElementsByClassName("pokemon"));
    }

    const sortedPokemon = pokemonElements.sort((a, b) =>
      a.querySelector("h2").textContent.localeCompare(b.querySelector("h2").textContent)
    );

    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isNameSortedAscending = true;
  });
};

// Sorts by name, descending
const sortByNameDescending = () => {
  const pokemonContainers = [
    document.getElementById("favoritePokemon-container"),
    document.getElementById("pokemon-container"),
  ];

  pokemonContainers.forEach((container) => {
    let pokemonElements = Array.from(container.getElementsByClassName("favoritedPokemon"));
    if (pokemonElements.length === 0) {
      //If no elements with class "favoritedPokemon" are found, try class "pokemon"
      pokemonElements = Array.from(container.getElementsByClassName("pokemon"));
    }
    console.log(pokemonElements);
    const sortedPokemon = pokemonElements.sort((a, b) =>
      b.querySelector("h2").textContent.localeCompare(a.querySelector("h2").textContent)
    );

    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isNameSortedAscending = false;
  });
};
