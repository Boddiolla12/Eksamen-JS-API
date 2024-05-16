const displaySavedToFavoritesMessage = (message) => {
  console.log(message);
};

const displayErrorMessage = (message) => {
  const errorMessageBox = document.createElement("div");
  errorMessageBox.textContent = message;
  errorMessageBox.classList.add("errorMessageBox");
  console.log(message);
  document.body.appendChild(errorMessageBox);

  setTimeout(() => {
    errorMessageBox.remove();
  }, 1000);
};
