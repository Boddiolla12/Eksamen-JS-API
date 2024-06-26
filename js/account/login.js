// function to check wether username + password exists, for login purposes
const checkUserName_passwordExists = async (username, password) => {
  try {
    //Fetch userdata
    const getResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });
    // Error handling if response not succesful
    if (!getResponse.ok) {
      throw new Error("Failed to check user credentials");
    }

    // Fetching userdata from the fetch request
    const userData = await getResponse.json();

    //parse JSON data from the response
    const users = userData.items;

    //check if getResponse is an array
    if (!Array.isArray(users)) {
      throw new Error("UserData is not an array");
    }

    // check if any user matches the provided username and password (converted to lowercase)
    const userExists = users.some(
      (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );

    //Return true if user exists
    return userExists;
    // Error handling for try block
  } catch (error) {
    console.error("Error:", error);

    // If an error occurs during the process, return false
    return false;
  }
};

//Functionality for logging in user
const loginUser = async (username, password) => {
  try {
    //check if username and password combination matches
    const userExists = await checkUserName_passwordExists(username, password);

    //logs if authentication succesfull
    if (userExists) {
      showLoginMessage("Login successful.");
      console.log("User logged in.");

      //Save authentication state
      saveAuthState();

      //fetch user data to get "_uuid" and favorite Pokemon ID's
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

      //extract _uuid from response
      const uuid = (
        userData.items.find((user) => user.username.toLowerCase() === username.toLowerCase()) || {}
      )._uuid;

      //Extract favoritePokemonIds from response
      const favoritePokemonIds =
        (
          userData.items.find((user) => user.username.toLowerCase() === username.toLowerCase()) ||
          {}
        ).favorites || [];

      //If uuid found in backend, save to localstorage
      if (uuid) {
        localStorage.setItem("_uuid", uuid);

        // check if favoritePokemonId's exist and save them to local storage
        if (favoritePokemonIds && Array.isArray(favoritePokemonIds)) {
          localStorage.setItem("favoritePokemonIds", JSON.stringify(favoritePokemonIds));
          console.log("Favorite pokemon IDs:", favoritePokemonIds);
        }

        console.log("User id: ", uuid);
      }
      // Show username on screen after succesful login
      displayUsername(username);

      //Functionality to hide loginform elements after succesful login
      const elementsToHide = [
        "username",
        "usernameLabel",
        "password",
        "passwordLabel",
        "registerLabel",
        "registerBtn",
        "loginBtn",
      ];

      //hide register and login button, then  display logout button
      document.getElementById("accountForm").reset();
      toggleElementDisplay(elementsToHide, "none");
      document.getElementById("logoutBtn").style.display = "block";
      document.getElementById("deleteBtn").style.display = "block";
    } else {
      showMessage("Invalid username or password");
    }
    //Error handling
  } catch (error) {
    alert("Invalid username or password");
    console.error("Error", error);
  }
};

//eventlistener for login button
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  loginUser(username, password);
});
