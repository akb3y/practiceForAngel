//input: string
//output: number
//example: romanToInt('LVIII') => 58
//Edge cases:
    //passes something not a string
    //passes a lowercase string or mixed case
    //passes something that is in the romanNum map

const romanToInt = (s) => {
    const romanNum = {'M': 1000, 'D': 500,  'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    let number = 0;

    if(typeof s !== 'string') {
        return number;
    }

    const str = s.slice(0).toUpperCase();

    for(let i = 0; i < str.length; i++) {
        const current = str[i], next = str[i + 1];

        if(romanNum[current] === undefined) {
            return "this is not a valid roman numeral!"
        }

        if(romanNum[current] < romanNum[next]) {
            number -= romanNum[current];
        } else {
            number += romanNum[current];
        }
    }
    return number;
}

module.exports = romanToInt;