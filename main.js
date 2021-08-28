const gameArea = document.querySelectorAll('.gameArea');
const counter = document.querySelector('.counter');
const finalPage = document.querySelector('.endPage');
const resetButton = document.querySelector('.button')

let count = 1;
let choice;

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
    const rowThree = gameArr.slice(6, 9);

    return{
        rowOne,
        rowTwo,
        rowThree,
        rowOneTest,
        isEveryOne,
    }
}

const columnWinner = () => {

    const columnOne = [gameArr[0], gameArr[3], gameArr[6]];
    const columnTwo = [gameArr[1], gameArr[4], gameArr[7]];
    const columnThree = [gameArr[2], gameArr[5], gameArr[8]];

    return{
        columnOne,
        columnTwo,
        columnThree,
    }
}

const diagonalWin = () => {
    
    const diagonalOne = [gameArr[0], gameArr[4], gameArr[8]];
    const diagonalTwo = [gameArr[2], gameArr[4], gameArr[6]];

    return{
        diagonalOne,
        diagonalTwo,
    }
}

const gameArr = game().gameBoard;

const playerOne = game().playerOne;
const playerTwo = game().playerTwo;

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
}

const removeEndPage = () => {
    finalPage.classList.remove('endPage');
}

const checkuotTheResult = () => {
    
    if(!rowWinner().rowOneTest){
        if(rowWinner().isEveryOne){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }

    if(!rowWinner().rowTwo.some(item => item == '')){
        if(rowWinner().rowTwo.every(item => item == rowWinner().rowTwo[0])){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }
    if(!rowWinner().rowThree.some(item => item == '')){
        if(rowWinner().rowThree.every(item => item == rowWinner().rowThree[0])){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }
    if(!columnWinner().columnOne.some(item => item == '')){
        if(columnWinner().columnOne.every(item => item == columnWinner().columnOne[0])){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }
    if(!columnWinner().columnTwo.some(item => item == '')){
        if(columnWinner().columnTwo.every(item => item == columnWinner().columnTwo[0])){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }
    if(!columnWinner().columnThree.some(item => item == '')){
        if(columnWinner().columnThree.every(item => item == columnWinner().columnThree[0])){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }
    if(!diagonalWin().diagonalOne.some(item => item == '')){
        if(diagonalWin().diagonalOne.every(item => item == diagonalWin().diagonalOne[0])){
            removeEndPage();
            resetButton.addEventListener('click' , resetGame);
        }
    }
    if(!diagonalWin().diagonalTwo.some(item => item == '')){
        if(diagonalWin().diagonalTwo.every(item => item == diagonalWin().diagonalTwo[0])){
            removeEndPage(); 
            resetButton.addEventListener('click' , resetGame);
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

        checkuotTheResult();

        console.log(rowWinner().rowOneTest);

        count++;
    })
})