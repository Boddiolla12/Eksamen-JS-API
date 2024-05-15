// displays users name after succesful login
const displayUsername = (username) => {
  // store username in localstorage
  localStorage.setItem("username", username);

  //create div element to display username
  const userNameDiv = document.createElement("div");
  userNameDiv.textContent = "Welcome, " + username;

  userNameDiv.classList.add("user-name"); //add classname for styling purposes

  //append div to container element in html
  const userNameContainer = document.getElementById("username-container");
  userNameContainer.appendChild(userNameDiv);
};

// function to retrieve username from local storage and display it
const displayStoredUsername = () => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    displayUsername(storedUsername);
  }
};

//Removes username display after logging out
const removeUsername = () => {
  const userNameDiv = document.querySelector(".user-name");
  if (userNameDiv) {
    userNameDiv.remove();

    //remove username from local storage on logout
    localStorage.removeItem("username");
  }
};

// Call displaystoredusername when page loads to show welcome message if logged in
window.addEventListener("load", displayStoredUsername);

// adds class to logoutBtn and deleteBtn
document.getElementById("logoutBtn").classList.add("logoutBtn", "accountBtn");
document.getElementById("deleteBtn").classList.add("deleteBtn", "accountBtn");

// adds class to loginBtn and registerBtn
document.getElementById("loginBtn").classList.add("loginBtn", "accountBtn");
document.getElementById("registerBtn").classList.add("registerBtn", "accountBtn");
