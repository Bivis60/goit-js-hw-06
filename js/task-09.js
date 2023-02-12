const changeColor = document.querySelector('.widget');
const btnChangeColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(event) {
  
  span.textContent = getRandomHexColor();
  changeColor.style.backgroundColor = span.textContent = getRandomHexColor();
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
