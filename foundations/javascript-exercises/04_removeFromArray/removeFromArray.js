const removeFromArray = function(array, ...elements) {

    for (let i = 0; i < elements.length; i++) {
        while(array.indexOf(elements[i]) !== -1) {
            array.splice(array.indexOf(elements[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
