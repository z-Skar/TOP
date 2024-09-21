// Selected elements
const INPUT_BAR = document.querySelector(".input-bar");
const CALCULATOR = document.querySelector("body");


// Functions
const clearInputBar = () => INPUT_BAR.textContent = '0';
const invertSignal = () => INPUT_BAR.textContent = Number(INPUT_BAR.textContent) * (-1);

const backspace = () => {
    if (INPUT_BAR.textContent !== '0') {
        INPUT_BAR.textContent = INPUT_BAR.textContent.slice(0, -1);
        if (INPUT_BAR.textContent === '') INPUT_BAR.textContent = '0';
    };
};

const porcentage = (number) => {
    number = Number(number / 100);
    if (number.toString().length < 9) {
        return INPUT_BAR.textContent = number;
    };
    return INPUT_BAR.textContent = parseFloat(number.toFixed(8));
};

const isValidKey = (key) => {
    return (
        !isNaN(parseInt(key)) ||
        key === 'Backspace' ||
        key === 'Escape' ||
        key === '+/-' ||
        key === '%' ||
        key === '.'
    );
};

const dotLimit = (value) => { // Function that verifies if the dot limit was broken.
    for (let i = 0; i < INPUT_BAR.textContent.length; i++) {
        if (INPUT_BAR.textContent[i] === '.' && value === '.') {
            return true
        };
    };
    return false;
};


// Event Listeners
['keydown', 'click'].forEach(event => CALCULATOR.addEventListener(event, button => {
    const BUTTON_CLICKED = button.target.value;
    const BUTTON_PRESSED = button.key;

    const INPUT = event === 'click' ? BUTTON_CLICKED : BUTTON_PRESSED;
    
    if (event === 'keydown' && !isValidKey(BUTTON_PRESSED)) {
        button.preventDefault();
        return;
    }

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
    };

    if (INPUT_BAR.textContent.length < 9 && !dotLimit(INPUT) && (isValidKey(INPUT))) {
        if (INPUT_BAR.textContent === '0') {
            INPUT_BAR.textContent = INPUT;
        } else {
            INPUT_BAR.textContent += INPUT;
        }
    };
}));