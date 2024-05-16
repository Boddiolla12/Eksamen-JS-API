//Sort pokemon alphabetically
let isNameSortedAscending = false;

//sorts by name ascending
const sortByNameAscending = () => {
  const pokemonContainers = document.querySelectorAll(".pokemon-container");

  pokemonContainers.forEach((container) => {
    let pokemonElements = Array.from(container.getElementsByClassName("pokemonSort"));

    const sortedPokemon = pokemonElements.sort((a, b) =>
      a.querySelector("h2").textContent.localeCompare(b.querySelector("h2").textContent)
    );

    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isNameSortedAscending = true;
    console.log("Pokemon sorted by ascending Name");
  });
};

// Sorts by name, descending
const sortByNameDescending = () => {
  const pokemonContainers = document.querySelectorAll(".pokemon-container");

  pokemonContainers.forEach((container) => {
    let pokemonElements = Array.from(container.getElementsByClassName("pokemonSort"));

    const sortedPokemon = pokemonElements.sort((a, b) =>
      b.querySelector("h2").textContent.localeCompare(a.querySelector("h2").textContent)
    );

    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isNameSortedAscending = false;
    console.log("Pokemon sorted by descending Name");
  });
};

//sorting pokemon based on ID
let isIdSortedAscending = false;

//Sort by ID ascending
const sortByIdAscending = () => {
  const pokemonContainers = document.querySelectorAll(".pokemon-container");

  pokemonContainers.forEach((container) => {
    const pokemonElements = Array.from(container.getElementsByClassName("pokemonSort"));

    //ascending order
    const sortedPokemon = pokemonElements.sort((a, b) => {
      const idA = parseInt(a.querySelector("p").textContent.slice(2));
      const idB = parseInt(b.querySelector("p").textContent.slice(2));
      return idA - idB;
    });

    //append sorted pokemonElements back to the container
    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isIdSortedAscending = true;
    console.log("Pokemon sorted by ascending ID");
  });
};

//sort by ID descending
const sortByIdDescending = () => {
  const pokemonContainers = document.querySelectorAll(".pokemon-container");

  pokemonContainers.forEach((container) => {
    const pokemonElements = Array.from(container.getElementsByClassName("pokemonSort"));

    //ascending order
    const sortedPokemon = pokemonElements.sort((a, b) => {
      const idA = parseInt(a.querySelector("p").textContent.slice(2));
      const idB = parseInt(b.querySelector("p").textContent.slice(2));
      return idB - idA;
    });

    //append sorted pokemonElements back to the container
    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isIdSortedAscending = false;
    console.log("Pokemon sorted by descending ID");
  });
};

//sort pokemon by type
let isTypeSortedAscending = false;

//sort by type Ascending
const sortByTypeAscending = () => {
  const pokemonContainers = document.querySelectorAll(".pokemon-container");

  pokemonContainers.forEach((container) => {
    const pokemonElements = Array.from(container.getElementsByClassName("pokemonSort"));

    const sortedPokemon = pokemonElements.sort((a, b) =>
      a
        .querySelector("p:nth-of-type(2)")
        .textContent.localeCompare(b.querySelector("p:nth-of-type(2)").textContent)
    );

    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isTypeSortedAscending = true;
    console.log("Pokemon sorted by ascending Type");
  });
};

// sort by type Descending
const sortByTypeDescending = () => {
  const pokemonContainers = document.querySelectorAll(".pokemon-container");

  pokemonContainers.forEach((container) => {
    const pokemonElements = Array.from(container.getElementsByClassName("pokemonSort"));

    const sortedPokemon = pokemonElements.sort((a, b) =>
      b
        .querySelector("p:nth-of-type(2)")
        .textContent.localeCompare(a.querySelector("p:nth-of-type(2)").textContent)
    );

    sortedPokemon.map((pokemonElement) => container.appendChild(pokemonElement));
    isTypeSortedAscending = false;
    console.log("Pokemon sorted by descending Type");
  });
};

// Add event listeners to sorting buttons
document.getElementById("sortByNameAscendingBtn").addEventListener("click", sortByNameAscending);
document.getElementById("sortByNameDescendingBtn").addEventListener("click", sortByNameDescending);
document.getElementById("sortByIdAscendingBtn").addEventListener("click", sortByIdAscending);
document.getElementById("sortByIdDescendingBtn").addEventListener("click", sortByIdDescending);
document.getElementById("sortByTypeAscendingBtn").addEventListener("click", sortByTypeAscending);
document.getElementById("sortByTypeDescendingBtn").addEventListener("click", sortByTypeDescending);
