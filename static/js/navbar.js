const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');

window.addEventListener('scroll', () => {
    header.classList.toggle('change-nav', window.scrollY > 10);
    if (window.scrollY > 10) {
        logo.src = '../static/img/global-li-logo-2.png'; 
    }
    else {
        logo.src = '../static/img/global-li-logo.png';
    }
});