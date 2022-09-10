const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
console.log(inputRef.value);
inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.target.value;
  outputRef.textContent = event.target.value
    ? event.target.value
    : "Anonymous";
});
