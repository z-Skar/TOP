// Selected elements
const INPUT_BAR = document.querySelector(".input-bar");
const NUMBERS = document.querySelectorAll(".number-line");
const BODY = document.querySelector("body");


// Functions
const clearInputBar = () => INPUT_BAR.textContent = '0';
const backspace = () => {
    if (INPUT_BAR.textContent !== '0') {
        INPUT_BAR.textContent = INPUT_BAR.textContent.slice(0, -1);
        if (INPUT_BAR.textContent === '') INPUT_BAR.textContent = '0';
    };
};

const porcentage = (number) => {
    if (number.toString().length <= 8) {
        return INPUT_BAR.textContent = number;
    }
    return INPUT_BAR.textContent = parseFloat(number.toFixed(8));
};

const isValidKey = (key) => {
    return (
        !isNaN(key) ||
        key === '.' ||
        key === 'Backspace' ||
        key === 'Escape' ||
        key === '%'
    );
};

const dotLimit = (value) => { // Function that verifies if the dot limit is breaked.
    let dotCount = 0;
    for (let i = 0; i < INPUT_BAR.textContent.length; i++) {
        if (INPUT_BAR.textContent[i] === '.') {
            dotCount++;
        }
    };

    if (dotCount === 1 && value === '.') return true;
    return false;
};

// Event Listeners
['keydown', 'click'].forEach(event => BODY.addEventListener(event, button => {
    const BUTTON_CLICKED = button.target.value;
    const BUTTON_PRESSED = button.key;

    const INPUT = event === 'click' ? BUTTON_CLICKED : BUTTON_PRESSED
    
    if ((event === 'keydown' && !isValidKey(BUTTON_PRESSED)) || (BUTTON_PRESSED === ' ')) {
        button.preventDefault();
        return;
    }

    if (INPUT === 'Escape' || INPUT === 'AC') {
        clearInputBar();
    } else if (INPUT === 'Backspace') {
        backspace();
    } else if (INPUT === '%') {
        porcentage(Number(INPUT_BAR.textContent / 100));
    } else if (INPUT_BAR.textContent.length <= 8 && !dotLimit(INPUT) && (isValidKey(INPUT))) { 
        // Limit of 8 numbers (including the dot) in the calculator.
        if (INPUT_BAR.textContent === '0' && INPUT !== '.') {
            INPUT_BAR.textContent = INPUT;
        } else {
            INPUT_BAR.textContent += INPUT;
        }
    };
}));