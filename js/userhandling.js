//CRUD URL
const url = "https://crudcrud.com/api/8d7b11a946f2404c9f989382b0f7da56/login";

//function for manipulating elements elements displayvalue
const toggleElementDisplay = (elementIds, displayValue) => {
  elementIds.forEach((elementId) => {
    document.getElementById(elementId).style.display = displayValue;
  });
};

const checkUserName_passwordExists = async (username, password) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //check if response is succesful (status code 200)
    if (!response.ok) {
      throw new Error("Failed to check user credentials");
    }
    //parse JSON data from the response
    const users = await response.json();

    // check if any user matches the provided username and password
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );

    return userExists;
  } catch (error) {
    console.error("Error:", error);

    // If an error occurs during the process, return false
    return false;
  }
};

//Functionality for logging in user
const loginUser = async (username, password) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const users = await response.json();

    //check if user exists
    const userExists = users.some(
      (user) => user.username === username && username && user.password === password
    );

    if (userExists) {
      alert("Login successful.");

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
      document.getElementById("username").focus();
      toggleElementDisplay(elementsToHide, "none");
      document.getElementById("logoutBtn").style.display = "block";
    } else {
      alert("Invalid username or password");
    }
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

//

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

//

// Logout button functionality
const logoutUser = () => {
  const elementsToToggle = [
    "username",
    "usernameLabel",
    "password",
    "passwordLabel",
    "registerBtn",
    "registerLabel",
    "loginBtn",
  ];
  toggleElementDisplay(elementsToToggle, "inline");
  document.getElementById("logoutBtn").style.display = "none";
};

// Event listener for logout button
document.getElementById("logoutBtn").addEventListener("click", logoutUser);
