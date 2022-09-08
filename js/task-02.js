const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newListElements = [];

ingredients.forEach((element) => {
  const newLi = document.createElement("li");
  newLi.textContent = `${element}`;
  newLi.classList.add("item");
  // console.log(element);
  return newListElements.push(newLi);
});
console.log(newListElements);

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);
ingredientsRef.append(...newListElements);
