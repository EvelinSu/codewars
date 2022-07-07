var countBits = function (n) {
    return n
        .toString(2)
        .split('')
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

console.log(countBits(10)); // 2

//
// before refactoring

var countBits = function (n) {
    let counter = 0;
    let parsed = n.toString(2);
    for (let num of parsed) {
        if (+num === 1) {
            counter++;
        }
    }
    return counter;
};

console.log(countBits(10)); // 2
