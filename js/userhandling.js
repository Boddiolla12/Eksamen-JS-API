//function for manipulating elements elements displayvalue
const toggleElementDisplay = (elementIds, displayValue) => {
  elementIds.forEach((elementId) => {
    document.getElementById(elementId).style.display = displayValue;
  });
};

//Functionality for logging in user
const loginUser = (username, password) => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = existingUsers.find(
    (users) => users.username === username && users.password === password
  );

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

  if (user) {
    alert("Login successful.");
    //hide register and login button, then  display logout button
    document.getElementById("accountForm").reset();
    document.getElementById("username").focus();
    toggleElementDisplay(elementsToHide, "none");
    document.getElementById("logoutBtn").style.display = "block";
  } else {
    alert("Invalid username or password");
  }
};

//eventlistener for login button
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  loginUser(username, password);
});

//

// function to register new user
const registerUser = (username, password) => {
  //check if username already exists
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  // checks if a single element in the array exists that matches input value
  if (existingUsers.some((user) => user.username === username)) {
    alert("Username already exists. Please choose another one.");
    return;
  }

  //add new user to localstorage
  const newUser = { username, password };
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  alert("Registration succesful.");
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
