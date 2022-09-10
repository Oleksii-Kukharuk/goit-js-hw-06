const counterValueRef = document.querySelector("#value");
const incrementRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementRef = document.querySelector(
  'button[data-action = "decrement"]'
);
let counterValue = 5;
counterValueRef.textContent = counterValue;

incrementRef.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  return counterValue;
});

decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  return counterValue;
});
