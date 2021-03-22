let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function accumulator(numbers, acc = 0) {
    return (((numbers.length > 0) && (acc += numbers.shift())) ? accumulator(numbers, acc) : acc);
}

console.log(accumulator(numbers)); // doit retourner 55