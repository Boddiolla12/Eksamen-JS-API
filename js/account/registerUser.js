// checks if username exists, to be used by registerUser function
const checkUserNameExists = async (username) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to check username existence");
    }

    const users = await response.json();

    //check if any users matches the provided username
    const usernameExists = users.some((user) => user.username === username);

    return usernameExists;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

// function to register new user
const registerUser = async (username, password) => {
  //check if username already exists
  const usernameExists = await checkUserNameExists(username);

  if (usernameExists) {
    alert("Username already exists. Please choose another one.");
    return;
  }

  //If username doesnt exists, proceed with registration
  const userData = { username, password };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    alert("Registration successful.");
  } catch (error) {
    alert("Error registering user");
    console.error("Error:", error);
  }
};

//eventlistener for registration form
document.getElementById("accountForm").addEventListener("submit", (event) => {
  event.preventDefault(); //prevent form submission
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  registerUser(username, password);
});
