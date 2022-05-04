//computer randomly select rock paper or scissor from an array
let rps = ['rock', 'paper', 'scissors'];
const computerPlay = () => {
  return rps[Math.round(Math.random() * 2)];
};

let pScore = 0;
let cScore = 0;
//play a round
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return alert(`Draw. Both choose ${playerSelection}`);
  } else if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      cScore++;
      return alert('You lose. Paper beats Rock.');
    } else {
      pScore++;
      return alert('You win! Rock beats Scissors.');
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      cScore++;
      return alert('You lose. Scissors beats paper.');
    } else {
      pScore++;
      return alert('You win! Paper beats Rock.');
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      cScore++;
      return alert('You lose. Rock beats Scissors.');
    } else {
      pScore++;
      return alert('You win. Scissors beats Paper.');
    }
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    //player choice
    let playerSelection = prompt('Select from ROCK, PAPER or SCISSORS', rps[Math.round(Math.random() * 2)]).toLowerCase();
    //computer choice
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }

  if (pScore == cScore) {
    return alert(`Draw. [${pScore} x ${cScore}]`);
  } else if (pScore > cScore) {
    return alert(`Player wins! [${pScore} x ${cScore}]`);
  } else {
    return alert(`Computer wins! [${cScore} x ${pScore}]`);
  }
};

game();
