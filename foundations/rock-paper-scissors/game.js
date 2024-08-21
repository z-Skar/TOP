function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose one of the options: Rock, Paper, Scissors.");
    if (playerChoice.localeCompare('Rock', undefined, { sensitivity: 'base' }) === 0) {
        return "Rock";
    } else if (playerChoice.localeCompare('Paper', undefined, { sensitivity: 'base' }) === 0) {
        return "Paper";
    } else if (playerChoice.localeCompare('Scissors', undefined, { sensitivity: 'base' }) === 0) {
        return "Scissors";
    } else return getPlayerChoice();
}

let computerScore = 0, playerScore = 0;

function playRound(computerChoice, playerChoice) {
    const victory = `You won! ${playerChoice} beats ${computerChoice}.`
    const defeat = `You lost! ${computerChoice} beats ${playerChoice}.`
    const draw = `It's a draw!`

    switch (computerChoice) {
        case "Rock":
            if (playerChoice === "Paper") {
                console.log(victory)
                playerScore++;
            } else if (playerChoice === "Scissors") {
                console.log(defeat)
                computerScore++;
            } else {
                console.log(draw)
            }
            break;
        case "Paper":
            if (playerChoice === "Rock") { 
                console.log(defeat)
                computerScore++;
            } else if (playerChoice === "Scissors") { 
                console.log(victory)
                playerScore++;
            } else { 
                console.log(draw) 
            }
            break;
        case "Scissors":
            if (playerChoice === "Rock") {
                console.log(victory)
                playerScore++;
            } else if (playerChoice === "Paper") {
                console.log(defeat)
                computerScore++;
            } else {
                console.log(draw)
            }
            break;
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        playRound(getComputerChoice(), getPlayerChoice());
    }
    console.log("Computer Score: " + computerScore)
    console.log("Player Score: " + playerScore)
    
    if (computerScore > playerScore) {
        console.log("You lost the game.")
    }
    else if (computerScore < playerScore) {
        console.log("You won the game!")
    }
    else {
        console.log("The game is finished, it's a draw!")
    }
}

const TITLE = document.querySelector("#title");
const COMPUTER_SCORE = document.querySelector("#computerScore");
const PLAYER_SCORE = document.querySelector("#playerScore");


for (let round = 1; playerScore < 4 && computerScore < 4; round++) {
    playRound(getComputerChoice(), getPlayerChoice());
    TITLE.textContent = `ROUND ${round}`;
}