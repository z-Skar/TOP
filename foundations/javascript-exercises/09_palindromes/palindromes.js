const palindromes = function (word) {
    const reversedWord = word.split("").reverse().join("").replace(/\W/g, '');
    if (reversedWord.toUpperCase() === word.toUpperCase().replace(/\W/g, '')) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
