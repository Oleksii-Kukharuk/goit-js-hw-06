const counterValueRef = document.querySelector("#value");
const incrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementRef = document.querySelector(
  'button[data-action = "decrement"]'
);
let counterValue = 0;

incrementRef.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  counterValueRef.textContent = counterValue;
});

decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  counterValueRef.textContent = counterValue;
});
