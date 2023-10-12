const AP = require('./AP');

test('2718 should return 2', () => {
    expect(AP(2718)).toBe(2);
})

test('7777777 should return 3', () => {
    expect(AP(7777777)).toBe(3);
})

test('7 should return 0', () => {
    expect(AP(7)).toBe(0);
})