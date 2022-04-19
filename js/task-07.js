const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
refs.inputEl.addEventListener("input", onInputValue);
function onInputValue() {
  let data = document.querySelector("#font-size-control").value;
  refs.textEl.style.fontSize = `${data}px`;
}
