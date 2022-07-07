function pigIt(str) {
    let strArr = str.split(' ');
    let result = [];
    for (let word of strArr) {
        word = word.split('');
        if (word.join('').match(/^[a-zA-Z]+$/)) {
            let firstWordChar = word.splice(0, 1);
            word.push(firstWordChar + 'ay');
        }
        result.push(word.join(''));
    }
    return result.join(' ');
}

console.log(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay !
