const formSubmst = document.querySelector('.login-form');

formSubmst.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    if(el.email.value === '' || el.password.value === '') {
        return alert('Заповни вільні поля!');
    }
    const email = el.email.value;
    const password = el.password.value;

    const data = {
        email,
        password,
    }
    console.log(data);
    el.reset();
}

