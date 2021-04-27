const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display Mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);


//close mobile menu when click on any item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 760 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// Show active menu when scrolling when scrolling

const highlightmenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;

    // add highlight class to menu items
    if (window.innerWidth > 960 && scrollPos < 620) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 1518) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 2365) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if (elem && window.innerWidth > 960 && scrollPos < 2365 || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightmenu);
window.addEventListener('click', highlightmenu);


