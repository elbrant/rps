// TOP Rock Paper scissors exercise
// by elBrant, 24FEB2023


// begin game with onclick event
function game(x) {

	// establish variables, retrieve user play
	let myPlay = x;
	let msg = "";
	let result = "";

	// generate pc play
	let pcRoll = Math.floor(Math.random() * 3) + 1;
	let pcPlay;
	if (pcRoll == 1) { pcPlay = "rock"; } 
	else if (pcRoll == 2) { pcPlay = "paper"; } 
	else { pcPlay = "scissors"; }

	// establish HTML output
	document.getElementById("me").innerHTML = myPlay;
	document.getElementById("pc").innerHTML = pcPlay;

	// wwcd(), myWin(), pcWin()
	if (!sessionStorage.getItem("myScore")) { 
		sessionStorage.setItem("myScore",0); 
	} else { 
		(sessionStorage.getItem("myScore"));
		if (isNaN(myScore)) { +myScore; }
	}

	if (!sessionStorage.getItem("pcScore")) { 
		sessionStorage.setItem("pcScore",0); 
	} else { 
		(sessionStorage.getItem("pcScore"));
		if (isNaN(pcScore)) { +pcScore; }
	}
	let turn = myScore + pcScore + 1;


	// winner winner chicken dinner 
	wwcd(myPlay, pcPlay);

	// congrats msgs, scoring
	document.getElementById("toss").innerHTML = msg;
	document.getElementById("winner").innerHTML = result; 
	document.getElementById("myScore").innerHTML = myScore;
	document.getElementById("pcScore").innerHTML = pcScore;


	function myWin() { 
		myScore += 1; result = "myScore"; 

		if (turn <= 2) { result = "YOU won round " + turn + "! whoohoo! " + myScore; }
 		else if ((turn === 3) && (pcScore === 0)) { result = "welcome to the <br> HALL of FAME <br> please enter your initials below"; }
		else if ((turn === 3) && (pcScore <= 2)) { result = "you just won the game! congratulations!!!"; }
		else { result = "YOU won round " + turn + "! whoohoo! "; } 

		console.log(turn, myScore);
	} 

	function pcWin() {
 		pcScore++; result = "pcScore"; 


		if (turn <= 2) { result = "PC wins round " + turn + "! " + pcScore; } 
		else if ((turn === 3) && (!myScore)) { result = "dude, you need more practice... try again"; }
		else if ((turn === 3) && (myScore <= 2)) { result = "pc wins game.. play again"; }
		else { result = "PC wins round " + turn + "! " + pcScore; }

		console.log(turn, pcScore);
	}

	function wwcd(myPlay, pcPlay) {
		if (myPlay === pcPlay) { msg = "tie!"; result = "no winner this round";  
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
  	}


// save score

// loop until winner (5 times max)
// eof -- end game
}