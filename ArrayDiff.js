function arrayDiff(a, b) {
    return a.filter((el) => !b.includes(el));
}

console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]

//
// before refactoring

function arrayDiff(a, b) {
    let result = [];
    a.forEach((el) => !b.includes(el) && result.push(el));
    return result;
}

console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
