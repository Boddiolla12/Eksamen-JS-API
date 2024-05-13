//Saving favorited pokemon to server
const saveToFavorites = async (pokemonId) => {
  try {
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

    //push new pokemonId into the favorites array
    userDataItem.favorites.push(pokemonId);
    console.log(userDataItem.favorites);
    //

    ///////////////////////////////////////
    // PROBLEMER MED PUT REQUEST UNDER
    //
    const putResponse = await fetch("https://crudapi.co.uk/api/v1/user_data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
      body: JSON.stringify(userData),
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

/*

// Retrieve existing pokemon from localstorage
let savedPokemon = JSON.parse(localStorage.getItem("savedPokemon")) || [];

// if savedPokemon is not an array/exists intialize
  if (!Array.isArray(savedPokemon)) {
    savedPokemon = [];
  }

  //check if pokemon already saved
  if (savedPokemon.includes(pokemonId)) {
    console.log("This pokemon is already saved!");
    return;
  }

  //Adds pokemonID to savedPokemon Array
  savedPokemon.push(pokemonId);

  //Save updated array back to localstorage
  localStorage.setItem("savedPokemon", JSON.stringify(savedPokemon));

  console.log("Pokemon saved to localStorage");
};


*/
