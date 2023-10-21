//input: array of numbers
//output: sum of all numbers in array
//example: sumArray([1,2,3,4]) => 10
//DON'T USE .reduce()

const sumArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

module.exports = sumArray;