function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controls = document.querySelector('controls')
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')
console.log(createButton);
console.log(destroyButton);
const input = document.querySelector('input');
console.log(input);


const onCreateButtonClick = () => {
  const amount = input.value; 
  return createBoxes(amount)
}


const createBoxes = (amount) => {
  let boxSize = 30;
  let str = `<div style="width:${boxSize}px;background:${getRandomHexColor()}; height:${boxSize}px"></div>`;
  let multiBox = "";

  for (let i = 0; i < amount; i += 1) {
    multiBox += str;
    str = `<div style="width:${(boxSize += 10)}px;background:${getRandomHexColor()}; height:${boxSize}px"></div>`;
  }
  boxes.insertAdjacentHTML("afterbegin", multiBox);
};


createButton.addEventListener('click', onCreateButtonClick);

destroyButton.addEventListener('click', () => {
  boxes.innerHTML = '';
})