// Logout button functionality
const logoutUser = () => {
  //remove authentication state
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("_uuid");
  // remove user's name display
  removeUsername();

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
