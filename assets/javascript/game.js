

//array of choices
var choices = ["a","z","c","g","w","p"];

 //number of wins, losses, guesses and letters selected
var wins = 0;
var losses = 0;
var guessLeft = 0;
var guessesSoFar = [];

var letter = choices[Math.floor(Math.random()* choices.length)];

//when i press a key an event will happen
document.onkeyup = function(event){

	var userGuess = event.key;

	guessesSoFar.push(userGuess)

//if userGuesses a letter, then you either win a point or 
//lose a point. 
if((userGuess === "a") && (letter === "a")) {
 	wins = 0; guessLeft < 5; wins++;

}

//You have five tries before it resets.


// it will keep track of the letter you guesses.




	var html = "<h1>The Psychic Game</h1>" +
	//"<h2> Guess what letter I'm thinking of...</h2>"
	"<p> wins:" + wins + "</p>" +
	"<p> losses:"+ losses + "</p>" +
	"<p> Guess Left: " + guessLeft + "</p>" +
	"<p> Your guesses so far: " + guessesSoFar + "</p>";

	document.querySelector("#game").innerHTML = html;
}
    
