const isSquare = (n) => {
    return Math.sqrt(n) % 1 === 0
}

console.log(isSquare(-1)) // false
console.log(isSquare(25)) // true
console.log(isSquare(26)) // false
console.log(isSquare(0)) // true