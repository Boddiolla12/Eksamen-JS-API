const removeFavoritePokemon = async (pokemonId) => {
  try {
    //fetch current userData
    const getResponse = await fetch(url, {
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

    const userDataItem = userData.items.find((item) => item._uuid);
    console.log(userDataItem);

    if (!userDataItem) {
      throw new Error("User data not found");
    }

    //remove specified pokemonId from the favorites array
    const pokemonToRemove = userDataItem.favorites.indexOf(pokemonId);
    if (pokemonToRemove !== -1) {
      userDataItem.favorites.splice(pokemonToRemove, 1);
    } else {
      throw new Error("Pokemon not found in favorites");
    }

    //construct data object to be sent in PUT request
    const dataToUpdate = {
      favorites: userDataItem.favorites,
    };

    //send updated data to server
    const putResponse = await fetch(url + `/${userDataItem._uuid}`, {
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

    console.log(putResponse);
    console.log("Pokemon removed from favorites");

    //update display after removing pokemon
    displayFavoritePokemon();
  } catch (error) {
    console.error("Error removing favorite pokemon", error);
  }
};
