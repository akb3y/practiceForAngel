const intToRoman = require('./intToRoman')

test('2029 should return "MMXXIX"', () => {
    expect(intToRoman(2029)).toEqual('MMXXIX');
})

test('58 should return "LVIII"', () => {
    expect(intToRoman(58)).toEqual('LVIII');
})

test('0 should return ""', () => {
    expect(intToRoman(0)).toEqual('');
})

test('-1 should return ""', () => {
    expect(intToRoman(-1)).toEqual('');
})

test('23.5 should return ""', () => {
    expect(intToRoman(23.5)).toEqual('');
})