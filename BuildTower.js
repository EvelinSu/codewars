function towerBuilder(nFloors) {
    let result = [];
    let sym = '*';
    for (let i = 0; i < nFloors; i++) {
        result.push(sym);
        sym += '**';
        while (result[i].length < nFloors * 2 - 1) {
            result[i] += ' ';
            result[i] = result[i].split('').reverse().join('');
        }
    }
    return result;
}

console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
