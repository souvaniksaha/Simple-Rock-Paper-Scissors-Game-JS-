const startGameBtn = document.getElementById('start-game');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = ' SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'DRAW';
const COMPUTER_WINS = 'COMPUTER WINS';
const PLAYER_WINS = 'PLAYER WINS';
let isGameTrue = false;

let userChoice = () => {

    let getSelection = prompt(`Choose ${ROCK} ${PAPER} ${SCISSORS} `, '').toUpperCase();

    if (getSelection != ROCK && getSelection != PAPER && getSelection != SCISSORS)
        return `You chose nothing . We chose ${DEFAULT_USER_CHOICE} for You!`;
    else
        return getSelection;
}

let computerChoice = () => {

    let getComputerSelection = Math.random();

    if (getComputerSelection < 0.37)
        return ROCK;
    else if (getComputerSelection < 0.67)
        return PAPER;
    else
        return SCISSORS;
}

let decideWinner = (compChoice, plChoice) => {

    if (compChoice === plChoice)
        return DRAW;
    else if(
        compChoice === PAPER && plChoice === SCISSORS       ||
        compChoice === ROCK && plChoice === PAPER           ||
        compChoice === SCISSORS && plChoice === ROCK)
         return PLAYER_WINS;
    else
        return COMPUTER_WINS;
    
  }

startGameBtn.addEventListener('click',  () => {

    if (isGameTrue) {
        return;
    }
    isGameTrue = true;
    console.log('Game has started...........');
    const userSelection = userChoice();
    const computerSelection = computerChoice();
    let message = `You picked ${userSelection} and computer picked ${computerSelection}`;
    const getWinner = decideWinner(computerSelection , userSelection);
    
     if(getWinner === DRAW)
       message = message+' so its Draw!';
     else if(getWinner === PLAYER_WINS)
       message = message+ 'so You won!'
    else
       message = message+' so Computer won!';

    alert(message);
    isGameTrue = false;
});