// function to check wether username + password exists, for login purposes
const checkUserName_passwordExists = async (username, password) => {
  try {
    const getResponse = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });
    //check if response is successful (status code 200)
    if (!getResponse.ok) {
      throw new Error("Failed to check user credentials");
    }

    const userData = await getResponse.json();

    //parse JSON data from the response
    const users = userData.items;

    //log userData
    //console.log("Fetched UserData: ", users);

    //check if getResponse is an array
    if (!Array.isArray(users)) {
      throw new Error("UserData is not an array");
    }

    // check if any user matches the provided username and password
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );

    return userExists;
  } catch (error) {
    console.error("Error:", error);

    // If an error occurs during the process, return false
    return false;
  }
};

//Functionality for logging in user
const loginUser = async (username, password) => {
  try {
    //check if username and password combination matches
    const userExists = await checkUserName_passwordExists(username, password);
    console.log(userExists);

    //logs if authentication succesfull
    if (userExists) {
      alert("Login successful.");
      console.log("User logged in.");

      //Save authentication state
      saveAuthState();

      //fetch user data to get "_uuid"
      const getResponse = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + crudApiKey,
        },
      });

      if (!getResponse.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await getResponse.json();

      //extract _uuid from response
      const uuid = userData.items.find(
        (user) => user.username === username
      )?._uuid;

      if (uuid) {
        //store -uuid in local storage
        localStorage.setItem("_uuid", uuid);
        console.log("User id: ", uuid);
      }

      displayUsername(username);

      //Functionality to hide loginform elements after succesful login
      const elementsToHide = [
        "username",
        "usernameLabel",
        "password",
        "passwordLabel",
        "registerLabel",
        "registerBtn",
        "loginBtn",
      ];

      //hide register and login button, then  display logout button
      document.getElementById("accountForm").reset();
      document.getElementById("username").focus();
      toggleElementDisplay(elementsToHide, "none");
      document.getElementById("logoutBtn").style.display = "block";

      document.getElementById("deleteBtn").style.display = "block";
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    alert("Invalid username or password");
    console.error("Error", error);
  }
};

//eventlistener for login button
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  loginUser(username, password);
});
