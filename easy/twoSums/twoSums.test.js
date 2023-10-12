const twoSums = require('./twoSums');

test('[2,7,11,15] and target 9 should return [0,1]', () => {
    expect(twoSums([2,7,11,15],9)).toEqual([0,1]);
})

test('[2,7,11,15] and target 11 should return []', () => {
    expect(twoSums([2,7,11,15],11)).toEqual([]);
})