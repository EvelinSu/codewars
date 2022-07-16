function toCamelCase(str) {
    let foo = (match) => match[1].toUpperCase();
    return str.replace(/[-_]./g, foo);
}

console.log(toCamelCase('The-stealth_warrior')); // TheStealthWarrior 
