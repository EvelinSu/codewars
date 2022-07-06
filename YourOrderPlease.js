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
