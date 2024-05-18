//Saving favorited pokemon to server
const saveToFavorites = async (pokemonId) => {
  try {
    // check if user is logged in
    const userId = localStorage.getItem("_uuid");
    if (!userId) {
      console.log("No user logged in. Cannot save favorite pokemon");
      return;
    }

    // Check if pokemonId already exists in favorites
    const favoritePokemonIds = JSON.parse(localStorage.getItem("favoritePokemonIds")) || [];
    if (favoritePokemonIds.includes(pokemonId)) {
      showMessage("Pokemon is already favorited");
      console.log(`Pokemon ${pokemonId} already exists in favorites`);
      return;
    }

    favoritePokemonIds.push(pokemonId);
    // Sort the array before storing it back in local storage
    favoritePokemonIds.sort((a, b) => a - b);

    localStorage.setItem("favoritePokemonIds", JSON.stringify(favoritePokemonIds));
    showMessage("Pokemon added to favorites");
    console.log(`Pokemon ${pokemonId} added to favoritePokemonIds in local storage`);

    // Construct data object to be sent in PUT request
    const dataToUpdate = {
      favorites: favoritePokemonIds,
    };

    //fetch to update backend data
    const putResponse = await fetch(url + `/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
      body: JSON.stringify(dataToUpdate),
    });

    if (!putResponse.ok) {
      throw new Error("Failed to save favorite pokemon");
    }
    //console logs which pokemon id is saved
    console.log(`Pokemon ${pokemonId} saved to favorites`);
  } catch (error) {
    console.error("Error saving favorite pokemon", error);
  }
};
