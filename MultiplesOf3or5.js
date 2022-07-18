function solution(number) {
    let result = [];
    for (let i = 0; number > i; i++) {
        (i % 5 === 0 || i % 3 === 0) && result.push(i);
    }
    return number > 0 ? result.reduce((a, b) => (a = a + b)) : 0;
}

console.log(solution(10)); // 23
