const abCheck = require('./abCheck');

test('"lane borrowed" should return true', () => {
    expect(abCheck('lane borrowed')).toEqual(true);
})

test('"lAne borrowed" should return true', () => {
    expect(abCheck('lAne borrowed')).toEqual(true);
})

test('"lAne Borrowed" should return true', () => {
    expect(abCheck('lane Borrowed')).toEqual(true);
})

test('"lane  borrowed" should return false', () => {
    expect(abCheck('lane  borrowed')).toEqual(false);
})