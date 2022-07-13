function validParentheses(parens) {
    while (parens.includes('()')) {
        parens = parens.replace('()', '');
    }
    return parens ? false : true;
}

console.log(validParentheses('(()))')); // false
