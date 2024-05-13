// function to check wether username + password exists, for login purposes
const checkUserName_passwordExists = async (username, password) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
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
        Authorization: "Bearer " + crudApiKey,
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

      //Save authentication state
      saveAuthState();

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
