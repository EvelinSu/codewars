function isPrime(num) {
    let result = false;
    for (let i = 0; i <= Math.sqrt(num); i++) {
        result += num > 1 && num % i === 0;
    }
    return result === 1;
}

console.log(isPrime(3), isPrime(6806881)); // true false
