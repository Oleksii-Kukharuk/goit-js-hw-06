const categoriesListRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListRef.length}`);

const categoryRef = document.querySelectorAll("h2");

//   console.log(categoryRef);
categoryRef.forEach(function (categories, index, array) {
  console.log(`Category: ${categories.textContent}`);
  console.log(`Elements: ${categories.nextElementSibling.children.length}`);
});
