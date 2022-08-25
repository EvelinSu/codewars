a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ['iv', "xyz", "live", "strong"]

function inArray(array1, array2) {
    let result = []
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array2[i].includes(array1[j]) && !result.includes(array1[j])) {
                result.push(array1[j])
            }
        }
    }
    return result.sort();
}

console.log(inArray(a1, a2)); // ['iv', 'live', 'strong']
