const headerDiv = (() => {
  // BODY & HEADER
  const body = document.querySelector('#content');
  const header = document.createElement('header');
  header.setAttribute('id', 'header');
  body.appendChild(header);

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
  ul.setAttribute('id', 'nav-bar');
  navbarDiv.appendChild(ul);
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.classList.add('nav-link');
    li.textContent = navbarLinks[i];
    ul.appendChild(li);
  }
  header.appendChild(navbarDiv);

  // FOOTER
  const footerDiv = document.createElement('footer');
  const footerTxt = document.createElement('p');
  const text1 = document.createTextNode('☽ Crafted by ');
  const githubLink = document.createElement('a');
  const text2 = document.createTextNode('mooniiDev ');
  const text3 = document.createTextNode('| ');
  const projectLink = document.createElement('a');
  const text4 = document.createTextNode('Source ');
  const text5 = document.createTextNode('☾');
  footerDiv.setAttribute('id', 'footer');
  githubLink.classList.add('footer-link');
  githubLink.target = '_blank';
  githubLink.setAttribute('href', 'https://github.com/mooniiDev');
  projectLink.setAttribute('href', 'https://github.com/mooniiDev/restaurant-page');
  projectLink.target = '_blank';
  projectLink.classList.add('footer-link');
  githubLink.appendChild(text2);
  projectLink.appendChild(text4);
  footerTxt.appendChild(text1);
  footerTxt.appendChild(githubLink);
  footerTxt.appendChild(text3);
  footerTxt.appendChild(projectLink);
  footerTxt.appendChild(text5);
  footerDiv.appendChild(footerTxt);
  body.appendChild(footerDiv);

  return { body };
})();
