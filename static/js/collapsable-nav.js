const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuLines = document.getElementsByClassName('line');
const collapsableNav = document.querySelector('.collapsable-nav');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    Array.from(hamburgerMenuLines).forEach(line => line.classList.toggle('active'));
    collapsableNav.classList.toggle('active');
    mobileNav.classList.toggle('height-change');
});
