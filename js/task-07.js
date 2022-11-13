const controlFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controlFontSize.addEventListener('input', changeFontSize)

function changeFontSize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
}