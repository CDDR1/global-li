const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');

window.addEventListener('scroll', () => {
    header.classList.toggle('change-nav', window.scrollY > 100);
    if (window.scrollY > 100) {
        logo.src = '../static/img/global-li-logo-2.png'; 
    }
    else {
        logo.src = '../static/img/global-li-logo.png';
    }
});