const inputNumber = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', addBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
const divArr = [];
for (let i = 0; i < amount; i+= 1) {
  const element = document.createElement('div');
  element.style.height = `${30 + 10 * i}px`;
  element.style.width = `${30 + 10 * i}px`;
  element.style.backgroundColor = getRandomHexColor();
  divArr.push(element);
}
return divArr;
};

function addBoxes() {
  const boxes = createBoxes(inputNumber.value);
divBoxes.append(...boxes);
};

function destroyBoxes() {
  divBoxes.innerHTML = '';
};