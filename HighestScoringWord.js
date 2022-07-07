function getWordSize(word) {
    return word.split('').reduce((acc, item) => {
        return (acc = +acc + item.charCodeAt() - 96);
    }, []);
}

function high(words) {
    return words.split(' ').reduce((prev, next) => {
        return getWordSize(prev) >= getWordSize(next) ? prev : next;
    }, '');
}
console.log(high('what time are we climbing up the volcano')); // volcano

//
// before refactoring

function high(x) {
    let arr = x.split(' ');
    let numArr = [];
    for (let key of arr) {
        key = key.split('');
        let size = key.reduce((acc, item) => (acc = +acc + item.charCodeAt() - 96), []);
        numArr.push(size);
    }
    let result = numArr.indexOf(Math.max.apply(null, numArr));
    return arr[result];
}

console.log(high('what time are we climbing up the volcano')); // volcano
