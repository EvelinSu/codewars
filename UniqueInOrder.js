var uniqueInOrder = function (iterable) {
    result = [];
    iterable = !Array.isArray(iterable) ? iterable.split('') : iterable;
    iterable.forEach((el) => result[result.length - 1] !== el && result.push(el));
    return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']);
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]);
