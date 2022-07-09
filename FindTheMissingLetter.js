const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ'.split('');

const getMissingWord = (wordsCollection) => {
    for (let [index, item] of wordsCollection.entries()) {
        const nextItem = wordsCollection[index + 1];
        const alphabetIndex = alphabet.indexOf(item);

        if (nextItem && alphabet[alphabetIndex + 1] !== nextItem) {
            return alphabet[alphabetIndex + 1];
        }
    }
};

console.log(getMissingWord(['O', 'Q', 'R', 'S'])); // P
