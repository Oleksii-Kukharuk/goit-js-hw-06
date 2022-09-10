const inputRef = document.querySelector("#validation-input");

const eventBlur = (event) => {
  let neededFormat = Number(event.target.dataset.length);
  if (neededFormat === event.target.value.length) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
};
inputRef.addEventListener("blur", eventBlur);
