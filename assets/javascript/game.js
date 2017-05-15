

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
	if((userGuess === "a") || (userGuess === "z")|| (userGuess === "c")){
		wins++;guessLeft--;
}
	else if((userGuess !== "a")|| (userGuess === "z") || (userGuess === "c")){ 
		losses++;guessLeft--;
}
//You have five tries before it resets guessLeft and guessSoFar.
	if((guessLeft === 0) || (userGuess === "a") || (userGuess === "z") || (userGuess === "c")){
	guessLeft = 5; guessesSoFar = [];

}

//  if(userGuess === "a")+ (userGuess === "z") + (userGuess === "c") {			
// 	alert ("You guessed all the letters!");
// 	location.reload();
	
// }

	var html = "<h1>The Psychic Game</h1>" +
	//"<h2> Guess what letter I'm thinking of...</h2>"
	"<p> wins:" + wins + "</p>" +
	"<p> losses:"+ losses + "</p>" +
	"<p> Guess Left: " + guessLeft + "</p>" +
	"<p> Your guesses so far: " + guessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html;
}




    
