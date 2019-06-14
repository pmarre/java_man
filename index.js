const nav_overlay = document.querySelector('.mobile-menu__overlay');
const nav_icon = document.querySelector('.mobile-nav__icon');
const nav_items = document.querySelector('.mobile-menu__menu');
const close = document.querySelector('.close');
const monthDiv = document.querySelector('.month');

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


document.addEventListener("load", addDate());

function addDate() {
    var month;
    switch (new Date().getMonth()) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = 'Month';
    }
    
    monthDiv.innerHTML = month;

}

