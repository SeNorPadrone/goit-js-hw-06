const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector("#ingredients");
const ingredientsItems = (ingredient) => ingredient.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  console.log(itemEl);
  return itemEl;
});
listRef.append(...ingredientsItems(ingredients)); 

