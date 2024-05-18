// Get current page filename from URL
const activePage = window.location.href.split("/").pop();

//Array of navigation items
const navItems = [
  { text: "Home", href: "index.html" },
  { text: "Favorites", href: "favorites.html" },
  { text: "Account", href: "account.html" },
];

// Get navigation container and listelements where nav items will be displayed
const navigation = document.getElementById("navigation");
const navList = document.getElementById("navLi");

//iterate over each nav items to manipulate
navItems.forEach((item) => {
  const listItem = document.createElement("li");
  // Create a link
  const link = document.createElement("a");
  link.textContent = item.text;
  link.setAttribute("href", item.href);
  listItem.appendChild(link);

  // Check if the current item's href matches the activePage
  if (item.href === activePage) {
    // If it matches, add the "active" class to the listItem
    listItem.classList.add("active");
  }

  navList.appendChild(listItem);
});
