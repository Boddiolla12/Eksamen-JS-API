const activePage = window.location.href.split("/").pop();

const navItems = [
  { text: "Home", href: "index.html" },
  { text: "Favorites", href: "favorites.html" },
  { text: "Account", href: "account.html" },
];

// Creating nav elements

const navigation = document.getElementById("navigation");
const navList = document.getElementById("navLi");

navItems.forEach((item) => {
  const listItem = document.createElement("li");
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
