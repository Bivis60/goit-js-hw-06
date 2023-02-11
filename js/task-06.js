const input = document.querySelector('#validation-input');

input.addEventListener('blur', validDataText);

function validDataText(event) {
    const el = event.currentTarget.value.length;

    if(el == input.getAttribute('data-length')) {
    input.classList.add('valid');
        if(input.classList.contains('invalid')) {
            input.classList.remove('invalid')
        };
    } else {
        input.classList.add('invalid');
        if(input.classList.contains('valide')) {
            input.classList.remove('valide')
        };
    }
};