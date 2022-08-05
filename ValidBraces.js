function validBraces(braces) {
    let brackets = ['()', '[]', '{}'];
    for (let i = 0; i < brackets.length; i++) {
        if (braces.includes(brackets[i])) {
            braces = braces.replace(brackets[i], '');
            i = -1;
        }
    }
    return braces.length === 0;
}

console.log(validBraces('(({[[]]}))')); // true
