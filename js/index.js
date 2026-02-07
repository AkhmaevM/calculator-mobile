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




// for (let i = 0; i < btnRight.length; i++) {
//     btnRight[i].style.backgroundColor = '#4B5EFC';
//     btnRight[i].style.color = 'white';
// }


lightThemeBtn.onclick = () => {

    console.log(body);

    for (let i = 0; i < number.length; i++) {
        number[i].style.backgroundColor = 'white';
        number[i].style.color = 'black';
    }

    for (let j = 0; j < btnTop.length; j++) {
        btnTop[j].style.backgroundColor = '#4E505F';
        console.log(btnTop[j]);
    }

    for (let k = 0; k < btnRight.length; k++) {
        btnRight[k].style.backgroundColor = '#4B5EFC';
        btnRight[k].style.color = 'white';
    }

    body.style.backgroundColor = '#D2D3DA';
    calculator.style.backgroundColor = '#D2D3DA';

    btnTop.style.backgroundColor = '#D2D3DA';
    btnRight.style.backgroundColor = '#4B5EFC';
    btnRight.style.color = 'white';

    deleteIcon.style.src = '../img/delete-Icon.svg';
    userInput.style.color = 'black';
    userInput.style.background = '#D2D3DA';

    result.style.color = 'black';
    result.style.background = '#D2D3DA';
    console.log(result.style);
    console.log(userInput.style);
}


for (let i = 0; i < number.length; i++) {
    // number[i].style.backgroundColor = 'white';
    // number[i].style.color = 'black';



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
            // console.log(userInput.value.at[-1]);
            userInput.value = userInput.value.slice(0, -1)
        }

    }
}

btnClear.onclick = () => {
    userInput.value = ''
    result.value = '';
}



function changeSign(x) {
    return -1 * x;
}


