export default class NavigationMenu {
  constructor(menu, icons, links) {
    this.menu = menu;
    this.icons = icons;
    this.links = links;
  }

  toggleMenu = () => {
    this.menu.classList.toggle('toggled-menu');

    this.icons.forEach((icon) => {
      icon.classList.toggle('display-none');
    });

    this.links.forEach((link) => {
      link.classList.toggle('nav-link');
    });
  };

  hideMenu = () => {
    this.menu.classList.remove('toggled-menu');

    this.icons.forEach((icon) => {
      icon.classList.toggle('display-none');
    });

    this.links.forEach((link) => {
      link.classList.remove('nav-link');
    });
  };
}
