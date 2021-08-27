const gameArea = document.querySelectorAll('.gameArea');
const counter = document.querySelector('.counter');
let count = 1;
let choice;
let winArr = [];

const game = () => {

    const playerOne = 'O';
    const playerTwo = 'X';
    
    const gameBoard = [
        [''], [''], [''],
        [''], [''], [''],
        [''], [''], [''],
    ]
    
    return {
        playerOne,
        playerTwo,
        gameBoard,
    };

}

const winnerGame = () => {

    const rowOne = gameArr.slice(0, 3);
    const rowTwo = gameArr.slice(3, 6);
    const rowThree = gameArr.slice(6, 9);
    const columnOne = [gameArr[0], gameArr[3], gameArr[6]];
    const columnTwo = [gameArr[1], gameArr[4], gameArr[7]];
    const columnThree = [gameArr[2], gameArr[5], gameArr[8]];
    const diagonalOne = [gameArr[0], gameArr[4], gameArr[8]];
    const diagonalTwo = [gameArr[2], gameArr[4], gameArr[6]];

    return{
        rowOne,
        rowTwo,
        rowThree,
    }
}


const gameArr = game().gameBoard;

const playerOne = game().playerOne;
const playerTwo = game().playerTwo;

for(key in game().gameBoard){
    gameArea[key].textContent = game().gameBoard[key];
}

gameArea.forEach(item => {
    item.addEventListener('click', (e) => {
        if(gameArr[e.target.dataset.id] != ''){
            count--;
            return;
        }

        if(count % 2 == 1){
            choice = playerOne;
        }else{
            choice = playerTwo;
        }

        gameArea[e.target.dataset.id].textContent = choice;
        gameArr[e.target.dataset.id] = choice;

        

        count++;
    })
})