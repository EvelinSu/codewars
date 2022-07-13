function ascendDescend(length, minimum, maximum) {
    let result = [];
    if (minimum <= maximum) {
        while (result.length < length) {
            for (let i = minimum; i <= maximum; i++) {
                result.push(i);
            }
            for (let i = maximum - 1; i > minimum; i--) {
                result.push(i);
            }
        }
        return result.join('').slice(0, length);
    }
    return '';
}

console.log(ascendDescend(10, 3, 6)); // "3456543456"
