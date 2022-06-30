const menuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.nav-container')
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})