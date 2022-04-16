let counterValue = 0;
const refs = {
  counterEl: document.querySelector("#counter"),
  counterButtonDecrementEl: document.querySelector(
    'button[data-action="decrement"]'
  ),
  counterButtonIncrementEl: document.querySelector(
    'button[data-action="increment"]'
  ),
  valueEl: document.querySelector("#value"),
};

function onBtnDecrement() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}
function onBtnIncrement() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
refs.counterButtonDecrementEl.addEventListener("click", onBtnDecrement);
refs.counterButtonIncrementEl.addEventListener("click", onBtnIncrement);
