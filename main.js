import NavigationMenu from './scripts/modules/nav.js';

const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcons = menuBtn.querySelectorAll('.menu-btn img');
const menu = document.querySelector('.nav-list');
const menuLinks = menu.querySelectorAll('.nav-list a');
const body = document.querySelector('body');

const navigationMenu = new NavigationMenu(menu, menuBtnIcons, menuLinks);

menuBtn.addEventListener('click', () => {
  body.classList.toggle('overflow-hidden');
  navigationMenu.toggleMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('overflow-hidden');
    navigationMenu.hideMenu();
  });
});
