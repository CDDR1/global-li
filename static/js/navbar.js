const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');
const searchBar = document.querySelector('.search-bar');

window.addEventListener('scroll', () => {
    header.classList.toggle('change-nav', window.scrollY > 10);
    searchBar.classList.toggle('change-search-bar', window.scrollY > 10);
    if (window.scrollY > 10) {
        logo.src = '../static/img/global-li-logo-2.png'; 
        document.documentElement.style.setProperty('--search-bar-placeholder-color', 'rgb(161, 161, 161)');
    }
    else {
        logo.src = '../static/img/global-li-logo.png';
        document.documentElement.style.removeProperty('--search-bar-placeholder-color', 'rgb(161, 161, 161)');
    }
});