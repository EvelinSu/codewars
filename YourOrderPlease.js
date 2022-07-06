function order(words) {
    let wordsCollection = words.split(' ');
    return wordsCollection
        .reduce((accumulator, word, index) => {
            const foundWord = wordsCollection.find((item) => item.includes(String(index + 1)));
            if (foundWord) accumulator = accumulator.concat(foundWord);
            return accumulator;
        }, [])
        .join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));  // "Fo1r the2 g3ood 4of th5e pe6ople"
