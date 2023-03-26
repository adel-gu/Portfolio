const removeActive = (links) => {
  [...links].forEach((link) => {
    link.classList.remove('desActiveLink');
  });
};

const activeLink = (links) => {
  [...links].forEach((link) => {
    link.addEventListener('click', (e) => {
      removeActive(links);

      e.target.classList.add('desActiveLink');
    });
  });
};

export default activeLink;
