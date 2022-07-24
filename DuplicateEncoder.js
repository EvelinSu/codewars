function duplicateEncode(word) {
    let result = [];
    let charCount = {};
    word = word.toLowerCase().split('');
    word.forEach((char) => (charCount[char] = (charCount[char] || 0) + 1));
    word.forEach((el) => (charCount[el] > 1 ? result.push(')') : result.push('(')));
    return result.join('');
}

console.log(duplicateEncode('Success')); // ")())())"
