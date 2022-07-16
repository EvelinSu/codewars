function duplicateCount(text) {
    let result = 0;
    let charCount = {};
    text.toLowerCase()
        .split('')
        .forEach(function (char) {
            charCount[char] = (charCount[char] || 0) + 1;
        });
    Object.values(charCount).forEach((el) => el > 1 && result++);
    return result;
}

console.log(duplicateCount('Indivisibilities')); // 2 
