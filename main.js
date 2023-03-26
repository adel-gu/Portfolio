import { activeLink } from './modules/desNavActive.js';
import {
  projects,
  projectTemplate,
  setProjectSkills,
  createModal,
} from './modules/projectCard.js';

const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcons = menuBtn.querySelectorAll('.menu-btn img');
const menu = document.querySelector('.nav-list');
const menuLinks = menu.querySelectorAll('.nav-list a');
const body = document.querySelector('body');
const projectContainer = document.querySelector('.projects-lists');
const projectSkillsContainer =
  document.getElementsByClassName('features-container');
const modalSkillsContainer = document.getElementsByClassName(
  'modal__header_bottom',
);

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

projects.map((project) => {
  projectContainer.innerHTML += projectTemplate(project);
});

[...projectSkillsContainer].forEach((skillContainer) => {
  const id = skillContainer.dataset['id'];
  setProjectSkills(id, skillContainer);
});

// Modal
window.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  if (id) {
    createModal(id);
    [...modalSkillsContainer].forEach((skillContainer) => {
      const id = skillContainer.dataset['id'];
      setProjectSkills(id, skillContainer);
    });
  }
});

activeLink(menuLinks);
