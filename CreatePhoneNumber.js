function createPhoneNumber(numbers) {
    function arrTransform(start, end) {
        return numbers.slice(start, end).join('');
    }
    return `(${arrTransform(0, 3)}) ${arrTransform(3, 6)}-${arrTransform(6, 10)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
