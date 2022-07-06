const likes = (names) => {
    let namesLength = names.length;
    if (namesLength === 1) {
        return names[0] + ' ' + 'likes this';
    }
    if (namesLength === 2) {
        return names[0] + ' and ' + names[1] + ' like this';
    }
    if (namesLength === 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    }
    if (namesLength > 3) {
        return names[0] + ', ' + names[1] + ' and ' + (namesLength - 2) + ' others like this';
    } else {
        return 'no one likes this';
    }
};
