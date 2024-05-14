//Saving favorited pokemon to server
const saveToFavorites = async (pokemonId) => {
  try {
    // check if user is logged in
    const userId = localStorage.getItem("_uuid");
    if (!userId) {
      console.log("No user logged in. Cannot save favorite pokemon");
      return;
    }

    //Fetch current userData
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

    // Check if pokemonId already exoists in favorites
    if (userDataItem.favorites.includes(pokemonId)) {
      console.log("Pokemon already exists in favorites");
      return;
    }

    //push new pokemonId into the favorites array
    userDataItem.favorites.push(pokemonId);
    console.log("PokemonId added to array", userDataItem.favorites);

    //sorts the favorites array before its sent to server
    userDataItem.favorites.sort((a, b) => a - b);

    //console logs userData after push and sort
    //console.log(userData);

    // Construct data object to be sent in PUT request
    const dataToUpdate = {
      favorites: userDataItem.favorites,
    };

    //
    const putResponse = await fetch(url + `/${userDataItem._uuid}`, {
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
    console.log(putResponse);
    console.log("Pokemon saved to favorites");
  } catch (error) {
    console.error("Error saving favorite pokemon", error);
  }
};
