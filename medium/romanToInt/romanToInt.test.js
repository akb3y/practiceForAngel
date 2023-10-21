const romanToInt = require('./romanToInt')

test('"LVIII" should return 58', () => {
    expect(romanToInt('LVIII')).toEqual(58);
})