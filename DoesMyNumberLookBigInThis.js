function narcissistic(value) {
    const valueStr = String(value)

    return [...valueStr].reduce((acc, num) => acc + num ** valueStr.length, 0) === value
}

console.log(narcissistic(153)) // true
console.log(narcissistic(7)) // true
console.log(narcissistic(1938)) // false
console.log(narcissistic(138)) // false