const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuLines = document.getElementsByClassName('line');
const collapsableNav = document.querySelector('.collapsable-nav');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    for (let i = 0; i < hamburgerMenuLines.length; i++) {
        hamburgerMenuLines[i].classList.toggle('active');
    }
    collapsableNav.classList.toggle('active');
    mobileNav.classList.toggle('height-change');
});
