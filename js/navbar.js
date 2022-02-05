const section = document.querySelector('main');
const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');

const options = {
    threshold: 0,
    rootMargin: '100px 0px 0px 0px',
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) {
            header.classList.add('change-nav');
            logo.src = '../img/global-li-logo-2.png';
        }
        else {    
            header.classList.remove('change-nav');
            logo.src = '../img/global-li-logo.png';
        }
    });
}, options);

observer.observe(section);