//Sort pokemon alphabetically
let isNameSortedAscending = false;

//sorts by name ascending
const sortByNameAscending = () => {
  const favoritePokemonContainer = document.getElementById("favoritePokemon-container");
  const pokemonElements = Array.from(
    favoritePokemonContainer.getElementsByClassName("favoritedPokemon")
  );

  const sortedPokemon = pokemonElements.sort((a, b) =>
    a.querySelector("h2").textContent.localeCompare(b.querySelector("h2").textContent)
  );

  sortedPokemon.map((pokemonElement) => favoritePokemonContainer.appendChild(pokemonElement));
  isNameSortedAscending = true;
};

// Sorts by name, descending
const sortByNameDescending = () => {
  const favoritePokemonContainer = document.getElementById("favoritePokemon-container");
  const pokemonElements = Array.from(
    favoritePokemonContainer.getElementsByClassName("favoritedPokemon")
  );

  const sortedPokemon = pokemonElements.sort((a, b) =>
    b.querySelector("h2").textContent.localeCompare(a.querySelector("h2").textContent)
  );

  sortedPokemon.map((pokemonElement) => favoritePokemonContainer.appendChild(pokemonElement));
  isNameSortedAscending = false;
};

//sorting pokemon based on ID
let isIdSortedAscending = false;

//Sort by ID ascending
const sortByIdAscending = () => {
  const favoritePokemonContainer = document.getElementById("favoritePokemon-container");
  const pokemonElements = Array.from(
    favoritePokemonContainer.getElementsByClassName("favoritedPokemon")
  );

  //ascending order
  const sortedPokemon = pokemonElements.sort((a, b) => {
    const idA = parseInt(a.querySelector("p").textContent.slice(2));
    const idB = parseInt(b.querySelector("p").textContent.slice(2));
    return idA - idB;
  });

  //append sorted pokemonElements back to the container
  sortedPokemon.map((pokemonElement) => favoritePokemonContainer.appendChild(pokemonElement));
  isIdSortedAscending = true;
};

//sort by ID descending
const sortByIdDescending = () => {
  const favoritePokemonContainer = document.getElementById("favoritePokemon-container");
  const pokemonElements = Array.from(
    favoritePokemonContainer.getElementsByClassName("favoritedPokemon")
  );

  // Descending order
  const sortedPokemon = pokemonElements.sort((a, b) => {
    const idA = parseInt(a.querySelector("p").textContent.slice(2));
    const idB = parseInt(b.querySelector("p").textContent.slice(2));
    return idB - idA;
  });

  //append sorted pokemonElements back to the container
  sortedPokemon.map((pokemonElement) => favoritePokemonContainer.appendChild(pokemonElement));
  isIdSortedAscending = false;
};

//sort pokemon by type
let isTypeSortedAscending = false;

//sort by type Ascending
const sortByTypeAscending = () => {
  const favoritePokemonContainer = document.getElementById("favoritePokemon-container");
  const pokemonElements = Array.from(
    favoritePokemonContainer.getElementsByClassName("favoritedPokemon")
  );

  const sortedPokemon = pokemonElements.sort((a, b) =>
    a
      .querySelector("p:nth-of-type(3)")
      .textContent.localeCompare(b.querySelector("p:nth-of-type(3)").textContent)
  );

  sortedPokemon.map((pokemonElement) => favoritePokemonContainer.appendChild(pokemonElement));
  isTypeSortedAscending = true;
};

// sort by type Descending
const sortByTypeDescending = () => {
  const favoritePokemonContainer = document.getElementById("favoritePokemon-container");
  const pokemonElements = Array.from(
    favoritePokemonContainer.getElementsByClassName("favoritedPokemon")
  );

  const sortedPokemon = pokemonElements.sort((a, b) =>
    b
      .querySelector("p:nth-of-type(3)")
      .textContent.localeCompare(a.querySelector("p:nth-of-type(3)").textContent)
  );

  sortedPokemon.map((pokemonElement) => favoritePokemonContainer.appendChild(pokemonElement));
  isTypeSortedAscending = false;
};

// Add event listeners to sorting buttons
document.getElementById("sortByNameAscendingBtn").addEventListener("click", sortByNameAscending);
document.getElementById("sortByNameDescendingBtn").addEventListener("click", sortByNameDescending);
document.getElementById("sortByIdAscendingBtn").addEventListener("click", sortByIdAscending);
document.getElementById("sortByIdDescendingBtn").addEventListener("click", sortByIdDescending);
document.getElementById("sortByTypeAscendingBtn").addEventListener("click", sortByTypeAscending);
document.getElementById("sortByTypeDescendingBtn").addEventListener("click", sortByTypeDescending);
