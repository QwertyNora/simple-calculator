let currentInput = [];
let currentNumber = 0;
let operation = null;
let result = 0;

let display = document.getElementById("display");

function updateDisplay(value) {
  display.value = value.toString();
}

function getNumber(num) {
  currentInput.push(num);
  currentNumber = Number(currentInput.join(""));
  updateDisplay(currentNumber);
}

function performCalculation() {
  if (operation === "+") {
    result += currentNumber;
  } else if (operation === "-") {
    result -= currentNumber;
  } else if (operation === "*") {
    result *= currentNumber;
  } else if (operation === "/") {
    if (currentNumber === 0) {
      alert("Cannot divide by zero");
      return;
    }
    result /= currentNumber;
  }
  updateDisplay(result);
}

function getOperator(op) {
  if (currentInput.length > 0) {
    if (result === 0 && operation === null) {
      result = currentNumber;
    } else {
      performCalculation();
    }
  }
  operation = op;
  currentInput = [];
  currentNumber = 0;
}

function clearDisplay() {
  currentInput = [];
  currentNumber = 0;
  operation = null;
  result = 0;
  updateDisplay(0);
}

const calculateResult = () => {
  if (operation !== null && currentInput.length > 0) {
    performCalculation();
    operation = null;
    currentInput = [];
    currentNumber = result;
  }
};
