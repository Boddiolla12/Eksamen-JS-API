// checks if username exists, to be used by registerUser function
const checkUserNameExists = async (username) => {
  //convert username to lowercase for consistency
  const lowerCaseUsername = username.toLowerCase();

  // construct url endpoint for ap request
  const url = `https://crudapi.co.uk/api/v1/user_data?username=${lowerCaseUsername}`;

  try {
    // Send Get request to check if username exists
    const getResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });

    if (!getResponse.ok) {
      throw new Error("Failed to check username existence");
    }

    // Parse JSON data from api
    const userData = await getResponse.json();
    console.log("Username:", lowerCaseUsername);

    //check if any user with the provided username exists
    return userData.items.some((user) => user.username.toLowerCase() === lowerCaseUsername);
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

// function to register new user
const registerUser = async (username, password) => {
  //Convert username to lowercase
  const lowerCaseUsername = username.toLowerCase();

  //check if username already exists
  const usernameExists = await checkUserNameExists(lowerCaseUsername);

  //if usernameexists, show message and return
  if (usernameExists) {
    showLoginMessage("Username already exists. Please choose another one.");
    return;
  }

  //If username doesn't exists, proceed with registration
  const userData = [{ username: lowerCaseUsername, password: password, favorites: [] }];

  // POST request for creating users in favorite array, backend.
  try {
    const postResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
      body: JSON.stringify(userData),
    });

    if (!postResponse.ok) {
      throw new Error("Registration failed");
    }

    // Show message indication login was a success
    showLoginMessage("Registration successful.");
  } catch (error) {
    alert("Error registering user");
    console.error("Error:", error);
  }
  console.log("Created user: ", userData);
};

//eventlistener for registration form
document.getElementById("accountForm").addEventListener("submit", (event) => {
  event.preventDefault(); //prevent default form submission
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  registerUser(username, password);
});
