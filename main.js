const gameArea = document.querySelectorAll('.gameArea');
const counter = document.querySelector('.counter');
const finalPage = document.querySelector('.endPage');
const resetButton = document.querySelector('.reset');
const continueButton = document.querySelector('.continue');

const userOne = document.querySelector('.userOne');
const userTwo = document.querySelector('.userTwo');
const roundGame = document.querySelector('.round');

const startPage = document.querySelector('.startPage');
const computerButton = document.querySelector('.computer');
const playerButton = document.querySelector('.player');

const winnerNick = document.querySelector('.winnerNick');

let count = 1;
let choice;
let round = 1;
let computerPlay = false;
let userOneCount = 0;
let userTwoCount = 0;

let legalMove = [];

computerButton.addEventListener('click', () => {
    startPage.classList.add('start');
    computerPlay = true;
})

playerButton.addEventListener('click', () => {
    startPage.classList.add('start');
})

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

const rowWinner = () => {

    const rowOne = gameArr.slice(0, 3);

    const rowOneTest = rowOne.some(item => item == '');
    const isEveryOne = rowOne.every(item => item == rowOne[0]);

    const rowTwo = gameArr.slice(3, 6);

    const rowTwoTest = rowTwo.some(item => item == '');
    const isEveryTwo = rowTwo.every(item => item == rowTwo[0]);

    const rowThree = gameArr.slice(6, 9);

    const rowThreeTest = rowThree.some(item => item == '');
    const isEveryThree = rowThree.every(item => item == rowThree[0]);

    return{
        rowOne,
        rowTwo,
        rowThree,

        rowOneTest,
        isEveryOne,
        
        rowTwoTest,
        isEveryTwo,

        rowThreeTest,
        isEveryThree,
    }
}
const computerMove = () => {
    legalMove.length = 0;
    for(let i = 0; i < gameArr.length; i++){
        if(gameArr[i] == ''){
            legalMove.push(i);
        }
    }

    if(legalMove.length == 0){
        console.log('draw');
        return;
    }

    const index = Math.floor(Math.random() * legalMove.length);
    const indexArr = legalMove[index];

    gameArea[indexArr].textContent = playerTwo;
    gameArr[indexArr] = playerTwo;

    count++;
}

const columnWinner = () => {

    const columnOne = [gameArr[0], gameArr[3], gameArr[6]];

    const columnOneTest = columnOne.some(item => item == '');
    const isEveryFour = columnOne.every(item => item == columnOne[0]);

    const columnTwo = [gameArr[1], gameArr[4], gameArr[7]];

    const columnTwoTest = columnTwo.some(item => item == '');
    const isEveryFive = columnTwo.every(item => item == columnTwo[0]);

    const columnThree = [gameArr[2], gameArr[5], gameArr[8]];

    const columnThreeTest = columnThree.some(item => item == '');
    const isEverySix = columnThree.every(item => item == columnThree[0]);

    return{
        columnOne,
        columnTwo,
        columnThree,

        columnOneTest,
        isEveryFour,

        columnTwoTest,
        isEveryFive,

        columnThreeTest,
        isEverySix,
    }
}

const diagonalWin = () => {
    
    const diagonalOne = [gameArr[0], gameArr[4], gameArr[8]];

    const diagonalOneTest = diagonalOne.some(item => item == '');
    const isEverySeven = diagonalOne.every(item => item == diagonalOne[0]);

    const diagonalTwo = [gameArr[2], gameArr[4], gameArr[6]];

    const diagonalTwoTest = diagonalTwo.some(item => item == '');
    const isEveryEight = diagonalTwo.every(item => item == diagonalTwo[0]);

    return{
        diagonalOne,
        diagonalTwo,

        diagonalOneTest,
        isEverySeven,

        diagonalTwoTest,
        isEveryEight,
    }
}

const gameArr = game().gameBoard;

const playerOne = game().playerOne;
const playerTwo = game().playerTwo;

userOne.textContent = `player one [${playerOne}] ${userOneCount}`;
userTwo.textContent = `player two [${playerTwo}] ${userTwoCount}`;

for(key in game().gameBoard){
    gameArea[key].textContent = game().gameBoard[key];
}

const resetGame = () => {
    finalPage.classList.add('endPage');
    for(let j = 0; j < gameArr.length; j++){
        gameArr[j] = '';
    }
    for(let i = 0; i < gameArea.length; i++){
        gameArea[i].textContent = '';
    }
    count = 1;
    round = 1;
    
    userOneCount = 0;
    userTwoCount = 0;
    
    roundGame.textContent = round;
}

const continueGame = () => {
    finalPage.classList.add('endPage');
    for(let j = 0; j < gameArr.length; j++){
        gameArr[j] = '';
    }
    for(let i = 0; i < gameArea.length; i++){
        gameArea[i].textContent = '';
    }
    count = 1;

    round++;
    
    roundGame.textContent = round;
    userOne.textContent = `player one [${playerOne}] ${userOneCount}`;
    userTwo.textContent = `player two [${playerTwo}] ${userTwoCount}`;
}

const winner = (arr) => {
    const winnerUser = arr[0];

    if(winnerUser == playerOne){
        winnerNick.textContent = `player one ${winnerUser} is winner`;
        userOneCount++;
    }else{
        winnerNick.textContent = `player two ${winnerUser} is winner`;
        userTwoCount++;
    }
}

const removeEndPage = (arr) => {
    finalPage.classList.remove('endPage');
    winner(arr);
}

const buttonListener = () => {
    resetButton.addEventListener('click' , resetGame);
    continueButton.addEventListener('click' , continueGame);
}

const checkuotTheResult = () => {
    
    if(!rowWinner().rowOneTest){
        if(rowWinner().isEveryOne){
            removeEndPage(rowWinner().rowOne);
            buttonListener();
        }
    }

    if(!rowWinner().rowTwoTest){
        if(rowWinner().isEveryTwo){
            removeEndPage(rowWinner().rowTwo);
            buttonListener();
        }
    }
    if(!rowWinner().rowThreeTest){
        if(rowWinner().isEveryThree){
            removeEndPage(rowWinner().rowThree);
            buttonListener();
        }
    }
    if(!columnWinner().columnOneTest){
        if(columnWinner().isEveryFour){
            removeEndPage(columnWinner().columnOne);
            buttonListener();
        }
    }
    if(!columnWinner().columnTwoTest){
        if(columnWinner().isEveryFive){
            removeEndPage(columnWinner().columnTwo);
            buttonListener();
        }
    }
    if(!columnWinner().columnThreeTest){
        if(columnWinner().isEverySix){
            removeEndPage(columnWinner().columnThree);
            buttonListener();
        }
    }
    if(!diagonalWin().diagonalOneTest){
        if(diagonalWin().isEverySeven){
            removeEndPage(diagonalWin().diagonalOne);
            buttonListener();
        }
    }
    if(!diagonalWin().diagonalTwoTest){
        if(diagonalWin().isEveryEight){
            removeEndPage(diagonalWin().diagonalTwo); 
            buttonListener();
        }
    }
}

gameArea.forEach(item => {
    item.addEventListener('click', (e) => {
        const index = e.target.dataset.id;
        if(gameArr[index] != ''){
            count--;
            return;
        }

        if(count % 2 == 1){
            choice = playerOne;
        }else{
            choice = playerTwo;
        }

        gameArea[index].textContent = choice;
        gameArr[index] = choice;

        if(computerPlay){
            computerMove();
        }

        checkuotTheResult();

        count++;
    })
})