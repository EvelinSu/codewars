function solution(string) {
    return string.replace(/([A-Z])/g, ` $1`);
}

console.log(solution('camelCasingTest')); // 'camel Casing Test'

//
// before refactoring

function solution(string) {
    let foo = (match) => ' ' + match;
    return string.replace(/[A-Z]/g, foo);
}

console.log(solution('camelCasingTest')); // 'camel Casing Test'
