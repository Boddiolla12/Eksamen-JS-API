// Function to delete user based on userID from local storage
const deleteUser = async () => {
  try {
    const userId = localStorage.getItem("_uuid");

    if (!userId) {
      throw new Error("No user is logged in");
    }

    const deleteResponse = await fetch(`${url}/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + crudApiKey,
      },
    });

    if (!deleteResponse.ok) {
      throw new Error("Failed to delete user");
    }

    // If delete ok, remove from local storage
    localStorage.removeItem("_uuid");

    console.log("User deleted succesfully");
  } catch (error) {
    console.error("Error", error);
  }
};

// Event listener for delete button
document.getElementById("deleteBtn").addEventListener("click", () => {
  // Let user confirm before deleting
  const confirmDelete = confirm("Are you sure you want to delete your account?");
  if (confirmDelete) {
    //Delete both deleteUser and logout user, as logoutUser contains localstorage removal functionality
    deleteUser();
    logoutUser();
  }
});
