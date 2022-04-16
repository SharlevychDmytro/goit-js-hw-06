const refs = {
  inputEl: document.querySelector("#name-input"),
  nameEl: document.querySelector("#name-output"),
};
refs.inputEl.addEventListener("input", onInputValue);
function onInputValue(input) {
  refs.nameEl.textContent = input.currentTarget.value;
}
