function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
  bodyEl: document.querySelector("body"),
};
refs.buttonEl.addEventListener("click", onBtnClick);
function onBtnClick() {
  let randomColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = `${randomColor}`;
  refs.spanEl.textContent = randomColor;
}
