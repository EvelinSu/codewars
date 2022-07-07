function longest(s1, s2) {
    let result = [];
    let arr = s1.concat(s2);
    arr.split('').forEach((char, i) => !result.includes(char) && result.push(char));
    return result.sort().join('');
}

console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')); // abcdefghilnoprstu
