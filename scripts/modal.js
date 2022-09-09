const project1 = {
  id: 1,
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  mainImg: './assets/images/projects-section/project1.png',
  sideImgs: [
    './assets/images/projects-section/project1.png',
    './assets/images/projects-section/project1.png',
    './assets/images/projects-section/project1.png',
    './assets/images/projects-section/project1.png',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  <br /><br />
  nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi.`,
  links: ['#', '#'],
};

const project2 = {
  id: 2,
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  mainImg: './assets/images/projects-section/project2.png',
  sideImgs: [
    './assets/images/projects-section/project2.png',
    './assets/images/projects-section/project2.png',
    './assets/images/projects-section/project2.png',
    './assets/images/projects-section/project2.png',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  <br /><br />
  nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi.`,
  links: ['#', '#'],
};

const project3 = {
  id: 3,
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  mainImg: './assets/images/projects-section/project3.png',
  sideImgs: [
    './assets/images/projects-section/project3.png',
    './assets/images/projects-section/project3.png',
    './assets/images/projects-section/project3.png',
    './assets/images/projects-section/project3.png',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  <br /><br />
  nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi.`,
  links: ['#', '#'],
};

const project4 = {
  id: 4,
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  mainImg: './assets/images/projects-section/project4.png',
  sideImgs: [
    './assets/images/projects-section/project4.png',
    './assets/images/projects-section/project4.png',
    './assets/images/projects-section/project4.png',
    './assets/images/projects-section/project4.png',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  <br /><br />
  nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi.`,
  links: ['#', '#'],
};

const project5 = {
  id: 5,
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  mainImg: './assets/images/projects-section/project5.png',
  sideImgs: [
    './assets/images/projects-section/project5.png',
    './assets/images/projects-section/project5.png',
    './assets/images/projects-section/project5.png',
    './assets/images/projects-section/project5.png',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  <br /><br />
  nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi.`,
  links: ['#', '#'],
};

const project6 = {
  id: 6,
  title: 'Project name goes here',
  features: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  mainImg: './assets/images/projects-section/project6.png',
  sideImgs: [
    './assets/images/projects-section/project6.png',
    './assets/images/projects-section/project6.png',
    './assets/images/projects-section/project6.png',
    './assets/images/projects-section/project6.png',
  ],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  <br /><br />
  nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi.`,
  links: ['#', '#'],
};

const projects = [project1, project2, project3, project4, project5, project6];

// span, pImgSrc, btnImgSrc1, btnImgSrc2
function createModal(id) {
  const pCardTemplate = `
  <div class="overlay hidden">
      <article class="modal container">
        <div class="modal__header">
          <div class="modal__header_title flex space-between">
            <h1 class="top_title">${projects[id].title}</h1>
            <button type="button" class="top_btn menu-btn">
              &#x2716
            </button>
          </div>
          <ul role="list" class="modal__header_bottom features-container flex">
            <li class="feature">${projects[id].features[0]}</li>
            <li class="feature">${projects[id].features[1]}</li>
            <li class="feature">${projects[id].features[2]}</li>
          </ul>
        </div>
        <div class="modal__body">
          <div class="modal__body_slide">
            <div class="slide_main">
              <span class="slide_prev flex">&lt;</span>
              <div class="slide_show">
                <img src="${projects[id].mainImg}" />
              </div>
              <span class="slide_next flex">&gt;</span>
            </div>
            <ul class="slide_items flex" role="list">
              <li class="slide_item active">
                <img src="${projects[id].sideImgs[0]}" alt="project" />
              </li>
              <li class="slide_item">
                <img src="${projects[id].sideImgs[1]}" alt="project" />
              </li>
              <li class="slide_item">
                <img src="${projects[id].sideImgs[2]}" alt="project" />
              </li>
              <li class="slide_item">
                <img src="${projects[id].sideImgs[3]}" alt="project" />
              </li>
            </ul>
          </div>
          <div class="modal__body_wrapper">
            <div class="modal__body_description">
              <p>${projects[id].description}</p>
            </div>
            <div class="modal__body_buttons flex direction">
              <button class="btn secondary-btn flex" type="button">
                <span>See Live</span>
                <img src="./assets/project-ic_link.svg" alt="see this project" />
              </button>
              <button class="btn secondary-btn flex" type="button">
                <span>See Source</span>
                <img src="./assets/github-dark.svg" alt="see this project" />
              </button>
            </div>
            <div class="modal__footer flex space-between">
              <button class="btn secondary-btn flex">
                <span class="arrow arrow-prev">&larr;</span>
                <span>Previous project</span>
              </button>
              <button class="btn secondary-btn flex">
                <span>Next project</span>
                <span class="arrow arrow-next">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;

  document.body.innerHTML += pCardTemplate;
  const modal = document.querySelector('.overlay');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-y');

  const close = document.querySelector('.top_btn');
  close.addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.classList.remove('overflow-y');
  });
}

window.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-id')) {
    createModal(e.target.getAttribute('data-id'));
  }
});
