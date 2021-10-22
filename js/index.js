// DOM SELECTORS
const navigation = document.querySelector(".primary-navigation");
const navigationToggleBtn = document.querySelector(".mobile-nav-toggle");

// FUNCTIONS
const toggleNavigation = () => {
  if (navigation.getAttribute("data-visible") === "visible") {
    // navigation.style.transform = "translateX(100%)"; // Handled in CSS
    navigation.setAttribute("data-visible", "not-visible");
    navigationToggleBtn.style.backgroundImage =
      "url('../assets/shared/icon-hamburger.svg')";
  } else if (navigation.getAttribute("data-visible") === "not-visible") {
    // navigation.style.transform = "translateX(0)";  // Handled in CSS
    navigation.setAttribute("data-visible", "visible");
    navigationToggleBtn.style.backgroundImage =
      "url('../assets/shared/icon-close.svg')";
  }
};

// EVENT HANDLERS
navigationToggleBtn.addEventListener("click", toggleNavigation);
