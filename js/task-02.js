const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector("#ingredients");

const createIngredientsItem = (ingredients) => {
   const ingredientsItemEl = document.createElement("li");
   ingredientsItemEl.textContent = ingredients;
   ingredientsItemEl.classList.add("item");
   return ingredientsItemEl;
}

ingredientsListEl.append(...ingredients.map(createIngredientsItem));