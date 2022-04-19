function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("button[data-create]"),
  destroyBtnEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};
refs.inputEl.addEventListener("input", onInputValue);
refs.createBtnEl.addEventListener("click", onBtnCreate);
refs.destroyBtnEl.addEventListener("click", onDestroyBoxes);
function onInputValue() {
  return Number(refs.inputEl.value);
}
function onBtnCreate() {
  let currentValue = onInputValue();
  createBoxes(currentValue);
}
function createBoxes(amount) {
  let dives = [];
  for (let i = 1; i <= amount; i += 1) {
    const startPx = 20;
    const growthPx = startPx + i * 10;
    const div = document.createElement("div");
    div.style.width = `${growthPx}px`;
    div.style.height = `${growthPx}px`;
    div.style.backgroundColor = getRandomHexColor();
    dives.push(div);
  }
  refs.boxesEl.append(...dives);
}
function onDestroyBoxes() {
  refs.boxesEl.innerHTML = "";
}
