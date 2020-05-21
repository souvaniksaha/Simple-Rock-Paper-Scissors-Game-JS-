const startGameBtn = document.getElementById('start-game');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = ' SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const DRAW = 'DRAW';
const COMPUTER_WINS = 'COMPUTER WINS';
const PLAYER_WINS = 'PLAYER WINS';
let isGameTrue = false;

let userChoice = function () {

    let getSelection = prompt(`Choose ${ROCK} ${PAPER} ${SCISSORS} `, '').toUpperCase();

    if (getSelection != ROCK && getSelection != PAPER && getSelection != SCISSORS)
        return `You chose nothing . We chose ${DEFAULT_USER_CHOICE} for You!`;
    else
        return getSelection;
}

let computerChoice = function () {

    let getComputerSelection = Math.random();

    if (getComputerSelection < 0.37)
        return ROCK;
    else if (getComputerSelection < 0.67)
        return PAPER;
    else
        return SCISSORS;
}

let decideWinner = function (compChoice, plChoice) {

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

startGameBtn.addEventListener('click', function () {

    if (isGameTrue) {
        return;
    }
    isGameTrue = true;
    console.log('Game has started...........');
    const userSelection = userChoice();
    const computerSelection = computerChoice();
    console.log(decideWinner(computerSelection , userSelection));
});