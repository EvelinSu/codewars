function persistence(num) {
    let result = [];
    while (num > 9) {
        num = String(num)
            .split('')
            .reduce((a, b) => (a = a * b));
        result.push(num);
    }
    return result.length;
}

console.log(persistence(25)); // 2
