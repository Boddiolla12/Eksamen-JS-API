//CRUD URL
const url = "https://crudapi.co.uk/api/v1/user_data";

//CrudApitoken/link
const crudApiKey = "Eb5KYt8dM3e2LyocFBBcIHdhbbHUWVQs6xl6TuRSWFAVSL6i1g";

//function for manipulating elements elements displayvalue
const toggleElementDisplay = (elementIds, displayValue) => {
  elementIds.forEach((elementId) => {
    document.getElementById(elementId).style.display = displayValue;
  });
};

// Function to save user authentication state in session storage
const saveAuthState = () => {
  localStorage.setItem("loggedIn", "true");
};

// Function to check if the user is already logged in
const checkLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};
