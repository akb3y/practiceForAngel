const eOO = require('./evenOrOdd');

test('6 should return "even"', () => {
    expect(eOO(6)).toEqual('even');
})

test('5 should return "odd"', () => {
    expect(eOO(5)).toEqual('odd');
})

test('"6" should return "NaN"', () => {
    expect(eOO("6")).toEqual('NaN');
})