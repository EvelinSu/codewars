//return the total number of smiling faces in the array
function countSmileys(arr) {
    let result = 0;
    arr.forEach((el) => (/[:;][-~]?[)D]/.test(el) ? result++ : 0));
    return result;
}

console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); // 2
