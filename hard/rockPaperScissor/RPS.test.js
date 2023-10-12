const RPS = require('./RPS');

const expected = [
    'rr', 'rp', 'rs',
    'pr', 'pp', 'ps',
    'sr', 'sp', 'ss'
  ]

test('1 iterations should return 3 variations', () => {
    expect(RPS(1).length).toBe(3);
})

test('2 iterations should return 9 variations', () => {
    expect(RPS(2).length).toBe(9);
})

test('3 iterations should return 27 variations', () => {
    expect(RPS(3).length).toBe(27);
})

test('2 iterations should return expected results', () => {
    expect(RPS(2)).toEqual(expected);
})


