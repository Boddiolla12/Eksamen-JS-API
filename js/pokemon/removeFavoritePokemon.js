const removeFavoritePokemon = async (pokemonId) => {
  try {
    //fetch current userData
    const userId = localStorage.getItem("_uuid");
    if (!userId) {
      console.log("No user logged in. Cannot remove favorite pokemon");
      return;
    }

    const getResponse = await fetch(url + `/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });

    if (!getResponse.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await getResponse.json();
    console.log(userData);

    //remove specified pokemonId from the favorites array
    const pokemonToRemoveIndex = userData.favorites.indexOf(pokemonId);
    if (pokemonToRemoveIndex !== -1) {
      userData.favorites.splice(pokemonToRemoveIndex, 1);
    } else {
      throw new Error("Pokemon not found in favorites");
    }

    //construct data object to be sent in PUT request
    const dataToUpdate = {
      favorites: userData.favorites,
    };

    //send updated data to server
    const putResponse = await fetch(url + `/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
      body: JSON.stringify(dataToUpdate),
    });
    if (!putResponse.ok) {
      throw new Error("Failed to remove favorite pokemon");
    }

    // console.log(putResponse);
    console.log("Pokemon removed from favorites");

    //update display after removing pokemon
    displayFavoritePokemon();
  } catch (error) {
    console.error("Error removing favorite pokemon", error);
  }
};
