const form = document.querySelector('.login-form');


form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    

    if (email.length === 0 || password.length === 0) {
        return alert('Все поля должны быть заполнены')
    }

    const formOutput = {
        email,
        password
    }

    console.log(formOutput)

    event.currentTarget.reset();
}
