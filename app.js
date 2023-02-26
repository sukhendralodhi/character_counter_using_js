const countEle = document.getElementById('text-holder');
const inputEle = document.getElementById('text_input');
const containerEle = document.getElementById('container');

const charCounter = ()=> {

    countEle.innerText = `Count: ${inputEle.value.length}`

    if(inputEle.value.length > 10) {
        countEle.style.color = 'white';
        containerEle.classList.add('bg-white')
    }
}

inputEle.addEventListener('keyup', charCounter);