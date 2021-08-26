const gameArea = document.querySelectorAll('.gameArea');
const counter = document.querySelector('.counter');
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
        console.log(gameArr);
    })
})