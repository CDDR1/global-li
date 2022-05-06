const hamburgerMenu = document.querySelector(".hamburger-menu");
const collapsableNav = document.querySelector(".collapsable-nav");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    collapsableNav.classList.toggle("active");
    mobileNav.classList.toggle("height-change");
});
