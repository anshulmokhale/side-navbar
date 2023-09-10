const navmenu = document.querySelector('.navmenu');
const li1 = document.querySelector(".navli1");
const li2 = document.querySelector(".navli2");
const li3 = document.querySelector(".navli3");
const li4 = document.querySelector(".navli4");
const li5 = document.querySelector(".navli5");
const li6 = document.querySelector(".navli6");

function openMenu() {
    navmenu.classList.remove('close-menu');
    navmenu.classList.add('open-menu');
    navmenu.classList.add('navmenushow');
    li1.classList.add('open-menu');
    li2.classList.add('open-menu');
    li3.classList.add('open-menu');
    li4.classList.add('open-menu');
    li5.classList.add('open-menu');
    li6.classList.add('open-menu');
}

function closeMenu() {
    navmenu.classList.remove('open-menu');
    li1.classList.remove('open-menu');
    li2.classList.remove('open-menu');
    li3.classList.remove('open-menu');
    li4.classList.remove('open-menu');
    li5.classList.remove('open-menu');
    li6.classList.remove('open-menu');
    navmenu.classList.add('close-menu');
}

function toggleMenu() {
    if (navmenu.classList.contains('open-menu')) {
        closeMenu();
    } else {
        openMenu();
    }
}