// Logout button functionality
const logoutUser = () => {
  //remove authentication state
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("_uuid");
  localStorage.removeItem("favoritePokemonIds");
  // remove user's name display from UI
  removeUsername();

  //Define elements to toggle their display
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
  document.getElementById("deleteBtn").style.display = "none";
  console.log("User logged out");
};

// Event listener for logout button
document.getElementById("logoutBtn").addEventListener("click", logoutUser);
