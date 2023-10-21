const fibonacci = require('./fibonnaci');

test('3rd fibonnaci is 2', () => {
    expect(fibonacci(3)).toBe(2)
})

test('0 fibonnaci is 0', () => {
    expect(fibonacci(0)).toBe(0)
})

test('1st fibonnaci is 1', () => {
    expect(fibonacci(1)).toBe(1)
})

test('20th fibonnaci is 6765', () => {
    expect(fibonacci(20)).toBe(6765)
})