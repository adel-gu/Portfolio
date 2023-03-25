const projects = [
  {
    id: 2,
    title: 'Cherry Rooms',
    class: 'item2',
    image: '../assets/projects/cherryrooms.png',
    skills: ['React', 'Redux', 'TailwindCSS', 'Ruby on Rails'],
  },
  {
    id: 3,
    title: 'Happy Meals',
    class: 'item3',
    image: '../assets/projects/meals.png',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Webpack'],
  },
  {
    id: 5,
    title: 'Crypto Currency Market',
    class: 'item5',
    image: '../assets/projects/crypto.png',
    skills: ['React', 'Redux', 'React Bootstrap'],
  },
  {
    id: 6,
    title: 'SpaceX',
    class: 'item6',
    image: '../assets/projects/spacex.png',
    skills: ['React', 'Redux', 'Bootstrap'],
  },
  {
    id: 8,
    title: 'Books Store',
    class: 'item8',
    image: './assets/projects/bookstore.png',
    skills: ['React', 'Redux', 'Bootstrap', 'CSS'],
  },
  {
    id: 10,
    title: 'DevBox',
    class: 'item10',
    image: '../assets/projects/devbox.png',
    skills: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
  },
];

const projectSkills = {
  2: ['React', 'Redux', 'TailwindCSS', 'Ruby on Rails'],
  3: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Webpack'],
  5: ['React', 'Redux', 'React Bootstrap'],
  6: ['React', 'Redux', 'Bootstrap'],
  2: ['React', 'Redux', 'TailwindCSS', 'Ruby on Rails'],
  8: ['React', 'Redux', 'Bootstrap', 'CSS'],
  10: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
};

const projectTemplate = (project) => {
  return `
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
            data-id="0"
            class="btn secondary-btn flex"
            type="button"
          >
            See this project &rarr;
          </button>
        </div>
      </div>
    </li>
  `;
};

const setProjectSkills = (id, parentSkillsContainer) => {
  projectSkills[id].map((skill) => {
    parentSkillsContainer.innerHTML += `<li class="feature">${skill}</li>`;
  });
};

export { projects, projectTemplate, setProjectSkills };
