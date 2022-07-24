function findOutlier(integers) {
    let result = [[], []];
    integers.forEach((el) => (el % 2 === 0 ? result[0].push(el) : result[1].push(el)));
    return result[0].length === 1 ? result[0][0] : result[1][0];
}

console.log(findOutlier([2, 6, 8, 10, 3])); // 3
