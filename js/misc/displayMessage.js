const displayErrorMessage = (message) => {
  const errorMessageBox = document.createElement("div");
  errorMessageBox.textContent = message;
  errorMessageBox.classList.add("errorMessageBox");
  console.error(message);
  document.body.appendChild(errorMessageBox);

  setTimeout(() => {
    errorMessageBox.remove();
  }, 1000);
};

const showLoginMessage = (message) => {
  const loginMessageBox = document.createElement("div");
  loginMessageBox.textContent = message;
  loginMessageBox.classList.add("loginMessageBox");
  document.body.appendChild(loginMessageBox);
  setTimeout(() => {
    loginMessageBox.remove();
  }, 1000);
};

const showMessage = (message) => {
  const saveMessageBox = document.createElement("div");
  saveMessageBox.textContent = message;
  saveMessageBox.classList.add("saveMessageBox");
  document.body.appendChild(saveMessageBox);
  setTimeout(() => {
    saveMessageBox.remove();
  }, 1000);
};

const noUserLoggedInMessage = (message) => {
  const noUserLoggedInMessage = document.createElement("div");
  noUserLoggedInMessage.textContent = message;
  noUserLoggedInMessage.classList.add("noUserLoggedInMessage");
  document.body.appendChild(noUserLoggedInMessage);
};
