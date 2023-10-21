const subsetGreaterK = (array) => {
    const sorted = array.sort((a, b) => a - b);
    for(let i = 1; i < sorted.length; i++) {
        let beginning = sorted.slice(0,-i).reduce((acc, current) => acc + current);
        let end = sorted.slice(-i).reduce((acc, current) => acc + current);
        if(beginning < end) {
            return sorted.slice(-i);
        }
    }
}

console.log(subsetGreaterK([3,4,2,6,7,1]))


function getNumber(binary) {
    let num = 0;
    let current = binary; 

    while (current !== null) {
        num = num * 2 + current.data; 
        current = current.next; 
    }

    return num;
}
