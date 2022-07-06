function expandedForm(num) {
    let numLength = num.toString().length;
    let result = [];
    for (let sym of num.toString()) {
        if (+sym !== 0) {
            result.push(sym.padEnd(numLength, '0'));
        }
        numLength--;
    }
    return result.join(' + ');
}

console.log(expandedForm(70304)); // '70000 + 300 + 4'
