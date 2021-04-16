const menu = (() => {
  function render() {
    const content = document.querySelector('#content');
    const dishesMenu = document.createElement('div');
    const h1 = document.createElement('h1');

    // CREATE DISHES OBJECTS
    const dishes = [
      [
        {
          name: 'RASPBERRY HUG, ',
          price: '3€',
          recipe: 'Crushed pretzels, heavy cream, raspberry sherbet, vanilla, whole raspberries.',
        },
        {
          name: 'CHOCO-BERRY DANCE, ',
          price: '3.5€',
          recipe: 'Dark cocoa, milk, butter, egg, vanilla, forest berries.',
        },
      ],
      [
        {
          name: 'STRAWBERRY CUDDLE, ',
          price: '2.5€',
          recipe: 'Milk, strawberry brandy, heavy cream, caramel frapuccino coffee.',
        },
        {
          name: 'VERRY CHERRY KISS, ',
          price: '2€',
          recipe: 'Milk, vanilla ice cream, cherries jam, frozen cherries, ice.',
        },
      ],
    ];

    // CREATE DESSERTS ELEMENTS
    const dessertsDiv = document.createElement('div');
    const desserstsH2 = document.createElement('h2');
    const dessertsCards = document.createElement('div');
    // DESSERT 1
    const dessert1 = document.createElement('div');
    const dessert1H3 = document.createElement('h3');
    const dessert1Recipe = document.createElement('p');
    const dessert1Image = document.createElement('image');
    // DESSERT 2
    const dessert2 = document.createElement('div');
    const dessert2H3 = document.createElement('h3');
    const dessert2Recipe = document.createElement('p');
    const dessert2Image = document.createElement('image');
    // CREATE DRINKS ELEMENTS
    const drinksDiv = document.createElement('div');
    const drinksH2 = document.createElement('h2');
    const drinksCards = document.createElement('div');
    // DRINK 1
    const drink1 = document.createElement('div');
    const drink1H3 = document.createElement('h3');
    const drink1Recipe = document.createElement('p');
    const drink1Image = document.createElement('image');
    // DRINK 2
    const drink2 = document.createElement('div');
    const drink2H3 = document.createElement('h3');
    const drink2Recipe = document.createElement('p');
    const drink2Image = document.createElement('image');

    // CLASSES & ATTRIBUTES
    dishesMenu.setAttribute('id', 'menu');
    // DESSERTS
    dessertsDiv.setAttribute('id', 'desserts');
    desserstsH2.textContent = 'To Sweeten Your Heart';
    dessertsCards.setAttribute('id', 'desserts-cards');
    // DRINKS
    drinksDiv.setAttribute('id', 'drinks');
    drinksH2.textContent = 'To Rinse Your Soul';
    drinksCards.setAttribute('id', 'drinks-cards');
    // DESSERT 1
    dessert1H3.textContent = `${dishes[0][0].name}${dishes[0][0].price}`;
    dessert1Recipe.textContent = dishes[0][0].recipe;
    dessert1Image.setAttribute('id', 'raspberry-hug');
    // DESSERT 2
    dessert2H3.textContent = `${dishes[0][1].name}${dishes[0][1].price}`;
    dessert2Recipe.textContent = dishes[0][1].recipe;
    dessert2Image.setAttribute('id', 'choco-berry-dance');
    // DRINK 1
    drink1H3.textContent = `${dishes[1][0].name}${dishes[1][0].price}`;
    drink1Recipe.textContent = dishes[1][0].recipe;
    drink1Image.setAttribute('id', 'strawberry-cuddle');
    // DRINK 2
    drink2H3.textContent = `${dishes[1][1].name}${dishes[1][1].price}`;
    drink2Recipe.textContent = dishes[1][1].recipe;
    drink2Image.setAttribute('id', 'verry-cherry-kiss');

    // APPENDS
    dessert1.appendChild(dessert1H3);
    dessert1.appendChild(dessert1Recipe);
    dessert1.appendChild(dessert1Image);
    dessert2.appendChild(dessert2H3);
    dessert2.appendChild(dessert2Recipe);
    dessert2.appendChild(dessert2Image);
    dessertsCards.appendChild(dessert1);
    dessertsCards.appendChild(dessert2);
    dessertsDiv.appendChild(desserstsH2);
    dessertsDiv.appendChild(dessertsCards);

    drink1.appendChild(drink1H3);
    drink1.appendChild(drink1Recipe);
    drink1.appendChild(drink1Image);
    drink2.appendChild(drink2H3);
    drink2.appendChild(drink2Recipe);
    drink2.appendChild(drink2Image);
    drinksCards.appendChild(drink1);
    drinksCards.appendChild(drink2);
    drinksDiv.appendChild(drinksH2);
    drinksDiv.appendChild(drinksCards);

    dishesMenu.appendChild(h1);
    dishesMenu.appendChild(dessertsDiv);
    dishesMenu.appendChild(drinksDiv);
    content.appendChild(dishesMenu);

    // DISHES NAMES BORDER STYLE
    const allH3 = document.querySelectorAll('h3');
    allH3.forEach((h3) => {
      h3.classList.add('pink-border');
    });
  }
  return { render };
})();

export default menu;
