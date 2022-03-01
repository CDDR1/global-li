const someHeading = document.querySelector('.some-heading');
const dashboard = document.querySelector('.dashboard-container');

someHeading.addEventListener('click', () => {
    dashboard.classList.toggle('show-dashboard');
});