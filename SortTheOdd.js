function sortArray(array) {
    let oddNum = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
    return array.map((v) => (v % 2 !== 0 ? oddNum.shift() : v));
}
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
