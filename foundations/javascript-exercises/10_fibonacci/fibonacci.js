const fibonacci = function(number) {
    number = Number(number)
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    
    currentNumber = 1;
    previousNumber = 0;
    total = 1;

    for (let i = 1; i < number; i++) {
        total = currentNumber + previousNumber;
        previousNumber = currentNumber;
        currentNumber = total;
    };
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
