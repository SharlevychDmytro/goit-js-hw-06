function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("button[data-create]"),
  destroyBtnEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector(".boxes"),
};
refs.inputEl.addEventListener("input", onInputValue);
refs.createBtnEl.addEventListener("click", onCreateBoxes);
function onInputValue() {
  let numberValue = refs.inputEl.value;
  console.log(numberValue);
  onCreateBoxes(numberValue);
}

function onCreateBoxes(amount) {
  console.log(amount);
}

console.log(refs.destroyBtnEl);
