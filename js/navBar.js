let navItems = document.querySelectorAll(".nav_item");
let underLine = document.querySelector(".underline");
let currentPage = window.location.href.split("#")[1];

// used as logic free way to check the current page based on the inner html
// as innerhtml and page anchors differ in some cases.
var pages = {
  Home: "Home",
  Geography: "Geography",
  Inhabitants: "Inhabitants",
  Explorers: "Explorers",
  "Climate Change": "Climatechange",
};

setCurrentPage();

// Adding event listeners and setting location for underline
// We also set the current page, iof change occurs
navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    currentPage = pages[item.innerHTML];
    setCurrentPage();
    navToggle();
  });
  item.addEventListener("mouseover", function () {
    underLine.style.left = item.offsetLeft + "px";
    underLine.style.width = item.offsetWidth + "px";
  });
  item.addEventListener("mouseleave", function () {
    setCurrentPage();
  });
});

let hamburger = document.querySelector(".hamburger");
// Event Listener for hamburber menu toggle
hamburger.addEventListener("click", function () {
  navToggle();
});

// Sets the underline on the currentpage selected
function setCurrentPage() {
  navItems.forEach(function (item) {
    if (pages[item.innerHTML] == currentPage) {
      underLine.style.left = item.offsetLeft + "px";
      underLine.style.width = item.offsetWidth + "px";
    }
  });
}

let navItemsUl = document.querySelector(".navItems");
// Toggles the nav ul list open and closed depending on state
let navOpen = false;
function navToggle() {
  if (navOpen) {
    navOpen = false;
    navItemsUl.style.left = "-350px";
  } else {
    navOpen = true;
    navItemsUl.style.left = 0;
  }
}
