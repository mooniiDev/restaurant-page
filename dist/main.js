/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = (() => {\n  function render() {\n    // CONTACT ELEMENTS\n    const content = document.querySelector('#content');\n    const contactDiv = document.createElement('div');\n    const contacts = document.createElement('div');\n\n    // PHONE\n    const phone = document.createElement('i');\n    const phoneLink = document.createElement('a');\n    const phoneSpan = document.createElement('span');\n\n    // EMAIL\n    const email = document.createElement('i');\n    const emailLink = document.createElement('a');\n    const emailSpan = document.createElement('span');\n\n    // SOCIAL MEDIA\n    const social = document.createElement('i');\n\n    const facebookLink = document.createElement('a');\n    const facebookSpan = document.createElement('span');\n    const facebook = document.createElement('i');\n\n    const instagramLink = document.createElement('a');\n    const instagramSpan = document.createElement('span');\n    const instagram = document.createElement('i');\n\n    const twitterLink = document.createElement('a');\n    const twitterSpan = document.createElement('span');\n    const twitter = document.createElement('i');\n\n    // ADDRESS\n    const address = document.createElement('i');\n    const addressSpan = document.createElement('span');\n\n    // WORK HOURS\n    const time = document.createElement('i');\n    const timeSpan = document.createElement('span');\n\n    // MAP\n    const mapDiv = document.createElement('div');\n    const map = document.createElement('img');\n\n    // CLASSES & ATTRIBUTES\n    contactDiv.setAttribute('id', 'contact');\n    contacts.setAttribute('id', 'contacts');\n\n    phone.classList.add('fal', 'fa-phone-alt');\n    phoneLink.setAttribute('href', '');\n    phoneSpan.textContent = '+1 420-777-4352';\n\n    email.classList.add('fal', 'fa-paper-plane');\n    emailLink.setAttribute('href', '');\n    emailSpan.textContent = 'hello@goodmoodfood.com';\n\n    social.classList.add('fal', 'fa-thumbs-up');\n\n    facebookLink.setAttribute('href', 'https://www.facebook.com/thegoodmoodfoodaus/');\n    facebook.classList.add('fab', 'fa-facebook-f');\n\n    instagramLink.setAttribute('href', 'https://www.instagram.com/thegoodmoodfoodaus/');\n    instagram.classList.add('fab', 'fa-instagram');\n\n    twitterLink.setAttribute('href', 'https://twitter.com/goodfoodforgood');\n    twitter.classList.add('fab', 'fa-twitter');\n\n    address.classList.add('fal', 'fa-map-marker-alt');\n    addressSpan.textContent = 'Calle Desengano 11, 28004 Madrid, Spain';\n\n    time.classList.add('fal', 'fa-hourglass-half');\n    timeSpan.textContent = 'EVERYDAY 06:00 - 23:00';\n\n    map.setAttribute('id', 'map-image');\n    map.setAttribute('src', 'images/map.png');\n    map.setAttribute('alt', 'Good Mood Food Map');\n\n    // APPENDS\n    phoneLink.appendChild(phoneSpan);\n    phone.appendChild(phoneLink);\n\n    emailLink.appendChild(emailSpan);\n    email.appendChild(emailLink);\n\n    facebookSpan.appendChild(facebook);\n    facebookLink.appendChild(facebookSpan);\n\n    instagramSpan.appendChild(instagram);\n    instagramLink.appendChild(instagramSpan);\n\n    twitterSpan.appendChild(twitter);\n    twitterLink.appendChild(twitterSpan);\n\n    social.appendChild(facebookLink);\n    social.appendChild(instagramLink);\n    social.appendChild(twitterLink);\n\n    address.appendChild(addressSpan);\n\n    time.appendChild(timeSpan);\n\n    mapDiv.appendChild(map);\n\n    contacts.appendChild(phone);\n    contacts.appendChild(email);\n    contacts.appendChild(social);\n    contacts.appendChild(address);\n    contacts.appendChild(time);\n\n    contactDiv.appendChild(contacts);\n    contactDiv.appendChild(mapDiv);\n    content.appendChild(contactDiv);\n  }\n  return { render };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = (() => {\n  function render() {\n    const content = document.querySelector('#content');\n    const aboutDiv = document.createElement('div');\n    const aboutTxt = document.createElement('h1');\n    const br1 = document.createElement('br');\n    const br2 = document.createElement('br');\n    aboutDiv.setAttribute('id', 'about');\n\n    // TEXT NODES\n    const text1 = document.createTextNode('Eat Good Food');\n    const text2 = document.createTextNode('&');\n    const text3 = document.createTextNode('Lift Your Spirit!');\n\n    // APPENDS\n    aboutTxt.appendChild(text1);\n    aboutTxt.appendChild(br1);\n    aboutTxt.appendChild(text2);\n    aboutTxt.appendChild(br2);\n    aboutTxt.appendChild(text3);\n    aboutDiv.appendChild(aboutTxt);\n    content.appendChild(aboutDiv);\n  }\n  return { render };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst render = (() => {\n  function renderHeader() {\n    const header = document.querySelector('#header');\n\n    // LOGO\n    const logoDiv = document.createElement('div');\n    const logo = document.createElement('img');\n    logoDiv.setAttribute('id', 'logo');\n    logo.setAttribute('src', 'images/good-mood-food-logo.png');\n    logo.setAttribute('alt', 'Good Mood Food logo');\n    logoDiv.appendChild(logo);\n    header.appendChild(logoDiv);\n\n    // NAVIGATION BAR\n    const navbarDiv = document.createElement('nav');\n    const ul = document.createElement('ul');\n    const navbarLinks = ['HOME', 'MENU', 'CONTACT'];\n\n    for (let i = 0; i < 3; i += 1) {\n      const li = document.createElement('li');\n      li.classList.add('nav-link', 'white-border');\n      li.setAttribute('id', `link-${[i]}`);\n      li.textContent = navbarLinks[i];\n      ul.appendChild(li);\n    }\n\n    ul.setAttribute('id', 'nav-bar');\n    navbarDiv.appendChild(ul);\n    header.appendChild(navbarDiv);\n\n    // ADD DEFAULT PINK BORDER ON HOME LINK\n    const firstLink = document.querySelector('#link-0');\n    firstLink.classList.add('pink-border');\n  }\n\n  function renderFooter() {\n    const footer = document.querySelector('#footer');\n    const footerTxt = document.createElement('p');\n\n    // TEXT NODES\n    const text1 = document.createTextNode('☽ Crafted by ');\n    const text2 = document.createTextNode('mooniiDev ');\n    const text3 = document.createTextNode('| ');\n    const text4 = document.createTextNode('Source ');\n    const text5 = document.createTextNode('☾');\n\n    // LINKS\n    const githubLink = document.createElement('a');\n    const projectLink = document.createElement('a');\n    githubLink.classList.add('footer-link');\n    githubLink.target = '_blank';\n    githubLink.setAttribute('href', 'https://github.com/mooniiDev');\n    projectLink.setAttribute('href', 'https://github.com/mooniiDev/restaurant-page');\n    projectLink.target = '_blank';\n    projectLink.classList.add('footer-link');\n\n    // APPENDS\n    githubLink.appendChild(text2);\n    projectLink.appendChild(text4);\n    footerTxt.appendChild(text1);\n    footerTxt.appendChild(githubLink);\n    footerTxt.appendChild(text3);\n    footerTxt.appendChild(projectLink);\n    footerTxt.appendChild(text5);\n    footer.appendChild(footerTxt);\n  }\n\n  function removePinkBorders() {\n    const navLinks = document.querySelectorAll('.nav-link');\n    navLinks.forEach((link) => {\n      link.classList.remove('pink-border');\n    });\n  }\n\n  function listenClicks() {\n    const content = document.querySelector('#content');\n    const buttons = document.querySelectorAll('li');\n    buttons.forEach((button) => {\n      button.addEventListener('click', () => {\n        removePinkBorders();\n        content.textContent = '';\n        if (button.textContent === 'HOME') {\n          const homeLink = document.querySelector('#link-0');\n          homeLink.classList.add('pink-border');\n          _home__WEBPACK_IMPORTED_MODULE_0__.default.render();\n        } else if (button.textContent === 'MENU') {\n          const menuLink = document.querySelector('#link-1');\n          menuLink.classList.add('pink-border');\n          _menu__WEBPACK_IMPORTED_MODULE_1__.default.render();\n        } else if (button.textContent === 'CONTACT') {\n          const contactLink = document.querySelector('#link-2');\n          contactLink.classList.add('pink-border');\n          _contact__WEBPACK_IMPORTED_MODULE_2__.default.render();\n        }\n      });\n    });\n  }\n\n  renderHeader();\n  _home__WEBPACK_IMPORTED_MODULE_0__.default.render();\n  renderFooter();\n  listenClicks();\n})();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = (() => {\n  function render() {\n    const content = document.querySelector('#content');\n    const dishesMenu = document.createElement('div');\n    const h1 = document.createElement('h1');\n\n    // DISHES OBJECTS\n    const dishes = [\n      [\n        {\n          name: 'STRAWBERRY HUG, ',\n          price: '3€',\n          recipe: 'Vegan pretzels, coconut cream, strawberry marmalade, vanilla essence, strawberries.',\n        },\n        {\n          name: 'VERRY CHERRY CUDDLE, ',\n          price: '4€',\n          recipe: 'Dark cocoa, almond milk, cocoa butter, cherries jam, vanilla essence, cherries.',\n        },\n      ],\n      [\n        {\n          name: 'CHOCO-BERRY DANCE, ',\n          price: '3€',\n          recipe: 'Dark cocoa, hazelnut milk, vegan caramel, forest berries brandy, hazelnut cream.',\n        },\n        {\n          name: 'RASPBERRY KISS, ',\n          price: '2€',\n          recipe: 'Oat milk, cashew cream, raspberry sherbet, raspberry jam, frozen raspberries.',\n        },\n      ],\n    ];\n\n    // DESSERTS ELEMENTS\n    const dessertsDiv = document.createElement('div');\n    const desserstsH2 = document.createElement('h2');\n    const dessertsCards = document.createElement('div');\n\n    // DESSERT 1\n    const dessert1 = document.createElement('div');\n    const dessert1H3 = document.createElement('h3');\n    const dessert1Recipe = document.createElement('p');\n    const dessert1Image = document.createElement('img');\n    const dessert1ImageDiv = document.createElement('div');\n\n    // DESSERT 2\n    const dessert2 = document.createElement('div');\n    const dessert2H3 = document.createElement('h3');\n    const dessert2Recipe = document.createElement('p');\n    const dessert2Image = document.createElement('img');\n    const dessert2ImageDiv = document.createElement('div');\n\n    // DRINKS ELEMENTS\n    const drinksDiv = document.createElement('div');\n    const drinksH2 = document.createElement('h2');\n    const drinksCards = document.createElement('div');\n\n    // DRINK 1\n    const drink1 = document.createElement('div');\n    const drink1H3 = document.createElement('h3');\n    const drink1Recipe = document.createElement('p');\n    const drink1Image = document.createElement('img');\n    const drink1ImageDiv = document.createElement('div');\n\n    // DRINK 2\n    const drink2 = document.createElement('div');\n    const drink2H3 = document.createElement('h3');\n    const drink2Recipe = document.createElement('p');\n    const drink2Image = document.createElement('img');\n    const drink2ImageDiv = document.createElement('div');\n\n    // CLASSES & ATTRIBUTES\n    dishesMenu.setAttribute('id', 'menu');\n\n    // DESSERTS\n    desserstsH2.textContent = 'To Sweeten Your Heart';\n    dessertsCards.setAttribute('id', 'desserts-cards');\n\n    // DRINKS\n    drinksH2.textContent = 'To Rinse Your Soul';\n    drinksCards.setAttribute('id', 'drinks-cards');\n\n    // DESSERT 1\n    dessert1.classList.add('dessert');\n    dessert1H3.textContent = `${dishes[0][0].name}${dishes[0][0].price}`;\n    dessert1Recipe.textContent = dishes[0][0].recipe;\n    dessert1Image.setAttribute('src', './images/strawberry-hug.png');\n    dessert1Image.setAttribute('id', 'strawberry-hug');\n    dessert1Image.setAttribute('alt', 'Strawberry Hug');\n    dessert1ImageDiv.setAttribute('class', 'image-div');\n\n    // DESSERT 2\n    dessert2.classList.add('dessert');\n    dessert2H3.textContent = `${dishes[0][1].name}${dishes[0][1].price}`;\n    dessert2Recipe.textContent = dishes[0][1].recipe;\n    dessert2Image.setAttribute('src', './images/verry-cherry-cuddle.png');\n    dessert2Image.setAttribute('id', 'verry-cherry-cuddle');\n    dessert2Image.setAttribute('alt', 'Verry Cherry Cuddle');\n    dessert2ImageDiv.setAttribute('class', 'image-div');\n\n    // DRINK 1\n    drink1.classList.add('drink');\n    drink1H3.textContent = `${dishes[1][0].name}${dishes[1][0].price}`;\n    drink1Recipe.textContent = dishes[1][0].recipe;\n    drink1Image.setAttribute('src', './images/choco-berry-dance.png');\n    drink1Image.setAttribute('id', 'choco-berry-dance');\n    drink1Image.setAttribute('alt', 'Choco Berry Dance');\n    drink1ImageDiv.setAttribute('class', 'image-div');\n\n    // DRINK 2\n    drink2.classList.add('drink');\n    drink2H3.textContent = `${dishes[1][1].name}${dishes[1][1].price}`;\n    drink2Recipe.textContent = dishes[1][1].recipe;\n    drink2Image.setAttribute('src', './images/raspberry-kiss.png');\n    drink2Image.setAttribute('id', 'raspberry-kiss');\n    drink2Image.setAttribute('alt', 'Raspberry Kiss');\n    drink2ImageDiv.setAttribute('class', 'image-div');\n\n    // APPENDS\n    dessert1.appendChild(dessert1H3);\n    dessert1.appendChild(dessert1Recipe);\n    dessert1ImageDiv.appendChild(dessert1Image);\n    dessert1.appendChild(dessert1ImageDiv);\n    dessert2.appendChild(dessert2H3);\n    dessert2.appendChild(dessert2Recipe);\n    dessert2ImageDiv.appendChild(dessert2Image);\n    dessert2.appendChild(dessert2ImageDiv);\n    dessertsCards.appendChild(dessert1);\n    dessertsCards.appendChild(dessert2);\n    dessertsDiv.appendChild(desserstsH2);\n    dessertsDiv.appendChild(dessertsCards);\n\n    drink1.appendChild(drink1H3);\n    drink1.appendChild(drink1Recipe);\n    drink1ImageDiv.appendChild(drink1Image);\n    drink1.appendChild(drink1ImageDiv);\n    drink2.appendChild(drink2H3);\n    drink2.appendChild(drink2Recipe);\n    drink2ImageDiv.appendChild(drink2Image);\n    drink2.appendChild(drink2ImageDiv);\n    drinksCards.appendChild(drink1);\n    drinksCards.appendChild(drink2);\n    drinksDiv.appendChild(drinksH2);\n    drinksDiv.appendChild(drinksCards);\n\n    dishesMenu.appendChild(h1);\n    dishesMenu.appendChild(dessertsDiv);\n    dishesMenu.appendChild(drinksDiv);\n    content.appendChild(dishesMenu);\n\n    // DISHES NAMES BORDER\n    const allH3 = document.querySelectorAll('h3');\n    allH3.forEach((h3) => {\n      h3.classList.add('pink-border');\n    });\n  }\n  return { render };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;