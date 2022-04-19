const refs = {
  formEl: document.querySelector(".login-form"),
};
refs.formEl.addEventListener("submit", onFormBtn);
function onFormBtn(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Fill in all fields");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  refs.formEl.reset();
}
