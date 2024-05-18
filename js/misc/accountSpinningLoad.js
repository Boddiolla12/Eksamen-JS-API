//Check if the user is already logged in on pageload
window.addEventListener("load", () => {
  if (checkLoggedIn()) {
    //hide spinner
    setTimeout(() => {
      hideSpinner();
      // show logout and delete account buttons
      document.getElementById("logoutBtn").style.display = "block";
      document.getElementById("deleteBtn").style.display = "block";
    }, 250);

    // Hide login form elements
    const elementsToHide = [
      "username",
      "usernameLabel",
      "password",
      "passwordLabel",
      "registerLabel",
      "registerBtn",
      "loginBtn",
    ];
    toggleElementDisplay(elementsToHide, "none");
  }
});

// Hide the form wrapper initially
document.getElementById("formWrapper").style.display = "none";

//show spinner while waiting for form
// Delay displaying the form after 500 milliseconds (adjust the delay as needed)
setTimeout(() => {
  showSpinner();
  document.getElementById("formWrapper").style.display = "block";
  hideSpinner();
}, 500);
