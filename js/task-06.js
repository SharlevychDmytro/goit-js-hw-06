const refs = {
  inputEl: document.querySelector("#validation-input"),
};
refs.inputEl.addEventListener("blur", onBlurInput);
const inputDataLength = refs.inputEl.getAttribute("data-length");
function onBlurInput(input) {
  const inputValueLength = input.currentTarget.value.length;
  if (inputValueLength < inputDataLength) {
    refs.inputEl.classList.add("invalid");
  } else {
    refs.inputEl.classList.remove("invalid");
    refs.inputEl.classList.add("valid");
  }
}
