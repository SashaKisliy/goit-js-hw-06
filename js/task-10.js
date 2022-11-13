function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')
console.log(createButton);
console.log(destroyButton)
const input = document.querySelector('input');
console.log(input)
input.addEventListener('submit', (event) => {
  const res = event.currentTarget.value;
})

createButton.addEventListener('click', createBoxes)




function createBoxes(amount) {
  amount = res;
  const standartWidth = 20;
  const standartHeight = 20;
  let total = 0;
  for (let i = 0; i >= amount; i += 1) {
    
      total += 10;
      const div = document.createElement('div');
      div.style.width = `${standartWith + total}px`;
      div.style.height = `${standartHeight + total}px`;
      div.style.backgroundColor = getRandomHexColor();
      return boxes.append('div');
    }
  }
