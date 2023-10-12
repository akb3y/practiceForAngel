//input: number of rounds that rock paper scissors will be played
//output: every variation that could be played for each round
//example: rockPaperScissor(2) => ['rr', 'rp', 'rs','pr', 'pp', 'ps','sr', 'sp', 'ss']
//bonus: try using recursion

const rockPaperScissor = roundCount => {
    if(roundCount === 0) return [];
    const permutations = [];
    function playRound(plays) {
        if(plays.length === roundCount) {
            permutations.push(plays) 
            return;
        }
        ['r','p','s'].forEach(play => {
            playRound(plays + play)
        })
    }
    playRound('');
    return permutations;
}

module.exports = rockPaperScissor;