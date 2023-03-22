// TOP Rock Paper scissors exercise
// by elBrant, 24FEB2023


// establish global variables 
let round;
let myScore; myScore = isNaN(myScore) ? 0 : myScore;
let pcScore; pcScore = isNaN(pcScore) ? 0 : pcScore; 
let msg;
let result;


// playerSelection (begin game with onclick event)
function game(x) {
	let myPlay = x; 
	let pcPlay;

	// getComputerChoice-- works
	let pcRoll = Math.floor(Math.random() * 3) + 1;
	if (pcRoll == 1) { pcPlay = "rock"; } 
	else if (pcRoll == 2) { pcPlay = "paper"; } 
	else { pcPlay = "scissors"; }

	// establish HTML output -- works
	document.getElementById("me").innerHTML = myPlay;
	document.getElementById("pc").innerHTML = pcPlay;

	// winner winner chicken dinner 
	wwcd(myPlay, pcPlay);

} // end game()


// winner winner chicken dinner; determine winner; return results
function wwcd(myPlay, pcPlay) {
	if (myPlay === pcPlay) { msg = "tie!"; result = "this round won't count";  
	// rock breaks scissors
	} else if ((myPlay == "rock" && pcPlay == "scissors") || (myPlay == "scissors" && pcPlay == "rock")) {
		msg = "rock breaks scissors <br>";
		if (myPlay == "rock") {	myWin(); } else { pcWin(); }
	// paper covers rock
	} else if ((myPlay == "paper" && pcPlay == "rock") || (myPlay == "rock" && pcPlay == "paper")) {
		msg = "paper covers rock";
		if (myPlay == "paper") { myWin(); } else { pcWin(); }
	// scissors cuts up paper
	} else if (myPlay == "scissors" && pcPlay == "paper") {
		msg = "scissors cut up paper";
		myWin();
	} else {  //(myPlay == "paper" && pcPlay == "scissors")
		msg = "scissors cut up paper";
		pcWin();
	}
	// establish HTML output -- works
	document.getElementById("toss").innerHTML = msg;
	document.getElementById("winner").innerHTML = result; 

}

// scorekeeper
function tally() {
	if (!sessionStorage.getItem("myScore")) { 
		myScore = 0; 
		myScore = isNaN(myScore) ? 0 : myScore;
		sessionStorage.setItem("myScore", myScore); 
	} else { 
		sessionStorage.getItem("myScore"); 
		myScore = isNaN(myScore) ? 0 : myScore;
		sessionStorage.setItem("myScore", myScore); 
	}
	console.log(myScore); 

	if (!sessionStorage.getItem("pcScore")) {
		pcScore = 0; 
		pcScore = isNaN(pcScore) ? 0 : pcScore;
		sessionStorage.setItem("pcScore", pcScore); 
	} else { 
		sessionStorage.getItem("pcScore"); 
		pcScore = isNaN(pcScore) ? 0 : pcScore;
		sessionStorage.setItem("pcScore",pcScore);
	}
	console.log(pcScore);

	if ((myScore == 0) && (pcScore == 0)) { round = 1; 
	} else { round = Number(myScore + pcScore) + 1; }
	
	console.log(round);
}

// player wins
function myWin() { 
	tally();
	myScore += 1;  
	sessionStorage.setItem("myScore", myScore);
	document.getElementById("myWins").innerHTML = myScore;
	document.getElementById("pcWins").innerHTML = pcScore;

	// return results
	if ((myScore === 3) && (!pcScore)) { result = "welcome to the <br> HALL of FAME <br> please enter your initials below"; gameover(); }
	else if ((myScore === 3) && (pcScore <= 2)) { result = "winner winner chicken dinner! <br> congratulations!!!"; gameover(); }
	else { result = "YOU won round " + round + "! whoohoo! "; } 
	console.log(myScore, round);
} 

// pc wins
function pcWin() {
	tally();
	pcScore += 1; 
	sessionStorage.setItem("pcScore", pcScore); 
	document.getElementById("pcWins").innerHTML = pcScore;
	document.getElementById("myWins").innerHTML = myScore;
	
	// return results
	if ((pcScore === 3) && (!myScore)) { result = "dude, you need more practice... try again"; gameover(); }
	else if ((pcScore === 3) && (myScore <= 2)) { result = "good try! <br> computer wins game"; gameover(); }
	else { result = "PC wins round " + round + "! "; }
	console.log(pcScore, round);
}

function gameover() {
	msg = 'thanks for playing! <br> <span onclick="window.location.reload();"> click here to play again</span>';
}
// eof -- end game