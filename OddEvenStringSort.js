function sortMyString(s) {
    let filter = (callback) => s.split('').filter(callback).join('');
    return filter((el, i) => i % 2 === 0) + ' ' + filter((el, i) => i % 2 !== 0);
}

console.log(sortMyString('CodeWars')); // "CdWr oeas"
