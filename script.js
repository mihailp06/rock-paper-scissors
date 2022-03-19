const hands = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

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
    if (playerScore > computerScore) {
        return `Player wins! Score: ${playerScore} - ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer wins! Score: ${playerScore} - ${computerScore}`;
    } else {
        return `It\'s a draw! Score: ${playerScore} - ${computerScore}`;
    }
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

rockBtn.addEventListener('click', () => {
    console.log(playRound('rock', computerPlay()));
});

paperBtn.addEventListener('click', () => {
    console.log(playRound('paper', computerPlay()));
});

scissorsBtn.addEventListener('click', () => {
    console.log(playRound('scissors', computerPlay()));
});