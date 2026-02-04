const number = document.querySelectorAll('.calculator__main-btn ');
const userInput = document.querySelector('.calculator__main-input');
const equalBtn = document.querySelector('.btn-equal');
const result = document.querySelector('.calculator__main-result');
const btnMultiplication = document.querySelector('.btn-multiplication');
const btnClear = document.querySelector('.btn-clear');
const appWrapper = document.querySelector('.calculator__main');
const deleteBtn = document.querySelector('.btn-delete');
const changeSignBtn = document.querySelector('.btn-changeSign');


console.log(changeSignBtn);

for (let i = 0; i < number.length; i++) {
    number[i].onclick = () => {
        
        changeSignBtn.onclick = ()=>{
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

        deleteBtn.onclick = ()=>{
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



function changeSign (x){
    return -1*x;
}