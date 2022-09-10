function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
console.log(btnRef);
console.log(bodyRef);
const onButtonSubmit = (event) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
};

btnRef.addEventListener("click", onButtonSubmit);

console.log(getRandomHexColor());
