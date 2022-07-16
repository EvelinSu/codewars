const mirror = (obj) => {
    let newObj = {};
    for (let key of Object.keys(obj)) {
        newObj[key] = key.split('').reverse().join('');
    }
    return newObj;
};

console.log(mirror({ abc: undefined, arara: undefined })); // {abc: 'cba', arara: 'arara'}
