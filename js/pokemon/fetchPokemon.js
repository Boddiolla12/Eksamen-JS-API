hideSpinner();
const fetchPokemonFromApi = async () => {
  // Show spinner if data is fetched from API
  showSpinner();

  try {
    // Define baseUrl for fetching
    const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

    //fetch data for each pokemon

    const getResponse = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!getResponse.ok) {
      throw new Error("Failed to fetch pokemon");
    }
    const data = await getResponse.json();
    const results = data.results;

    //create an array of promises to fetch detailed pokemon data for each pokemon
    const pokemonPromises = results.map((pokemon) =>
      fetch(pokemon.url).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed  to fetch details for ${pokemon.name}`);
        }
        return response.json();
      })
    );

    const pokeArray = await Promise.all(pokemonPromises);
    // processing fetched pokedata
    const pokemon = pokeArray.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"], //Uses the api's front default sprite as image
      type: data.types.map((type) => type.type.name).join(", "), //maps pokemon types into a single string
    }));

    //Save pokemon data to local storage
    localStorage.setItem("pokemonData", JSON.stringify(pokemon));
    return pokemon;
  } catch (error) {
    console.error("Error fetching pokemon data from Api.", error);
    displayErrorMessage("Failed to fetch pokemon data from Api. Try again later.");
    return;
  } finally {
    hideSpinner();
  }
};

// Fetch pokemonFromLocalStorage
const fetchPokemonFromLocalStorage = async () => {
  try {
    showSpinner();
    //check if pokemon data is available in local storage
    const storedPokemonData = localStorage.getItem("pokemonData");
    //initialize pokemonData variable
    if (storedPokemonData) {
      // if data available, parse and display
      pokemonData = JSON.parse(storedPokemonData);
      // Introduce a slight delay before displaying to mimic fetch operation
      setTimeout(() => {
        displayPokemon(pokemonData);
        hideSpinner(); // Hide spinner after displaying
      }, 250);
    } else {
      // If data is not available in local storage, fetch it from api
      pokemonData = await fetchPokemonFromApi();
      displayPokemon(pokemonData);
    }
  } catch (error) {
    console.error("Error fetching pokemon data from storage. Try again later.", error);
    displayErrorMessage("Failed to fetch pokemon data from storage. Try again later.");
  }
};

//eventlistener to fetch Pokemon data when dom loads
document.addEventListener("DOMContentLoaded", () => {
  fetchPokemonFromLocalStorage();
});
