//import: string
//output: boolean - if characters a and b are separated by exactly 3 places return true else return false
//example: abCheck('lane borrowed') => true

const abCheck = (str) => {
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        if((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')){
            return true;
        }
    }
    return false;
}

module.exports = abCheck;