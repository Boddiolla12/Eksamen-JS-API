const activePage = window.location.href.split("/").pop();

const navItems = [
  { text: "Home", href: "index.html" },
  { text: "Details", href: "details.html" },
  { text: "Favorites", href: "favorites.html" },
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

  item.href === activePage && listItem.classList.add("active");

  navList.appendChild(listItem);
});
