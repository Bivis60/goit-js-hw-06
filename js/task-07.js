const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', moveFontSize);

function moveFontSize(event) {
    const el = event.currentTarget.value;
    span.style.fontSize = `${el}px`;
}