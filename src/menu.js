const menu = (() => {
  function render() {
    const content = document.querySelector('#content');
    const dishesMenu = document.createElement('div');
    const h1 = document.createElement('h1');

    // DISHES OBJECTS
    const dishes = [
      [
        {
          name: 'STRAWBERRY HUG, ',
          price: '3€',
          recipe: 'Vegan pretzels, coconut cream, strawberry marmalade, vanilla essence, strawberries.',
        },
        {
          name: 'VERRY CHERRY CUDDLE, ',
          price: '4€',
          recipe: 'Dark cocoa, almond milk, cocoa butter, cherries jam, vanilla essence, cherries.',
        },
      ],
      [
        {
          name: 'CHOCO-BERRY DANCE, ',
          price: '3€',
          recipe: 'Dark cocoa, hazelnut milk, vegan caramel, forest berries brandy, hazelnut cream.',
        },
        {
          name: 'RASPBERRY KISS, ',
          price: '2€',
          recipe: 'Oat milk, cashew cream, raspberry sherbet, raspberry jam, frozen raspberries.',
        },
      ],
    ];

    // DESSERTS ELEMENTS
    const dessertsDiv = document.createElement('div');
    const desserstsH2 = document.createElement('h2');
    const dessertsCards = document.createElement('div');

    // DESSERT 1
    const dessert1 = document.createElement('div');
    const dessert1H3 = document.createElement('h3');
    const dessert1Recipe = document.createElement('p');
    const dessert1Image = document.createElement('img');
    const dessert1ImageDiv = document.createElement('div');

    // DESSERT 2
    const dessert2 = document.createElement('div');
    const dessert2H3 = document.createElement('h3');
    const dessert2Recipe = document.createElement('p');
    const dessert2Image = document.createElement('img');
    const dessert2ImageDiv = document.createElement('div');

    // DRINKS ELEMENTS
    const drinksDiv = document.createElement('div');
    const drinksH2 = document.createElement('h2');
    const drinksCards = document.createElement('div');

    // DRINK 1
    const drink1 = document.createElement('div');
    const drink1H3 = document.createElement('h3');
    const drink1Recipe = document.createElement('p');
    const drink1Image = document.createElement('img');
    const drink1ImageDiv = document.createElement('div');

    // DRINK 2
    const drink2 = document.createElement('div');
    const drink2H3 = document.createElement('h3');
    const drink2Recipe = document.createElement('p');
    const drink2Image = document.createElement('img');
    const drink2ImageDiv = document.createElement('div');

    // CLASSES & ATTRIBUTES
    dishesMenu.setAttribute('id', 'menu');

    // DESSERTS
    desserstsH2.textContent = 'To Sweeten Your Heart';
    dessertsCards.setAttribute('id', 'desserts-cards');

    // DRINKS
    drinksH2.textContent = 'To Rinse Your Soul';
    drinksCards.setAttribute('id', 'drinks-cards');

    // DESSERT 1
    dessert1.classList.add('dessert');
    dessert1H3.textContent = `${dishes[0][0].name}${dishes[0][0].price}`;
    dessert1Recipe.textContent = dishes[0][0].recipe;
    dessert1Image.setAttribute('src', './images/strawberry-hug.png');
    dessert1Image.setAttribute('id', 'strawberry-hug');
    dessert1Image.setAttribute('alt', 'Strawberry Hug');
    dessert1ImageDiv.setAttribute('class', 'image-div');

    // DESSERT 2
    dessert2.classList.add('dessert');
    dessert2H3.textContent = `${dishes[0][1].name}${dishes[0][1].price}`;
    dessert2Recipe.textContent = dishes[0][1].recipe;
    dessert2Image.setAttribute('src', './images/verry-cherry-cuddle.png');
    dessert2Image.setAttribute('id', 'verry-cherry-cuddle');
    dessert2Image.setAttribute('alt', 'Verry Cherry Cuddle');
    dessert2ImageDiv.setAttribute('class', 'image-div');

    // DRINK 1
    drink1.classList.add('drink');
    drink1H3.textContent = `${dishes[1][0].name}${dishes[1][0].price}`;
    drink1Recipe.textContent = dishes[1][0].recipe;
    drink1Image.setAttribute('src', './images/choco-berry-dance.png');
    drink1Image.setAttribute('id', 'choco-berry-dance');
    drink1Image.setAttribute('alt', 'Choco Berry Dance');
    drink1ImageDiv.setAttribute('class', 'image-div');

    // DRINK 2
    drink2.classList.add('drink');
    drink2H3.textContent = `${dishes[1][1].name}${dishes[1][1].price}`;
    drink2Recipe.textContent = dishes[1][1].recipe;
    drink2Image.setAttribute('src', './images/raspberry-kiss.png');
    drink2Image.setAttribute('id', 'raspberry-kiss');
    drink2Image.setAttribute('alt', 'Raspberry Kiss');
    drink2ImageDiv.setAttribute('class', 'image-div');

    // APPENDS
    dessert1.appendChild(dessert1H3);
    dessert1.appendChild(dessert1Recipe);
    dessert1ImageDiv.appendChild(dessert1Image);
    dessert1.appendChild(dessert1ImageDiv);
    dessert2.appendChild(dessert2H3);
    dessert2.appendChild(dessert2Recipe);
    dessert2ImageDiv.appendChild(dessert2Image);
    dessert2.appendChild(dessert2ImageDiv);
    dessertsCards.appendChild(dessert1);
    dessertsCards.appendChild(dessert2);
    dessertsDiv.appendChild(desserstsH2);
    dessertsDiv.appendChild(dessertsCards);

    drink1.appendChild(drink1H3);
    drink1.appendChild(drink1Recipe);
    drink1ImageDiv.appendChild(drink1Image);
    drink1.appendChild(drink1ImageDiv);
    drink2.appendChild(drink2H3);
    drink2.appendChild(drink2Recipe);
    drink2ImageDiv.appendChild(drink2Image);
    drink2.appendChild(drink2ImageDiv);
    drinksCards.appendChild(drink1);
    drinksCards.appendChild(drink2);
    drinksDiv.appendChild(drinksH2);
    drinksDiv.appendChild(drinksCards);

    dishesMenu.appendChild(h1);
    dishesMenu.appendChild(dessertsDiv);
    dishesMenu.appendChild(drinksDiv);
    content.appendChild(dishesMenu);

    // DISHES NAMES BORDER
    const allH3 = document.querySelectorAll('h3');
    allH3.forEach((h3) => {
      h3.classList.add('pink-border');
    });
  }
  return { render };
})();

export default menu;
