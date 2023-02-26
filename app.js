const countEle = document.getElementById('text-holder');
const inputEle = document.getElementById('text_input');

const charCounter = ()=> {
    countEle.innerText = `Count: ${inputEle.value.length}`
}

inputEle.addEventListener('keyup', charCounter);