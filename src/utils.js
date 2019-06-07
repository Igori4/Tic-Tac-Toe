function getWinner(cells) {
    const winLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let [winCombo] = winLines.filter(comb => {
        let [a,b,c] = comb;
        return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
    })
    if(winCombo) {
        return cells[winCombo[0]]
    }
    // return ;
}   

export default getWinner;