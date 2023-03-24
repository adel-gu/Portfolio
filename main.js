import { activeLink } from './modules/desNavActive.js';

const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcons = menuBtn.querySelectorAll('.menu-btn img');
const menu = document.querySelector('.nav-list');
const menuLinks = menu.querySelectorAll('.nav-list a');
const body = document.querySelector('body');

function showMenu() {
  body.classList.toggle('overflow');
  menu.classList.toggle('toggled-menu');

  menuBtnIcons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });

  menuLinks.forEach((link) => {
    link.classList.remove('nav-link-des');
    link.classList.toggle('nav-link');
  });
}

function hideMenu() {
  body.classList.remove('overflow');
  menu.classList.remove('toggled-menu');

  menuBtnIcons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });

  menuLinks.forEach((link) => {
    link.classList.add('nav-link-des');
    link.classList.remove('nav-link');
  });
}

menuBtn.addEventListener('click', showMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', hideMenu);
});

activeLink(menuLinks);
