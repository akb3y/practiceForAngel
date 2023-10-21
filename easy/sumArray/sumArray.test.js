const sumArray = require('./sumArray');

test('[1,2,3,4] should return 10', () => {
    expect(sumArray([1,2,3,4]).toEqual(10));
})