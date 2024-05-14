// displays users name after succesful login
const displayUsername = (username) => {
  //create div element to display username
  const userNameDiv = document.createElement("div");
  userNameDiv.textContent = "Welcome, " + username;

  userNameDiv.classList.add("user-name"); //add classname for styling purposes

  //append div to container element in html
  const userNameContainer = document.getElementById("username-container");
  userNameContainer.appendChild(userNameDiv);
};

//Removes username display after logging out
const removeUsername = () => {
  const userNameDiv = document.querySelector(".user-name");
  if (userNameDiv) {
    userNameDiv.remove();
  }
};
