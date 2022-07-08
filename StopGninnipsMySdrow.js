function spinWords(string) {
    let result = [];
    string
        ? string.split(' ').forEach((el) => (el.length >= 5 ? result.push(el.split('').reverse().join('')) : result.push(el)))
        : '';
    return result.join(' ');
}

console.log(spinWords('Hey fellow warriors')); // Hey wollef sroirraw
