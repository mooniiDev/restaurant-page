const home = (() => {
  function render() {
    const content = document.querySelector('#content');
    const aboutDiv = document.createElement('div');
    const aboutTxt = document.createElement('p');
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    aboutDiv.setAttribute('id', 'about');
    // TEXT NODES
    const text1 = document.createTextNode('Eat Good Food');
    const text2 = document.createTextNode('&');
    const text3 = document.createTextNode('Lift Your Spirit!');
    // APPENDS
    aboutTxt.appendChild(text1);
    aboutTxt.appendChild(br1);
    aboutTxt.appendChild(text2);
    aboutTxt.appendChild(br2);
    aboutTxt.appendChild(text3);
    aboutDiv.appendChild(aboutTxt);
    content.appendChild(aboutDiv);
  }
  return { render };
})();

export default home;
