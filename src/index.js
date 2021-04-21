import home from './home';
import menu from './menu';
import contact from './contact';

const render = (() => {
  function renderHeader() {
    const header = document.querySelector('#header');

    // LOGO
    const logoDiv = document.createElement('div');
    const logo = document.createElement('img');
    logoDiv.setAttribute('id', 'logo');
    logo.setAttribute('src', 'images/good-mood-food-logo.png');
    logo.setAttribute('alt', 'Good Mood Food logo');
    logoDiv.appendChild(logo);
    header.appendChild(logoDiv);

    // NAVIGATION BAR
    const navbarDiv = document.createElement('nav');
    const ul = document.createElement('ul');
    const navbarLinks = ['HOME', 'MENU', 'CONTACT'];

    for (let i = 0; i < 3; i += 1) {
      const li = document.createElement('li');
      li.classList.add('nav-link', 'white-border');
      li.setAttribute('id', `link-${[i]}`);
      li.textContent = navbarLinks[i];
      ul.appendChild(li);
    }

    ul.setAttribute('id', 'nav-bar');
    navbarDiv.appendChild(ul);
    header.appendChild(navbarDiv);

    // ADD DEFAULT PINK BORDER ON HOME LINK
    const firstLink = document.querySelector('#link-0');
    firstLink.classList.add('pink-border');
  }

  function renderFooter() {
    const footer = document.querySelector('#footer');
    const footerTxt = document.createElement('p');

    // TEXT NODES
    const text1 = document.createTextNode('☽ Crafted by ');
    const text2 = document.createTextNode('mooniiDev ');
    const text3 = document.createTextNode('| ');
    const text4 = document.createTextNode('Source ');
    const text5 = document.createTextNode('☾');

    // LINKS
    const githubLink = document.createElement('a');
    const projectLink = document.createElement('a');
    githubLink.classList.add('footer-link');
    githubLink.target = '_blank';
    githubLink.setAttribute('href', 'https://github.com/mooniiDev');
    projectLink.setAttribute('href', 'https://github.com/mooniiDev/restaurant-page');
    projectLink.target = '_blank';
    projectLink.classList.add('footer-link');

    // APPENDS
    githubLink.appendChild(text2);
    projectLink.appendChild(text4);
    footerTxt.appendChild(text1);
    footerTxt.appendChild(githubLink);
    footerTxt.appendChild(text3);
    footerTxt.appendChild(projectLink);
    footerTxt.appendChild(text5);
    footer.appendChild(footerTxt);
  }

  function removePinkBorders() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.classList.remove('pink-border');
    });
  }

  function listenClicks() {
    const content = document.querySelector('#content');
    const buttons = document.querySelectorAll('li');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        removePinkBorders();
        content.textContent = '';
        if (button.textContent === 'HOME') {
          const homeLink = document.querySelector('#link-0');
          homeLink.classList.add('pink-border');
          home.render();
        } else if (button.textContent === 'MENU') {
          const menuLink = document.querySelector('#link-1');
          menuLink.classList.add('pink-border');
          menu.render();
        } else if (button.textContent === 'CONTACT') {
          const contactLink = document.querySelector('#link-2');
          contactLink.classList.add('pink-border');
          contact.render();
        }
      });
    });
  }

  renderHeader();
  home.render();
  renderFooter();
  listenClicks();
})();
