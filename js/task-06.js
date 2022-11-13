
const input = document.querySelector('#validation-input');

input.addEventListener('blur', checkValidInput)

function checkValidInput(event) {
    if (event.currentTarget.value.length === 6) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
}