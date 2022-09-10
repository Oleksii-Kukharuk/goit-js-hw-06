const controllerRef = document.querySelector("#font-size-control");
const abracadabraRef = document.querySelector("#text");

const onBarChange = (event) => {
  const neededFormat = Number(event.target.value);
  console.log(neededFormat);
  abracadabraRef.style.fontSize = `${neededFormat}px`;
};

controllerRef.addEventListener("change", onBarChange);
