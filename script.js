// STATES
let currentNumber = 0.0;
let lastOperator = null;
let result = null;
let plusMinusPressed = false;

// DISPLAY UPDATE
const output = document.querySelector('.output');

function updateDisplay(value) {
    output.textContent = value;
}

// HANDLE NUMBERS
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = parseFloat(button.textContent);
        handleNumber(number);
    });
});

function handleNumber(number) {
    currentNumber = currentNumber * 10.0 + number;
    updateDisplay(currentNumber);
}

// HANDLE DECIMAL
function handleDecimal() {
    if (currentNumber % 1 === 0) {
        currentNumber += 0.0;
        updateDisplay(currentNumber);
    }
}

// HANDLE OPERATORS
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.textContent;
        handleOperator(operator);
    });
});

function handleOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMathOperator(operator);
            break;
        case '+/-':
            handlePlusMinus();
            break;
        case 'C':
            handleClear();
            break;
        case 'AC':
            handleAllClear();
            break;
        case '=':
            handleEquals();
            break;
        case '.':
            handleDecimal();
            break;
    }
}

// HANDLE MATH OPERATORS
function handleMathOperator(operator) {
    if (lastOperator === null) {
        result = currentNumber;
    } else {
        switch (lastOperator) {
            case '+':
                result += currentNumber;
                break;
            case '-':
                result -= currentNumber;
                break;
            case 'x':
                result *= currentNumber;
                break;
            case '÷':
                result /= currentNumber;
                break;
        }
    }
    lastOperator = operator;
    currentNumber = 0.0;
    updateDisplay(result);
}

// HANDLE PLUS/MINUS
function handlePlusMinus() {
    currentNumber = -currentNumber;
    updateDisplay(currentNumber);
}

// HANDLE CLEAR
function handleClear() {
    currentNumber = 0.0;
    updateDisplay(currentNumber);
}

// HANDLE ALL CLEAR
function handleAllClear() {
    currentNumber = 0.0;
    lastOperator = null;
    result = null;
    updateDisplay(currentNumber);
}

// HANDLE EQUALS
function handleEquals() {
    if (lastOperator !== null) {
        handleMathOperator(lastOperator);
        lastOperator = null;
    }
}
