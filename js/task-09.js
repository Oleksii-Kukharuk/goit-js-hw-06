function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
console.log(btnRef);
console.log(bodyRef);
const onButtonSubmit = (event) => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;
};

btnRef.addEventListener("click", onButtonSubmit);

console.log(getRandomHexColor());
