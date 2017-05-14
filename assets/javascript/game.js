

//array of choices
var choices = ["a","z","c"];

 //number of wins, losses, guesses and letters selected
var wins = 0;
var losses = 0;
var guessLeft = 5;
var guessesSoFar = [];

var letter = choices[Math.floor(Math.random()* choices.length)];

//when i press a key an event will happen
	document.onkeyup = function(event){

	var userGuess = event.key;

	guessesSoFar.push(userGuess)


//if userGuess presses a letter, then you either add a win point or 
// a lose point. 

	if(userGuess === "a"){
		wins++;guessLeft--;
	}
	else if(userGuess !== "a"){ 
		losses++;guessLeft--;
	}
//You have five tries before it resets.
	if((guessLeft === 0) || (userGuess === "a")){
		((guessesoFar = []) && (guessLeft = 5));
	}

// 	if(userGuess === "z"){
// 		wins++;guessLeft--;
// 	}
// 	else if(userGuess !== "z"){ 
// 		losses++;guessLeft--;
// 	}
// //You have five tries before it resets.
// 	if((guessLeft === 0) || (userGuess === "z")){
// 		((guessesoFar = []) && (guessLeft = 5));
// 	}

// 	if(userGuess === "c"){
// 		wins++;guessLeft--;
// 	}
// 	else if(userGuess !== "c"){ 
// 		losses++;guessLeft--;
// 	}
// //You have five tries before it resets.
// 	if((guessLeft === 0) || (userGuess === "c")){
// 		((guessesoFar = []) && (guessLeft = 5));
// 	}
  		
// it will keep track of the letter you guesses.
	var html = "<h1>The Psychic Game</h1>" +
	//"<h2> Guess what letter I'm thinking of...</h2>"
	"<p> wins:" + wins + "</p>" +
	"<p> losses:"+ losses + "</p>" +
	"<p> Guess Left: " + guessLeft + "</p>" +
	"<p> Your guesses so far: " + guessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html;

}


    
