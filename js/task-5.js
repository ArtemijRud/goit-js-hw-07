function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.querySelector("body");

function changeColor() {
  let randomHex = getRandomHexColor();
  colorSpan.textContent = randomHex;
  body.style.backgroundColor = randomHex;
}
button.addEventListener("click", changeColor);
