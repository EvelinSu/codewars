var string = 'The quick brown fox jumps over the lazy dog.';

function isPangram(string) {
    let result = 0;
    for (let i = 97; i <= 122; i++) {
        string.toLowerCase().includes(String.fromCharCode(i)) && result++;
    }
    return result === 26;
}

console.log(isPangram(string)); // true
