const number = document.querySelectorAll('.calculator__main-btn ');
const userInput = document.querySelector('.calculator__main-input');
const equalBtn = document.querySelector('.btn-equal');
const result = document.querySelector('.calculator__main-result');
const btnMultiplication = document.querySelector('.btn-multiplication');
const btnClear = document.querySelector('.btn-clear');
const appWrapper = document.querySelector('.calculator__main');

console.log(number);
console.log(appWrapper);
console.log(appWrapper.style);

for (let i = 0; i < number.length; i++) {
    number[i].onclick = () => {
        console.log(number[i].textContent);
        console.log(userInput.value);
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


    }
}

btnClear.onclick = () => {
    userInput.value = ''
    result.value = '';
}



