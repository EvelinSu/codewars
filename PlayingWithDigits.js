function digPow(n, p) {
    let result = 0;
    String(n)
        .split('')
        .forEach((el) => (result += Math.pow(el, p++)));
    return result / n >= 1 && Number.isInteger(result / n) ? result / n : -1;
}

console.log(digPow(462882, 3)); // return 51, since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
