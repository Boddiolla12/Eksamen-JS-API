const removeFavoritePokemon = async (pokemonId) => {
  try {
    //Remove pokemonID from local storage
    let favoritePokemonIds = JSON.parse(localStorage.getItem("favoritePokemonIds")) || [];
    const pokemonIndexInLocalStorage = favoritePokemonIds.indexOf(pokemonId);
    if (pokemonIndexInLocalStorage !== -1) {
      favoritePokemonIds.splice(pokemonIndexInLocalStorage, 1);
      localStorage.setItem("favoritePokemonIds", JSON.stringify(favoritePokemonIds));
      //update display after removing pokemon
      displayFavoritePokemon();
      showMessage("Pokemon removed from favorites");
    }

    // Proceed with PUT request to update the server data
    const userId = localStorage.getItem("_uuid");
    if (!userId) {
      console.log("No user logged in. Cannot remove favorite pokemon.");
      return;
    }

    //construct data object to be sent in PUT request
    const dataToUpdate = {
      favorites: favoritePokemonIds,
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

    //console.log(putResponse);

    console.log("Pokemon removed from favorites");
  } catch (error) {
    console.error("Error removing favorite pokemon", error);
  }
};
