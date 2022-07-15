function divCon(x) {
    let result = 0;
    x.forEach((el) => (typeof el === 'number' ? (result += el) : (result -= el)));
    return result;
}

console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 14
