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
//überprüfe, ob Player gewonnen hat:
	//P Scissors & C Paper
	//P Paper & C Rock
	//P Rock & C Scissors
	//Zeige eine Nachricht "Du hast gewonnen: playerSelection beats computerSelection"
//überprüfe, ob beide das Gleiche haben
	//Zeige: "Keiner hat gewonnen; beide zeigten playerSelection"
//wenn computer gewinnt (Fälle andersrum als oben)
	//zeige Nachricht: "You lose. computerSelection beats playerSelection"
//bei falscher oder keiner Angabe (else)
	//zeige: please insert paper, rock or stone

let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");
let resultDiv = document.querySelector('.results');
let points = document.querySelector('.points');
let playerPoints = 0;
let computerPoints = 0;
points.textContent = "Player: " + playerPoints + "      " + "computer:   "+ computerPoints;
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
				points.textContent = "VICTORYYYYYY! YOU WON THE GAME!"
			}
			else {
				points.textContent = "Player: " + playerPoints + "      " + "computer:   "+ computerPoints;
			}
		}
		else if (
		(playerSelection === "ROCK" && computerSelection === "PAPER") ||
		(playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
		(playerSelection === "SCISSORS" && computerSelection === "ROCK") ) {
			resultDiv.textContent = `OUCH! COMPUTER BEAT YOU WITH ${computerSelection}`;
			++computerPoints;
			if (computerPoints >= 5) {
				points.textContent = "OH NOOOO! YOU LOST THE GAME"
			}
			else {
				points.textContent = "Player: " + playerPoints + "      " + "computer:   "+ computerPoints;
			}
		}

		else if (playerSelection === computerSelection) {
			resultDiv.textContent = `BOTH CHOSE ${playerSelection} - NO POINT FOR NOBODY`;
		}

		else {
			resultDiv.textContent = `Something went wrong, try again`;
		}
}


//5 Runden; in jeder Runde soll Spieler gefragt werden, was er wählt
//in jeder RUnde soll der Computer neu entscheiden
//nach jeder Runde soll die Punktzahl registriert werden
//in jeder Runde soll der Punktstand registriert werden
//am Ende soll der Endstand ausgegeben werden
//
// function game() {
// 	let playerPoints = 0;
// 	let computerPoints = 0;
// 	for (let i = 0; i < 5; i++) {
// 		let playerSelection = prompt ("What do you choose?");
// 		let computerSelection = computerPlay();
// 		console.log(playerSelection);
// 		console.log(computerSelection);
// 		if (playRound(computerSelection,playerSelection) === 1) {
// 			++playerPoints;
// 			console.log(`Yeah: Your ${playerSelection.toUpperCase()} beats the computer's ${computerSelection.toUpperCase()}.`)
// 		}
// 		else if (playRound(computerSelection,playerSelection) === 2) {
// 			++computerPoints;
// 			console.log(`Oh dear: Your ${playerSelection.toUpperCase()} has been beaten by the computer's ${computerSelection.toUpperCase()}.`)
// 		}
// 		else if (playRound(computerSelection,playerSelection) === 3) {
// 			console.log(`Boo, are you soulmates? Both chose ${computerSelection.toUpperCase()}`)
// 		}
// 		else {
// 			console.log("Man, please type anything valid the next time.")
// 		}
// 	console.log("Spielstand: " + playerPoints + " (du) zu " + computerPoints + " (Computer).");
// 	}
// 	console.log("Endstand: " + playerPoints + " zu " + computerPoints + " (Computer).");
// }
//
// game();
