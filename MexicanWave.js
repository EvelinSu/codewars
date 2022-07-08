function wave(str) {
    const lowerCasedWord = str.toLowerCase();
    return str.split('').reduce((accumulator, item, index) => {
        const collection = lowerCasedWord.split('');
        collection[index] = collection[index].toUpperCase();
        if (collection[index] === ' ') {
            return accumulator;
        }
        return (accumulator = accumulator.concat(collection.join('')));
    }, []);
}
console.log(wave('Two words')); // [Two words, tWo words, twO words, two Words, two wOrds, two woRds, two worDs, two wordS], 
