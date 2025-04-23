document.querySelector('.burger-btn').addEventListener('click', function() {
    const nav = document.querySelector('.header-nav');
    const burger = document.querySelector('.burger-btn');
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});