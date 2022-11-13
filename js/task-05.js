const inputName = document.querySelector('#name-input');
const finalName = document.querySelector('#name-output');


inputName.addEventListener('input', submitName)

function submitName(event) {
    finalName.textContent = event.currentTarget.value;
    if (!event.currentTarget.value) {
        finalName.textContent = 'Anonymous';
    }
}

