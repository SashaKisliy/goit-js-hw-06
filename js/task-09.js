function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const nameColor = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body')

button.addEventListener('click', changeColor)

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = body.style.backgroundColor;
}