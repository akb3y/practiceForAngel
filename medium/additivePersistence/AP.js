//input: positive num
//output: number of times numbers are added to get a single value
//example: AP(2718) => 2; (2+7+1+8) = 18, count: 1, (1+8) = 9, count: 2.

const AP = (num) => {
    let count = 0;
    const recurse = (n) => {
        if(n < 10) return count;
        let newNum = n.toString().split('').map(item => Number(item)).reduce((acc, item) => acc + item, 0);
        if(newNum < 10) {
            count++;
            return count;
        } else {
            count++;
            return recurse(newNum);
        }
    }
    return recurse(num)
}

module.exports = AP;