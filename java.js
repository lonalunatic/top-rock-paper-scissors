// ziehe eine Zufallszahl aus 1, 2 oder 3
// gebe das Ergebnis Rock für 1
// gebe das Ergebnis Paper für 2
// gebe das Ergebnis Scissors für 3
function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	return (randomNumber === 1) ? "rock" :
	(randomNumber === 2) ? "paper" :
	"scissors";
}

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");
let resultDiv = document.querySelector('.results');
let compPointsDisplay = document.querySelector('.points-comp');
let playerPointsDisplay = document.querySelector('.points-player');
let playerPoints = 0;
let computerPoints = 0;
compPointsDisplay.textContent = computerPoints;
playerPointsDisplay.textContent = playerPoints;

const buttons = document.querySelectorAll("button");


buttons.forEach((btn) => { btn.addEventListener ('click', playRound)
});

function playRound(computerSelection, playerSelection) {
	computerSelection = computerPlay();
	playerSelection = this.name;
	computerSelection = computerSelection.toUpperCase();
 	playerSelection = playerSelection.toUpperCase();
	if (
		(computerSelection === "ROCK" && playerSelection === "PAPER") ||
		(computerSelection === "PAPER" && playerSelection === "SCISSORS") ||
		(computerSelection === "SCISSORS" && playerSelection === "ROCK") ) {
			resultDiv.textContent = `ONE POINT FOR YOU! ${playerSelection} BEATS ${computerSelection}`;
			++playerPoints;
			if (playerPoints >= 5) {
				resultDiv.textContent = "VICTORYYYYYY! YOU WON THE GAME! " + String.fromCodePoint(128079);
				compPointsDisplay.textContent = String.fromCodePoint(128555);
				playerPointsDisplay.textContent = String.fromCodePoint(129395);
				setTimeout(location.reload(), 3000);
			}
			else {
				compPointsDisplay.textContent = computerPoints;
				playerPointsDisplay.textContent = playerPoints;
			}
		}
		else if (
		(playerSelection === "ROCK" && computerSelection === "PAPER") ||
		(playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
		(playerSelection === "SCISSORS" && computerSelection === "ROCK") ) {
			resultDiv.textContent = `OUCH! COMPUTER BEAT YOU WITH ${computerSelection}`;
			++computerPoints;
			if (computerPoints >= 5) {
				resultDiv.textContent = "OH NOOOO! YOU LOST THE GAME " + String.fromCodePoint(0x2620);				;
				compPointsDisplay.textContent = String.fromCodePoint(129395);
				playerPointsDisplay.textContent = String.fromCodePoint(128555);
				window.setTimeout(location.reload(), 5000);
			}
			else {
				compPointsDisplay.textContent = computerPoints;
				playerPointsDisplay.textContent = playerPoints;
			}
		}

		else if (playerSelection === computerSelection) {
			resultDiv.textContent = `BOTH CHOSE ${playerSelection} - NO POINT FOR NOBODY`;
		}

		else {
			resultDiv.textContent = `Something went wrong, try again`;
		}
}