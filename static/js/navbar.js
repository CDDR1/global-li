const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');
const searchBar = document.querySelector('.search-bar');

window.addEventListener('scroll', () => {
    header.classList.toggle('change-nav', window.scrollY > 10);
});