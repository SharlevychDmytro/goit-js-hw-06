const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
const itemEl = ingredients.map((arry) => {
  const item = document.createElement("li");
  item.textContent = arry;
  item.classList.add("item");
  return item;
});
ingredientsEl.append(...itemEl);
