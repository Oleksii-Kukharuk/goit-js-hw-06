const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newListElements = ingredients.map;

const listtt = ingredients.map((element) => {
  const newLi = document.createElement("li");
  newLi.textContent = `${element}`;
  newLi.classList.add("item");
  // console.log(newLi);
  return newLi;
});
// console.log(newListElements);

const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);
ingredientsRef.append(...listtt);
