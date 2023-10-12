const palindrome = require('./palindrome');

test('"racecar" is a palindrome', () => {
    expect(palindrome('racecar')).toEqual(true);
})

test('"RaceCar" is a palindrome', () => {
    expect(palindrome('RaceCar')).toEqual(true);
})

test('"doggy" is not a palindrome', () => {
    expect(palindrome('doggy')).toEqual(false);
})

test('"Do geese see God?" is a palindrome', () => {
    expect(palindrome('Do geese see God?')).toEqual(true);
})

test('"hello world" is not a palindrome', () => {
    expect(palindrome('hello world')).toEqual(false);
})

test('"Madam, I\'m Adam" is a palindrome', () => {
    expect(palindrome("Madam, I'm Adam")).toEqual(true);
})