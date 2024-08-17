const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) return "ERROR";

    let sum = 0;
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
