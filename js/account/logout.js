// Logout button functionality
const logoutUser = () => {
  localStorage.removeItem("loggedIn");
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
};

// Event listener for logout button
document.getElementById("logoutBtn").addEventListener("click", logoutUser);
