const numbers = document.querySelector('calculator__main-buttons');
const number = document.querySelectorAll('calculator__main-btn');

const clickChecker = () => {
    console.log('click')
}

// number.onclick = clickChecker();

document.addEventListener('DOMContentLoaded', () => {

    number.addEventListener('click', function clickListener () {
        console.log('click');
    })


})
