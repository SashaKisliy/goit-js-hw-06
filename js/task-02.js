const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl)

const newLiEl = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  console.log(ingredientEl)

  return ingredientEl;
})

ingredientsEl.append(...newLiEl);


