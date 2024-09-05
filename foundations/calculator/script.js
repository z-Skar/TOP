// Selected elements
const INPUT_BAR = document.querySelector(".input-bar");
const NUMBERS = document.querySelectorAll(".number-line");
const BODY = document.querySelector("body");


// Functions
const backspace = () => INPUT_BAR.textContent = INPUT_BAR.textContent.slice(0, -1);
const clearInputBar = () => INPUT_BAR.textContent = '';

const porcentage = (number) => {
    if (number.toString().length <= 8) {
        return INPUT_BAR.textContent = number;
    }
    return INPUT_BAR.textContent = parseFloat(number.toFixed(8));
};


// Event Listeners
['keydown', 'click'].forEach(event => BODY.addEventListener(event, button => {
    const BUTTON_CLICKED = button.target.value;
    const BUTTON_PRESSED = button.key;

    if (BUTTON_PRESSED === 'Escape' || BUTTON_CLICKED === 'AC') {clearInputBar();}
    else if (BUTTON_PRESSED === 'Backspace') {backspace();}
    else if (BUTTON_PRESSED === '%'|| BUTTON_CLICKED === '%') {porcentage(Number(INPUT_BAR.textContent / 100))}
    else if (INPUT_BAR.textContent.length <= 8 && ((!isNaN(BUTTON_PRESSED) || BUTTON_PRESSED === '.') || (!isNaN(BUTTON_CLICKED) || BUTTON_CLICKED === '.'))) {
        if (event === 'click') {
            INPUT_BAR.textContent += BUTTON_CLICKED;
        } else {
            INPUT_BAR.textContent += BUTTON_PRESSED;
        };
    };
}));