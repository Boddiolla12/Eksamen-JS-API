//function to generate a unique userId
const generateUserId = () => {
  let lastUserId = localStorage.getItem("lastUserId");
  let userId = lastUserId ? parseInt(lastUserId) : 0;
  return userId;
};

// checks if username exists, to be used by registerUser function
const checkUserNameExists = async (username) => {
  const url = `https://crudapi.co.uk/api/v1/user_data?username=${username}`;

  try {
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

    const userData = await getResponse.json();
    //console.log("API Response:", getResponse);
    console.log("Username:", username);
    console.log("Existing user Data:", userData);

    //check if any user with the provided username exists
    return userData.items.some((user) => user.username === username);
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

// function to register new user
const registerUser = async (username, password) => {
  //Generates new userId
  const userId = generateUserId() + 1;
  console.log("Generated user ID", userId);

  //check if username already exists
  const usernameExists = await checkUserNameExists(username);

  if (usernameExists) {
    alert("Username already exists. Please choose another one.");
    return;
  }

  //If username doesnt exists, proceed with registration
  const userData = [{ userId, username, password }];

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

    //increment last assigned userID and store it back to localstorage
    localStorage.setItem("lastUserId", userId);

    alert("Registration successful.");
  } catch (error) {
    alert("Error registering user");
    console.error("Error:", error);
  }
  console.log("Created user: ", userData);
};

//eventlistener for registration form
document.getElementById("accountForm").addEventListener("submit", (event) => {
  event.preventDefault(); //prevent form submission
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  registerUser(username, password);
});
