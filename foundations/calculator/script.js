// Selected elements
const DISPLAY = document.querySelector(".display");
const CALCULATOR = document.querySelector("body");
const OPERATORS = document.querySelectorAll(".operators > button");

// Variables
let firstTerm, operator, secondTerm;
let restartDisplay = false; // Variable that will tell if the display must restart to the number that the user wrote.

// Functions
function getDisplay() {
    return DISPLAY.innerText;
};

function setDisplay(value) {
    value !== '.' ? DISPLAY.innerText = value : DISPLAY.innerText = '0.';
};

function addNumberToDisplay(value) {
    DISPLAY.innerText += value;
};

function isValidNumberOrDot(value) {
    return !isNaN(parseInt(value)) || value === '.';
};

function exceedsLengthLimit() {
    if (DISPLAY.innerText.length > 8) {
        return true;
    } return false;
};

function exceedsDotLimit(value) {
    if (getDisplay().includes('.') && value === '.') {
        return true;
    } return false;
};

function resetDisplay() {
    setDisplay('0');
    firstTerm = operator = secondTerm = undefined;
    highlightOperator('Enter');
};

function changeSign() {
    setDisplay(Number(DISPLAY.innerText * (-1)));
};

function preventLargeResult(result) {
    if (result.length > 8) {
        if (result.includes('.')) {
            return Number(Number(result).toFixed(0)).toExponential(0);
        };
        return Number(result).toExponential(0);
    };
    return result;
}

function calculatePercentage() {
    setDisplay(preventLargeResult(Number(getDisplay() / 100).toString()));
};

function backspace() {
    if (getDisplay().length === 1) {
        setDisplay(0);
    } else {
        setDisplay(DISPLAY.innerText.slice(0, -1));
    };
};

function isValidOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
};

function isInvalidInput(value) {
    if (isValidNumberOrDot(value) || isValidOperator(value) || ['Escape', '+/-', '%', 'Backspace', 'Enter'].includes(value)) {
        return false;
    };
    return true;
};

function calculate(firstTerm, operator, secondTerm) {
    firstTerm = Number(firstTerm);
    secondTerm = Number(secondTerm);
    let result;
    switch(operator) {
        case '+':
            result = firstTerm + secondTerm;
            break;
        case '-':
            result = firstTerm - secondTerm;
            break;
        case '*':
            result = firstTerm * secondTerm;
            break;
        case '/':
            result = firstTerm / secondTerm;
            break;
    };
    return preventLargeResult(result.toString());
};

function  setVariablesForCalculate() {
    secondTerm = getDisplay();
    setDisplay(calculate(firstTerm, operator, secondTerm));
    firstTerm = getDisplay();
    secondTerm = undefined;
};

function highlightOperator(INPUT) {
    if (INPUT === 'Enter'){
        OPERATORS.forEach(button => {
            button.style.backgroundColor = 'orange';
        });
    } else {
        OPERATORS.forEach(button => {
            if (INPUT === button.attributes[0].nodeValue) {
                button.style.backgroundColor = 'rgb(255, 184, 51)';
                return;
            };
        });
    };
};

// Event Listeners
['keydown', 'click'].forEach(event => CALCULATOR.addEventListener(event, input => {
    const BUTTON_CLICKED = input.target.value;
    const BUTTON_PRESSED = input.key;

    const INPUT = event === 'click' ? BUTTON_CLICKED : BUTTON_PRESSED;

    if(isInvalidInput(INPUT)) {
        input.preventDefault();
        return;
    };

    if (isValidNumberOrDot(INPUT) && !exceedsDotLimit(INPUT)) {
        if (exceedsLengthLimit() && restartDisplay === false) return;
        if (getDisplay() === '0' || restartDisplay) {
            setDisplay(INPUT);
            highlightOperator('Enter')
            restartDisplay = false;
        } else {
            addNumberToDisplay(INPUT);
        };
        return;
    };

    switch(INPUT) {
        case 'Escape':
            resetDisplay();
            return;
        case '+/-':
            changeSign();
            return;
        case '%':
            calculatePercentage();
            return;  
        case 'Backspace':
            backspace();
            return;
    };

    if (!operator) {
        operator = INPUT;
        highlightOperator(INPUT);
        firstTerm = getDisplay();
        restartDisplay = true;
    } else if (firstTerm && INPUT !== 'Enter') {
        setVariablesForCalculate();
        restartDisplay = true;
    };

    if (INPUT === 'Enter') {
        setVariablesForCalculate();
        operator = undefined;
        highlightOperator(INPUT);
        restartDisplay = true;
    };
}));