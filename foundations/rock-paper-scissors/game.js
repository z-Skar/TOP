const TITLE = document.querySelector("#title");
const PLAYER_SCORE = document.querySelector("#playerScore");
const COMPUTER_SCORE = document.querySelector("#computerScore");
const BUTTONS = document.querySelectorAll(".options button");
const PARAGRAPH = document.querySelector("#playerPick");
const RESULT = document.querySelector("#result");
const COMPUTER_CHOICE = document.querySelector("#computerChoice");
let computerScore = 0, playerScore = 0;

function getComputerChoice() {
    return new Promise((resolve) => {
        let computerChoice = Math.floor(Math.random() * 3) + 1;

        if (computerChoice === 1) {
            COMPUTER_CHOICE.src = './resources/rock.jpg';
            resolve("Rock");
        } else if (computerChoice === 2) {
            COMPUTER_CHOICE.src = './resources/paper.png';
            resolve("Paper");
        } else {
            COMPUTER_CHOICE.src = './resources/scissors.png';
            resolve("Scissors");
        };
    });
}

function getPlayerChoice() {
    return new Promise((resolve) => {
        for (let button of BUTTONS) {
            button.addEventListener("click", () => {
                PARAGRAPH.textContent = "You made a pick";
                for (let btn of BUTTONS) {  // Iterate through BUTTONS again, if the button in the new iteration is different from the clicked button, then that button becomes hidden.
                    if (btn !== button) {
                        btn.setAttribute("style", "visibility: hidden");
                    }
                }
                setTimeout(() => {
                    PARAGRAPH.textContent = "Take your pick";
                    for (let btn of BUTTONS) { // Iterate through the BUTTONS again, similar to the upper iteration, if the button is different from the clicked button, them that button becomes visible.
                        if (btn !== button) {
                            btn.setAttribute("style", "visibility: visible");
                        }
                    }
                }, 2000);
                resolve(button.id);
            });
        };
    });
};

function playRound(computerChoice, playerChoice) {
    const victory = `You won! ${playerChoice} beats ${computerChoice}.`;
    const defeat = `You lost! ${computerChoice} beats ${playerChoice}.`;
    const draw = `It's a draw!`;

    switch (computerChoice) {
        case "Rock":
            if (playerChoice === "Paper") {
                playerScore++;
                return victory;
            } else if (playerChoice === "Scissors") {
                computerScore++;
                return defeat;
            } else {
                return draw;
            }
        case "Paper":
            if (playerChoice === "Rock") { 
                computerScore++;
                return defeat;
            } else if (playerChoice === "Scissors") { 
                playerScore++;
                return victory;
            } else { 
                return draw;
            }
        case "Scissors":
            if (playerChoice === "Rock") {
                playerScore++;
                return victory;
            } else if (playerChoice === "Paper") {
                computerScore++;
                return defeat;
            } else {
                return draw;
            }
    };
};

async function playGame() {
   for (let round = 1; playerScore < 5 && computerScore < 5; round++) {
        TITLE.textContent = `ROUND ${round}`;
        PLAYER_SCORE.textContent = `Your Score: ${playerScore}`;
        COMPUTER_SCORE.textContent = `Opponent Score: ${computerScore}`;
        let playerChoice =  await getPlayerChoice().then((choice) => choice);
        let computerChoice = await getComputerChoice().then((choice) => choice);
        RESULT.textContent = playRound(computerChoice, playerChoice);
        setTimeout(() => {
            COMPUTER_CHOICE.src = "./resources/V-sign.png";
            if (playerScore < 5 && computerScore < 5) {
                RESULT.textContent = "";
            }
        }, 2000);
    };

    if (playerScore > computerScore) {
        RESULT.textContent = "You won the game!";
    } else if (computerScore > playerScore) {
        RESULT.textContent = "You lost the game.";
    } else {
        RESULT.textContent = "The game is finished, it's a draw!";
    }
};

playGame();