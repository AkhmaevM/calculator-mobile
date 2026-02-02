const number = document.querySelectorAll('.calculator__main-btn ');
const userInput = document.querySelector('.calculator__main-input');

console.log(number);



for (let i = 0; i < number.length; i++) {
    number[i].onclick = ()=>{
        console.log(number[i].textContent);
        console.log(userInput.value);
        userInput.value += number[i].textContent;    
    }
     
    
}

