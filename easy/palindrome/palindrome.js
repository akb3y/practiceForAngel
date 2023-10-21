// palindrome is a word that is spelled the same forward and backwards
//input: string
//output: boolean
//bonus: include sentences with and without punctuation

const palindrome = (str) => {
    str = str.toLowerCase().split(' ').join('').replace(/[^\w\s]|_/g, '');
    let revStr = str.split('').reverse().join('');
    if(str === revStr){
        return true
    }
    return false;
}

module.exports = palindrome;