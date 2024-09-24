// Selected elements
const INPUT_BAR = document.querySelector(".input-bar");
const CALCULATOR = document.querySelector("body");

// Variables
let firstTerm = '', secondTerm = '';
let operation = '', lastOperation = '';

// Functions
const invertSignal = () => INPUT_BAR.textContent = Number(INPUT_BAR.textContent) * (-1);
const clearInputBar = () => {
    INPUT_BAR.textContent = '0';
    firstTerm = '';
    secondTerm = '';
    operation = '';
    lastOperation = '';
};

const backspace = () => {
    if (INPUT_BAR.textContent !== '0') {
        INPUT_BAR.textContent = INPUT_BAR.textContent.slice(0, -1);
        if (INPUT_BAR.textContent === '') INPUT_BAR.textContent = '0';
    };
};

const porcentage = (number) => {
    number = number / 100;
    if (number.toString().length < 9) {
        return INPUT_BAR.textContent = number;
    };
    return INPUT_BAR.textContent = parseFloat(number.toFixed(8));
};

const isValidKey = (key) => {
    return (!isNaN(parseInt(key)) || ['Backspace', 'Escape', '+/-', '%', '.'].includes(key));
};

const isValidOperation = (key) => {
    return (['+', '-', '*', '/', 'Enter'].includes(key));
};

const keyValidation = (key) => { // This function only returns true if the INPUT limit isn't broken nor the dot limit (1). The input must be a number.
    if (INPUT_BAR.textContent.length < 10 && !dotLimit(key) && (!isNaN(parseInt(key)) || key === '.')) {
        return true;
    };
    return false;
};

const dotLimit = (value) => { // Function that verifies if the dot limit was broken.
    for (let i = 0; i < INPUT_BAR.textContent.length; i++) {
        if (INPUT_BAR.textContent[i] === '.' && value === '.') { // The input bar can only have 1 dot.
            return true;
        };
    };
    return false;
};

const doMath = (firstTerm, operation, secondTerm) => {
    let result;
    switch(operation) {
        case '+':
            result = (firstTerm + secondTerm).toString();
            break;
        case '-':
            result = (firstTerm - secondTerm).toString();
            break;
        case '*':
            result = (firstTerm * secondTerm).toString();
            break;
        case '/':
            result = (firstTerm / secondTerm).toString();
            break;
    };

    if (result.includes('.'))
    {
        if (result.length > 9) {
            return Number(result).toFixed(7);
        };
    };
    return result;
};


// Event Listeners
['keydown', 'click'].forEach(event => CALCULATOR.addEventListener(event, button => {
    const BUTTON_CLICKED = button.target.value;
    const BUTTON_PRESSED = button.key;

    const INPUT = event === 'click' ? BUTTON_CLICKED : BUTTON_PRESSED;
    
    // If the key or operator isn't valid, then it won't be allowed to behave.
    if (event === 'keydown' && !(isValidKey(BUTTON_PRESSED) || isValidOperation(BUTTON_PRESSED))) {
        button.preventDefault();
        return;
    };

    if (keyValidation(INPUT)) {
        if ((INPUT_BAR.textContent === '0' && INPUT !== '.') || operation !== '') {
            INPUT_BAR.textContent = INPUT;
            lastOperation = operation;
            operation = '';
        } else {
            INPUT_BAR.textContent += INPUT;
        };
    };

    if (isValidOperation(INPUT)) {
        if (INPUT !== 'Enter') operation = INPUT;
        if (firstTerm === '') {
            firstTerm = Number(INPUT_BAR.textContent);
        } else {
            secondTerm = Number(INPUT_BAR.textContent);
        };
    };

    switch (INPUT) {
        case 'Escape':
            clearInputBar();
            return;
        case 'Backspace':
            backspace();
            return;
        case '+/-':
            invertSignal(INPUT_BAR.textContent);
            return;
        case '%':
            porcentage(Number(INPUT_BAR.textContent));
            return;
        case 'Enter':
            INPUT_BAR.textContent = doMath(firstTerm, operation || lastOperation, secondTerm || Number(INPUT_BAR.textContent));
            firstTerm = '';
            return;
    };
}));