const contact = (() => {
  function render() {
    // CONTACT ELEMENTS
    const content = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    const contacts = document.createElement('div');

    // PHONE
    const phone = document.createElement('i');
    const phoneLink = document.createElement('a');
    const phoneSpan = document.createElement('span');

    // EMAIL
    const email = document.createElement('i');
    const emailLink = document.createElement('a');
    const emailSpan = document.createElement('span');

    // SOCIAL MEDIA
    const social = document.createElement('i');

    const facebookLink = document.createElement('a');
    const facebookSpan = document.createElement('span');
    const facebook = document.createElement('i');

    const instagramLink = document.createElement('a');
    const instagramSpan = document.createElement('span');
    const instagram = document.createElement('i');

    const twitterLink = document.createElement('a');
    const twitterSpan = document.createElement('span');
    const twitter = document.createElement('i');

    // ADDRESS
    const address = document.createElement('i');
    const addressSpan = document.createElement('span');

    // WORK HOURS
    const time = document.createElement('i');
    const timeSpan = document.createElement('span');

    // MAP
    const mapDiv = document.createElement('div');
    const map = document.createElement('img');

    // CLASSES & ATTRIBUTES
    contactDiv.setAttribute('id', 'contact');
    contacts.setAttribute('id', 'contacts');

    phone.classList.add('fal', 'fa-phone-alt');
    phoneLink.setAttribute('href', '');
    phoneSpan.textContent = '+1 420-777-4352';

    email.classList.add('fal', 'fa-paper-plane');
    emailLink.setAttribute('href', '');
    emailSpan.textContent = 'hello@goodmoodfood.com';

    social.classList.add('fal', 'fa-thumbs-up');

    facebookLink.setAttribute('href', 'https://www.facebook.com/thegoodmoodfoodaus/');
    facebook.classList.add('fab', 'fa-facebook-f');

    instagramLink.setAttribute('href', 'https://www.instagram.com/thegoodmoodfoodaus/');
    instagram.classList.add('fab', 'fa-instagram');

    twitterLink.setAttribute('href', 'https://twitter.com/goodfoodforgood');
    twitter.classList.add('fab', 'fa-twitter');

    address.classList.add('fal', 'fa-map-marker-alt');
    addressSpan.textContent = 'Calle Desengano 11, 28004 Madrid, Spain';

    time.classList.add('fal', 'fa-hourglass-half');
    timeSpan.textContent = 'EVERYDAY 06:00 - 23:00';

    map.setAttribute('src', 'images/map.png');
    map.setAttribute('alt', 'Good Mood Food Map');

    // APPENDS
    phoneLink.appendChild(phoneSpan);
    phone.appendChild(phoneLink);

    emailLink.appendChild(emailSpan);
    email.appendChild(emailLink);

    facebookSpan.appendChild(facebook);
    facebookLink.appendChild(facebookSpan);

    instagramSpan.appendChild(instagram);
    instagramLink.appendChild(instagramSpan);

    twitterSpan.appendChild(twitter);
    twitterLink.appendChild(twitterSpan);

    social.appendChild(facebookLink);
    social.appendChild(instagramLink);
    social.appendChild(twitterLink);

    address.appendChild(addressSpan);

    time.appendChild(timeSpan);

    mapDiv.appendChild(map);

    contacts.appendChild(phone);
    contacts.appendChild(email);
    contacts.appendChild(social);
    contacts.appendChild(address);
    contacts.appendChild(time);

    contactDiv.appendChild(contacts);
    contactDiv.appendChild(mapDiv);
    content.appendChild(contactDiv);
  }
  return { render };
})();

export default contact;
