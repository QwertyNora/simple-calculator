// hämta en siffra, spara denna någonstans. rendera ut siffran.
// hämta en operator. spara denna. rendera ut operatorn.
// 

let firstNumber
let secondNumber
let step = 0;
let result = 0;

let numArray = [];
let secondNumArray = [];

let operation

let display = document.getElementById("display");

function getNumber(num){
    if(step === 0 || step === 1){
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join(''));
        display.value = firstNumber;
    } else if (step === 2){
        secondNumArray.push(num); 
        secondNumber = Number(secondNumArray.join(''));
        display.value = secondNumber; 
    }
};

function getOperator(op){
    step = 2;
    operation = op;
};

function clearDisplay(){
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0;
    operation = null; 
    result = 0;
    numArray = [];
    secondNumArray = [];
}

const calculateResult = () => {
    if(operation === '+'){
        result = firstNumber + secondNumber;
        display.value = result;
    } else if(operation === '-'){
        result = firstNumber - secondNumber;
        display.value = result;
    } else if(operation === '*'){
        result = firstNumber * secondNumber;
        display.value = result;
    } else if(operation === '/'){
        result = firstNumber / secondNumber;
        display.value = result;
    }
}







// ----------------------------------------------------------------


// let outputScreen = document.getElementById("output-screen");

// let digit = document.querySelectorAll(".number");
// let operation = document.querySelectorAll(".operation");
// let subtract = document.getElementById("subtract");
// let multiply = document.getElementById("multiply");
// let divide = document.getElementById("divide");
// let add = document.getElementById("add");

// function display(num) {
//     outputScreen.value += num;
// };

// function operation(operator){
//     if (operator === "-") {
//         outputScreen.value = -outputScreen.value;
//       }
// };

// digit.forEach((item, index) => {
//     item.setAttribute("digitNum", `num${index + 1}`);

//     item.addEventListener("click", () => {
//         display(item.textContent); 
//     });
// });

// subtract.addEventListener("click", () => {
    
// });