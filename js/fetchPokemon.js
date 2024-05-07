// Define async function
const fetchPokemon = async () => {
  const pokeArray = [];

  // show loading spinner
  showSpinner();

  try {
    // Create promises for fetching data for each pokemon
    for (let i = 1; i < 152; i++) {
      const baseUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;

      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch pokemon ${i}`);
        }
        const data = await response.json();
        pokeArray.push(data);
      } catch (error) {
        // Catching error within the loop, and stops looping if error is encountered
        console.log(`Error fetching pokemon ${i}`, error);
        return;
      }
    }

    // processing fetched pokedata
    const pokemon = pokeArray.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"], //Uses the api's front default sprite as image
      type: data.types.map((type) => type.type.name).join(", "), //maps pokemon types into a single string
    }));

    // Log processed data
    console.log(pokemon);
    displayPokemon(pokemon);
  } catch (error) {
    console.error("Error fetching pokemon data", error);
  } finally {
    //hide loading spinner regardless of success or failure
    hideSpinner();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchPokemon();
});
