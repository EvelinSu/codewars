function digital_root(n) {
    let result = n;
    while (result > 9) {
        String(result)
            .split('')
            .reduce((prev, next) => (result = +next + +prev));
    }
    return n <= 0 ? 0 : result;
}

console.log(digital_root(3534)); // 6
