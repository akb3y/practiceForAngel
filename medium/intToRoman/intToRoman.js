//input: number
//output: Roman numeral of the number
//example: intToRoman(58) => 'LVIII'
//edge cases:
    // what if num is a decimal
    // what if num is zero
    // what if num is negative

const intToRoman = (num) => {
    let romanNum = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
    let roman = '';

    if(typeof num !== 'number' || num <= 0 || num % 1 !== 0){
        return roman;
    }
    
    for(let value in romanNum) {
        while(num >= romanNum[value]){
            roman = roman + value;
            num-=romanNum[value]
        }
    }
    return roman
}

module.exports = intToRoman;