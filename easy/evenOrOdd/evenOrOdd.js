//input: number
//output: string, even or odd or not a number
//example: evenOrOdd(6) => 'even

const evenOrOdd = num => {
    if(typeof num !== 'number') return "NaN";
    return num % 2 === 0 ? 'even' : 'odd';
}

module.exports = evenOrOdd;