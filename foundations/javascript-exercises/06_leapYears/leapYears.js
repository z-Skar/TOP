const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
    const isCentury = year % 100 === 0;
    if ((isCentury && !isYearDivisibleByFourHundred) || !isYearDivisibleByFour) return false
    return true;
};

// Do not edit below this line
module.exports = leapYears;
