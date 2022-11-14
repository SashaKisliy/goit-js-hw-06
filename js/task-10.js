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





// function createBoxes(amount) {
//   const standartWidth = 20;
//   const standartHeight = 20;
//   let total = 0;
//   for (let i = 0; i >= amount; i += 1) {
    
//       total += 10;
//       const div = document.createElement('div');
//       div.style.width = `${standartWidth + total}px`;
//       div.style.height = `${standartHeight + total}px`;
//       div.style.backgroundColor = getRandomHexColor();
//       console.log(div)
//       return boxes.append(div);
//     }
    
//   }


const createBoxes = (amount) => {
  let boxSize = 30;
  let multiBox =`<div style="width:${boxSize}px; height:${boxSize}px"></div>`;
  let str = ''
  let total = 10;
  for (let i = 0; i <= amount; i += 1) {
    total += 10
    str = `<div style="width:${(boxSize += total)}px; height:${boxSize}px; background:red"></div>`
    multiBox += str;
  }
  boxes.insertAdjacentHTML("afterbegin", multiBox);
};
input.addEventListener('change', (event) => {
  const getAmount = () => {
    const amount = input.currentTarger.value;
    return amount;
  }
})

createButton.addEventListener('click', createBoxes)
