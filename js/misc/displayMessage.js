// function to display error messages
const displayErrorMessage = (message) => {
  const errorMessageBox = document.createElement("div");
  errorMessageBox.textContent = message;
  errorMessageBox.classList.add("errorMessageBox");
  console.error(message);
  // Append the error message box to the body of the document
  document.body.appendChild(errorMessageBox);
  setTimeout(() => {
    errorMessageBox.remove();
  }, 1000);
};

//Function to display a login message for a short duration
const showLoginMessage = (message) => {
  // Create a new div element for the login message
  const loginMessageBox = document.createElement("div");
  loginMessageBox.textContent = message;
  loginMessageBox.classList.add("loginMessageBox");
  document.body.appendChild(loginMessageBox);
  setTimeout(() => {
    loginMessageBox.remove();
  }, 1000);
};

// function to show message for a duration
const showMessage = (message) => {
  const saveMessageBox = document.createElement("div");
  saveMessageBox.textContent = message;
  saveMessageBox.classList.add("saveMessageBox");
  document.body.appendChild(saveMessageBox);
  setTimeout(() => {
    saveMessageBox.remove();
  }, 1000);
};

// Function to show message when no user is logged in
const noUserLoggedInMessage = (message) => {
  const noUserLoggedInMessage = document.createElement("div");
  noUserLoggedInMessage.textContent = message;
  noUserLoggedInMessage.classList.add("noUserLoggedInMessage");
  document.body.appendChild(noUserLoggedInMessage);
};
