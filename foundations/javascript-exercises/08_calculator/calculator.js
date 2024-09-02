const add = function(num1, num2) { return num1 + num2 };

const subtract = function(num1, num2) { return num1 - num2 };

const sum = function(array) {
	return array.reduce((total, number) => total + number, 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => total * number, 1);
};

const power = function(num1, num2) { return num1 ** num2 };

const factorial = function(num) {
	if (num < 2) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
