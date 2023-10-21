//input: string
//output: number
//example: romanToInt('LVIII') => 58
//Edge cases:
    //passes something not a string
    //passes a lowercase string or mixed case
    //passes something that is in the romanNum map

const romanToInt = (s) => {
    const romanNum = {'M': 1000, 'D': 500,  'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
 
}
    
module.exports = romanToInt;