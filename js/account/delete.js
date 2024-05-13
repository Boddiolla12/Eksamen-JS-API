// function to delete current logged in user
const deleteUser = async (userId) => {
  try {
    if (!userId) {
      throw new Error("User ID not found, make sure user is logged in.");
    }

    const deleteUrl = `${url}/${userId}`;

    // Delete request to API to delete the user
    const deleteResponse = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });
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
  deleteButton.classList.add = "delete-button";
  deleteButton.addEventListener("click", async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Make sure user is logged in");
      return;
    }

    const confirmDelete = confirm("Are you sure you want to delete your account?");
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
