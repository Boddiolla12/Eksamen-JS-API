//CRUD URL
const url = "https://crudcrud.com/api/8d7b11a946f2404c9f989382b0f7da56/login";

//function for manipulating elements elements displayvalue
const toggleElementDisplay = (elementIds, displayValue) => {
  elementIds.forEach((elementId) => {
    document.getElementById(elementId).style.display = displayValue;
  });
};

// Function to save user authentication state in session storage
const saveAuthState = () => {
  sessionStorage.setItem("loggedIn", "true");
};

// Function to check if the user is already logged in
const checkLoggedIn = () => {
  return sessionStorage.getItem("loggedIn") === "true";
};
