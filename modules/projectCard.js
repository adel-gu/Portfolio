const projects = [
  {
    id: 0,
    title: 'Cherry Rooms',
    description:
      'Cherry Rooms is a front-end React project designed for the purpose of booking rooms in hotels, motels, or any other accommodation service. This project provides an intuitive and user-friendly interface that allows users to easily browse and reserve rooms based on their preferences and availability. The project is built using React, HTML, CSS, and JavaScript, with the use of APIs to fetch data from the backend.',
    class: 'item2',
    image: '../assets/projects/cherryrooms.png',
    skills: ['React', 'Redux', 'TailwindCSS', 'Ruby on Rails'],
    links: {
      repo: 'https://github.com/adel-gu/Cherry-Rooms-front-end',
      live: 'https://cherryrooms.netlify.app/',
    },
  },
  {
    id: 1,
    title: 'Happy Meals',
    description:
      'Fully Responsive Web app that fetch data from Meals DB API to show different delicious foods and many different recipes.',
    class: 'item3',
    image: '../assets/projects/meals.png',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Webpack'],
    links: {
      repo: 'https://github.com/adel-gu/Meals-API',
      live: 'https://adel-gu.github.io/Meals-API/',
    },
  },
  {
    id: 2,
    title: 'Crypto Currency Market',
    description:
      'A simple SPA consists of a home page that fetches and displays data about cryptocurrencies and their categories, and a details page where the user can interact with information about a specific cryptocurrency.',
    class: 'item5',
    image: '../assets/projects/crypto.png',
    skills: ['React', 'Redux', 'React Bootstrap'],
    links: {
      repo: 'https://github.com/adel-gu/crypto-currency-market',
      live: 'https://crypto-currency-info-app.netlify.app/',
    },
  },
  {
    id: 3,
    title: 'SpaceX',
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    class: 'item6',
    image: '../assets/projects/spacex.png',
    skills: ['React', 'Redux', 'Bootstrap'],
    links: {
      repo: 'https://github.com/adel-gu/spaceX',
      live: 'https://sapcextravelers.netlify.app/',
    },
  },
  {
    id: 4,
    title: 'Books Store',
    description:
      'Single Page Application that display Books and allows users to Add, Remove and Edit these books',
    class: 'item8',
    image: './assets/projects/bookstore.png',
    skills: ['React', 'Redux', 'Bootstrap', 'CSS'],
    links: {
      repo: 'https://github.com/adel-gu/BookStore',
      live: 'https://app-bookstore.netlify.app/',
    },
  },
  {
    id: 5,
    title: 'DevBox',
    description:
      'Devbox is a fully responsive website that offers information about the upcoming global conference in 2022 for startups and web development agencies. The website consists of two pages, a home page and an about page, both designed to provide visitors with all the necessary details about the event. The home page offers a brief introduction to the conference and its objectives, while the about page provides more in-depth information about the event, including the date, venue, and agenda. Whether your an entrepreneur or a developer, Devbox is the perfect resource for staying up-to-date on the latest industry news and trends.',
    class: 'item10',
    image: '../assets/projects/devbox.png',
    skills: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
    links: {
      repo: 'https://github.com/adel-gu/DevBox-website',
      live: 'https://adel-gu.github.io/DevBox-website/',
    },
  },
];

const projectSkills = {
  0: ['React', 'Redux', 'TailwindCSS', 'Ruby on Rails'],
  1: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Webpack'],
  2: ['React', 'Redux', 'React Bootstrap'],
  3: ['React', 'Redux', 'Bootstrap'],
  4: ['React', 'Redux', 'Bootstrap', 'CSS'],
  5: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
};

const projectTemplate = (project) => `
    <li class="${project.class} pos-relative flex direction">
      <div class="project-card pos-relative">
        <div class="project-img">
          <img src=${project.image} />
        </div>
        <div
          class="container project-details pos-absolute bottom-pos show-on-hover"
        >
          <h3>${project.title}</h3>
          <ul data-id="${project.id}" role="list" class="features-container flex">
          </ul>
          <button
            data-id=${project.id}
            class="btn secondary-btn flex"
            type="button"
          >
            See this project &rarr;
          </button>
        </div>
      </div>
    </li>
  `;

const setProjectSkills = (id, parentSkillsContainer) => {
  projectSkills[id].forEach((skill) => {
    parentSkillsContainer.innerHTML += `<li class="feature">${skill}</li>`;
  });
};

// Modal methods generatore
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
          <ul role="list" data-id="${projects[id].id}" class="modal__header_bottom features-container flex">
          </ul>
        </div>
        <div class="modal__body">
          <div class="modal__body_slide">
            <div class="slide_main">

              <div class="slide_show">
                <img src="${projects[id].image}" />
              </div>

            </div>
          </div>
          <div class="modal__body_wrapper">
            <div class="modal__body_description">
              <p>${projects[id].description}</p>
            </div>
            <div class="modal__body_buttons flex direction">
              <a href="${projects[id].links.live}" target="_blank" class="btn secondary-btn flex" type="button">
                  <span>See Live</span>
                <img src="./assets/project-ic_link.svg" alt="see this project" />
              </a>
              <a href="${projects[id].links.repo}" target="_blank" class="btn secondary-btn flex" type="button">
                <span>See Source</span>
                <img src="./assets/github-dark.svg" alt="see this project" />
              </a>
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

export {
  projects, projectTemplate, setProjectSkills, createModal,
};
