const nav_overlay = document.querySelector('.mobile-menu__overlay');
const nav_icon = document.querySelector('.mobile-nav__icon');
const nav_items = document.querySelector('.mobile-menu__menu');
const close = document.querySelector('.close');

nav_icon.addEventListener('click', function(){
    nav_overlay.style.width = '100vw';
    setTimeout(navGrow, 500);
    setTimeout(showMenu, 500);
});

function navGrow() {
    nav_overlay.style.height = '100vh'
}

function showMenu() {
    nav_items.style.display = 'block';
}

function hideMenu() {
    nav_items.style.display = 'none';
}

function navClose() {
    nav_overlay.style.height = '10vh'
}

function navHide() {
    nav_overlay.style.width = 0;
}



close.addEventListener('click', function(){
    hideMenu();
    navClose();
    setTimeout(navHide, 500);
});