const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function promptUser() {
  return prompt("what's your choice?");
}

// return a random choice from the CHOICES array
function getComputerChoice() {
  let index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

// get human choice
function getHumanChoice() {
  let choice = promptUser();
  if (CHOICES.includes(choice)) {
    return choice;
  } else {
    getHumanChoice();
  }
}
// Rock beats scissors,
// scissors beat paper,
// and paper beats rock.

function playGame() {
  function playRound() {
    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    if (humanSelection === computerSelection) {
      humanScore += 1;
      computerScore += 1;
    }
    console.log(humanSelection, computerSelection);

    if (humanSelection == "rock" && computerSelection == "scissors") {
      humanScore += 1;
    } else if (computerSelection == "rock" && humanSelection == "scissors") {
      computerScore += 1;
    }
    if (humanSelection == "scissors" && computerSelection == "paper") {
      humanScore += 1;
    } else if (humanSelection == "paper" && computerSelection == "scissors") {
      computerScore += 1;
    }
    if (humanSelection == "paper" && computerSelection == "rock") {
      humanScore += 1;
    } else if (humanSelection == "rock" && computerSelection == "paper") {
      computerScore += 1;
    }
  }
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (computerScore > humanScore) {
    alert(`computer won you. Scored ${computerScore}:${humanScore}`);
  } else {
    alert(`You won computer!. Scored ${humanScore}:${computerScore}`);
  }
}

playGame();
