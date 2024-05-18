const displaySavedToFavoritesMessage = (message) => {
  console.log(message);
};

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

const saveMessage = (message) => {
  const saveMessageBox = document.createElement("div");
  saveMessageBox.textContent = message;
  saveMessageBox.classList.add("saveMessageBox");
  document.body.appendChild(saveMessageBox);
  setTimeout(() => {
    saveMessageBox.remove();
  }, 1000);
};
