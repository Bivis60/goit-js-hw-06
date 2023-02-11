const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement =document.querySelector('button[data-action="increment"]');
const total = document.querySelector('#value');

let counterValue = 0;

const hendleClickDecrement = () => {
    counterValue -=1;
    total.textContent = counterValue;
}

const hendleClickIncrement = () => {
    counterValue +=1;
    total.textContent = counterValue;
}

buttonDecrement.addEventListener('click', hendleClickDecrement);
buttonIncrement.addEventListener('click', hendleClickIncrement);
