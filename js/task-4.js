const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const inputName = form.elements["email"].value.trim();
  const passwordName = form.elements["password"].value.trim();
  event.preventDefault();

  if (!inputName || !passwordName) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: inputName,
    password: passwordName,
  };

  console.log(formData);

  form.reset();
}
