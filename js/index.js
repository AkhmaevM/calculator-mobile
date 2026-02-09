const number = document.querySelectorAll('.calculator__main-btn');
const userInput = document.querySelector('.calculator__main-input');
const equalBtn = document.querySelector('.btn-equal');
const result = document.querySelector('.calculator__main-result');
const btnMultiplication = document.querySelector('.btn-multiplication');
const btnClear = document.querySelector('.btn-clear');
const appWrapper = document.querySelector('.calculator__main');
const deleteBtn = document.querySelector('.btn-delete');
const changeSignBtn = document.querySelector('.btn-changeSign');
const btnTop = document.querySelectorAll('.btn-top');
const btnRight = document.querySelectorAll('.btn-right');
const calculator = document.querySelector('.calculator');
const deleteIcon = document.querySelector('.delete-icon');
const lightThemeBtn = document.querySelector('.calculator__theme-light');
const darkThemeBtn = document.querySelector('.calculator__theme-dark');
const body = document.querySelector('.body');
const themeBtnsBox = document.querySelector('.calculator__theme');
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

for (let i = 0; i < number.length; i++) {

    number[i].onclick = () => {

        changeSignBtn.onclick = () => {
            userInput.value = userInput.value * -1;
        }

        userInput.value += number[i].textContent;

        if (userInput.value.length === 15 || appWrapper.style.width === "375px") {
            userInput.style.fontSize = '32px';
        }

        if (result.textContent.length === 7) {
            result.style.fontSize = '72px';
        }
        equalBtn.onclick = () => {
            result.value = eval(userInput.value);
            userInput.value = '';

            switch (number[i].textContent) {
                case '%':
                case "*":
                case '-':
                case '+':

                    userInput.value += result.value;
            }
        }

        deleteBtn.onclick = () => {
            for (let i = 0; i < userInput.value.length; i++) {
                console.log(userInput.value[i]);

            }
            userInput.value = userInput.value.slice(0, -1)
        }

    }
}

lightThemeBtn.onclick = lightThemeHandler;

darkThemeBtn.onclick = darkThemeHandler;

btnClear.onclick = () => {
    userInput.value = ''
    result.value = '';
}

function changeSign(x) {
    return -1 * x;
}

function lightThemeHandler() {
    for (let i = 0; i < number.length; i++) {
        number[i].style.backgroundColor = 'white';
        number[i].style.color = 'black';
    }

    for (let j = 0; j < btnTop.length; j++) {
        btnTop[j].style.backgroundColor = '#D2D3DA';
    }


    for (let k = 0; k < btnRight.length; k++) {
        btnRight[k].style.backgroundColor = '#4B5EFC';
        btnRight[k].style.color = 'white';
    }

    body.style.backgroundColor = '#F1F2F3';
    calculator.style.backgroundColor = '#F1F2F3';
    deleteIcon.src = './img/delete-Icon.svg';
    userInput.style.color = 'black';
    userInput.style.background = '#F1F2F3';
    result.style.color = 'black';
    result.style.background = '#F1F2F3';
    themeBtnsBox.style.background = 'white';
    darkThemeBtn.style.backgroundColor = 'white';
    lightThemeBtn.style.backgroundColor = 'white';
    lightIcon.src = '../img/Calculator/sun.svg';
    darkIcon.src = '../img/Calculator/O.svg';
}

function darkThemeHandler() {

    for (let i = 0; i < number.length; i++) {
        number[i].style.backgroundColor = '#2E2F38';
        number[i].style.color = 'white';
    }

    for (let j = 0; j < btnTop.length; j++) {
        btnTop[j].style.backgroundColor = '#4E505F';
    }


    for (let k = 0; k < btnRight.length; k++) {
        btnRight[k].style.backgroundColor = '#4B5EFC';
        btnRight[k].style.color = 'white';
    }

    body.style.backgroundColor = '#17171C';
    calculator.style.backgroundColor = '#17171C';
    deleteIcon.src = './img/Delete.svg';
    userInput.style.color = 'white';
    userInput.style.background = '#17171C';
    result.style.color = 'white';
    result.style.background = '#17171C';
    themeBtnsBox.style.background = '#2E2F38';
    darkThemeBtn.style.backgroundColor = '#2E2F38';
    lightThemeBtn.style.backgroundColor = '#2E2F38';
    lightIcon.src = '../img/Calculator/O-dark.svg';
    darkIcon.src = '../img/Calculator/moon.svg';
}; 