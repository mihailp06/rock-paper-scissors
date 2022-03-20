const hands = ['rock', 'paper', 'scissors'];
const resultDiv = document.querySelector('.result');
const buttonDiv = document.querySelector('.buttonDiv');
const playerSpan = document.querySelector('.player');
const computerSpan = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'It\'s a tie.';

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beat Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beat Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors.';
    }
}

function keepScore(roundResult) {
    if (roundResult.includes('win')) {
        playerScore += 1;
    }
    if (roundResult.includes('lose')) {
        computerScore += 1;
    }
}

function decideWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        return 'Player Wins!';
    }
    if (computerScore === 5) {
        return 'Computer Wins!';
    }
    return;
}

      /* function game() {
        for (let i = 0; i < 5; i++) {
          const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
          const computerSelection = computerPlay();
          let result = playRound(playerSelection, computerSelection);
          console.log(result);
          keepScore(result);
        }
        console.log(decideWinner(playerScore, computerScore));
      }

      game(); */

buttonDiv.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    const eventId = event.target.id;
    const roundResult = playRound(eventId, computerPlay());
    if (!isButton) {
        return;
    } 
    
    resultDiv.textContent = roundResult;
    
    keepScore(roundResult);
    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        resultDiv.textContent = decideWinner(playerScore, computerScore);  
    }
});
