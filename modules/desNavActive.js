// Array => Add class "active-link" to the active link and remove it from others.

export const activeLink = (links) => {
  [...links].map((link) => {
    link.addEventListener('click', (e) => {
      removeActive(links);

      e.target.classList.add('desActiveLink');
    });
  });
};

const removeActive = (links) => {
  [...links].map((link) => {
    link.classList.remove('desActiveLink');
  });
};
