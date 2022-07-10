function solution(str) {
    let result = [];
    str = str.length % 2 === 0 ? str : str + '_';
    for (let i = 0; i < str.length; i++) {
        result.push(
            str
                .split('')
                .slice(i++, i + 1)
                .join(''),
        );
    }
    return result;
}

console.log(solution('abcdefg')); // ['ab', 'cd', 'ef', 'g_'];
