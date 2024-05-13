const deleteUser = async () => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("User ID not found. Make sure user is logged in.");
    return;
  }

  const confirmDelete = confirm("Are you sure you want to delete your user?");
  if (confirmDelete) {
    try {
      await deleteUserFromLocal(userId);
      localStorage.removeItem("userId");
      alert("Account deleted succesfully.");
    } catch (error) {
      console.error("Error: ", error);
      alert("Failed to delete user.");
    }
  }
};

const deleteButton = document.getElementById("deleteBtn");
if (deleteButton) {
  deleteButton.addEventListener("click", deleteUser);
  console.error("Delete button not found.");
}

/*

// function to delete current logged in user
const deleteUser = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID not found, make sure user is logged in.");
    }

    const deleteUrl = `${url}/${userId}`;
    console.log("Delete URL:", deleteUrl);

    // Delete request to API to delete the user
    const deleteResponse = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });
    console.log("Delete response: ", deleteResponse);

    if (!deleteResponse.ok) {
      throw new Error("Failed to delete user.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to delete user.");
  }
};

// Creating delete button
const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete my account";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", async () => {
    const userId = localStorage.getItem("userId");
    console.log("User ID: ", userId);
    if (!userId) {
      alert("User ID not found. Make sure user is logged in");
      return;
    }

    const confirmDelete = confirm("Are you sure you want to delete your account?");
    console.log("Confirm delete:", confirmDelete);
    if (confirmDelete) {
      try {
        await deleteUser(userId);
        alert("Account deleted successfully.");
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to delete user");
      }
    }
  });
  return deleteButton;
};

*/
