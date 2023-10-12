//input: an array of numbers and a target value
//output: an array with the index of 2 numbers added together to equal the target value, return empty array if there are no numbers that equal the target value
//example: twoSums([2,7,11,15], 9) => [0,1]; array[0] = 2, array[1] = 7; 2+7=9

const twoSums = (array, target) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(array[i] + array[j] === target){
                return [i,j]
            }
        }
    }
    return []
}

module.exports = twoSums;