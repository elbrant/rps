// TOP Rock Paper scissors exercise
// author: elBrant, 24FEB2023
// call-stack: game()-> wwcd()-> tally()-> myWin() or pcWin()-> track()-> gameover() 

// establish global variables 
let msg;
let myPlay;	
let myScore; 
let pcScore; 
let result;
let round; 

function $(id) { return document.getElementById(id); }
function get() { return sessionStorage.getItem; }
function set() { return sessionStorage.setItem; }	

function game(x) {
	// playerSelection (player onclick event initiates game)
	if (x === "rock" || "paper" || "scissors") { myPlay = x; } 
	else { window.location.reload() } //avoid malicious code 

	//getComputerChoice() 
	let pcRoll = Math.floor(Math.random() * 3) + 1;
	let pcPlay;

	if (pcRoll === 1) { pcPlay = "rock"; } 
	else if (pcRoll === 2) { pcPlay = "paper"; } 
	else { pcPlay = "scissors"; }	

	// establish HTML output -- works
	$("me").innerHTML = myPlay;
	$("pc").innerHTML = pcPlay;

	wwcd(myPlay, pcPlay);
} // end game
 
function wwcd(myPlay, pcPlay) { 
	// get and set session scores
	tally();

	// clear leftover messages
	msg = ""; 
	result = "";

	// winner winner chicken dinner; determine winner; return results
	if (myPlay === pcPlay) { msg = "tie!"; result = "this round won't count"; }

	// rock breaks scissors
	else if (((myPlay === "rock") && (pcPlay === "scissors")) || ((myPlay === "scissors") && (pcPlay === "rock"))) {
		msg = "rock breaks scissors <br>"; 
		if (myPlay === "rock") {	myWin(); } else { pcWin(); } }

	// paper covers rock
	else if (((myPlay === "paper")  && (pcPlay === "rock")) || ((myPlay === "rock") && (pcPlay === "paper"))) {
		msg = "paper covers rock"; 
		if (myPlay === "paper") { myWin(); } else { pcWin(); } }

	// scissors cuts up paper
	else { 
		msg = "scissors cuts up paper"; 
		if (myPlay === "scissors") { myWin(); } else { pcWin(); } } 
	
	// establish HTML output 
	$("toss").innerHTML = msg;
	$("winner").innerHTML = result;

	function myWin() { 
		// player won round
		myScore += 1;  
		set("myScore", myScore);
		track();

		// return msgs
		if (myScore === 3) {
			if (myScore === round) { result = " you are my <br> HERO!! <br> it takes skill to skunk the computer, and you did it!"; }
			else { result = "<span onclick='window.location.reload();'> congratulations!!! <br> winner winner chicken dinner! </span>"; } 
			gameover(); }
		else { result = "YOU won round " + round + "! "; } 
	} 

	function pcWin() {
		// pc won round
		pcScore += 1; 
		set("pcScore", pcScore);
		track();

		// return msgs
		if (pcScore === 3) {
			if (pcScore === round) { result = " don't stop now ...  <br> you'll get the hang of this "; }
			else { result = "good try! <br> computer wins game"; }
			gameover(); }
		else { result = "PC wins round " + round + "! "; } 
	}	
} // end wwcd

function tally() {
	// get and set session/scores
	if (!get("myScore")) { myScore === 0; set("myScore", myScore); } 
	else { get("myScore"); myScore = isNaN(myScore) ? 0 : myScore; }

	if (!get("pcScore")) { pcScore === 0; set("pcScore", pcScore); } 
	else { get("pcScore"); pcScore = isNaN(pcScore) ? 0 : pcScore; }

	// prevent ongoing rounds after win
	if ((myScore >= 3) || (pcScore >= 3)) { window.location.reload(); } 
}  // end tally

function track() {
	// count rounds
	round === (myScore + pcScore); 
	round = isNaN(round) ? 0 : round;
	if ((round === 0) || (round < 5)) { round++; }
	else { window.location.reload(); }

	// HTML output
	$("myWins").innerHTML = myScore;
	$("pcWins").innerHTML = pcScore;
	$("toss").innerHTML = msg;
	$("winner").innerHTML = result;
}  // end track rounds

function gameover() {
	// HTML output
	$("winner").innerHTML = result; 
	result += '<span onclick="window.location.reload();"> <br > thanks for playing! <br> start a new game </span>';
} // end gameover
// eof 
