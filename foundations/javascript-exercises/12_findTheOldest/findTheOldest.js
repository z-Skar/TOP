const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let oldestPersonAge;
        let actualPersonAge;
        
        if (!oldest.yearOfDeath) {
            oldestPersonAge = (new Date().getFullYear()) - oldest.yearOfBirth;
        } else {
            oldestPersonAge = oldest.yearOfDeath - oldest.yearOfBirth;
        };

        if (!person.yearOfDeath) {
            actualPersonAge = (new Date().getFullYear()) - person.yearOfBirth;
        } else {
            actualPersonAge = person.yearOfDeath - person.yearOfBirth;
        };

        if (actualPersonAge > oldestPersonAge) {
            oldest = person;
        };
        return oldest;
    }, people[0]);
}

// Do not edit below this line
module.exports = findTheOldest;
