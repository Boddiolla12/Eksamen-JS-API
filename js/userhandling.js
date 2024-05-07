//CRUD URL
const crudUrl = "https://crudcrud.com/api/ca99ae2b001546eb8b76be0a318180df/login";

//function for manipulating elements elements displayvalue
const toggleElementDisplay = (elementIds, displayValue) => {
  elementIds.forEach((elementId) => {
    document.getElementById(elementId).style.display = displayValue;
  });
};

const checkUserCredentials = async (username, password) => {
  const url = `${crudUrl}?username=${username}&password=${password}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to check user credentials");
    }

    const users = await response.json();
    return users.length > 0 && users[0].username === username && users[0].password === password;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

//Functionality for logging in user
const loginUser = async (username, password) => {
  try {
    const response = await fetch(crudUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const user = await response.json();

    //check if user exists
    const acceptCredentials = await checkUserCredentials(username, password);

    if (acceptCredentials) {
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

//checks if username already exists
const checkUserNameExists = async (username) => {
  const url = `${crudUrl}?username=${username}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to check existence of username");
    }

    const users = await response.json();
    return users.length > 0;
  } catch (error) {
    console.log("Error:", error);
    return true;
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
    const response = await fetch(crudUrl, {
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
