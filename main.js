import activeLink from './modules/desNavActive.js';
import {
  projects,
  projectTemplate,
  setProjectSkills,
  createModal,
} from './modules/projectCard.js';

const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcons = menuBtn.querySelectorAll('.menu-btn img');
const menu = document.querySelector('.toggled-menu');
const menuLinks = menu.querySelectorAll('.toggled-menu a');
const desNavLinks = document.querySelectorAll('.nav-link-des');
const body = document.querySelector('body');
const projectContainer = document.querySelector('.projects-lists');
const projectSkillsContainer =
  document.getElementsByClassName('features-container');
const modalSkillsContainer = document.getElementsByClassName(
  'modal__header_bottom',
);

function showMenu() {
  body.classList.toggle('overflow');
  menu.classList.toggle('toggled-menu-top');

  menuBtnIcons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
}

function hideMenu() {
  body.classList.remove('overflow');
  menu.classList.remove('toggled-menu-top');

  menuBtnIcons.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
}

menuBtn.addEventListener('click', showMenu);
menuLinks.forEach((link) => {
  link.addEventListener('click', hideMenu);
});

projects.forEach((project) => {
  projectContainer.innerHTML += projectTemplate(project);
});

[...projectSkillsContainer].forEach((skillContainer) => {
  const { id } = skillContainer.dataset;
  setProjectSkills(id, skillContainer);
});

// Modal
window.addEventListener('click', (e) => {
  const id = e.target.getAttribute('data-id');
  if (id) {
    createModal(id);
    [...modalSkillsContainer].forEach((skillContainer) => {
      const { id } = skillContainer.dataset;
      setProjectSkills(id, skillContainer);
    });
  }
});

console.log(desNavLinks);

activeLink(desNavLinks);
