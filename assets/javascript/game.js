//array of choices
var choices = ["a","z","c","g","w","p"];

 //number of wins, losses, guesses and letters selected
var wins = 0;
var losses = 0;
var guessleft = 0;

//when i press a key an event will happen
document.onkeyup = function(event){

	var userGuess = event.key;

//if i press these keys then it will add to my winCount
if ((userGuess === "a") || (userGuess === "z") || (userGuess === "c") || (userGuess === "g") || (userGuess === "w") ||(userGuess === "p")){
	winCount++;
}
// if I press these keys then it will add to my lossCount
else if((userGuess !== "a") || (userGuess !== "z") || (userGuess !== "c") || (userGuess !== "g") || (userGuess !== "w") ||(userGuess !== "p")){ 
	lossCount++;

if ((guessleft = 0; guessleft < 5; i++)){
	console.log(" You have + guessleft ");
}

}
	<var html = "<p>The Psychic Game</p>" +
	"<p> Guess what letter I'm thinking of...</p>"
	"<p> Wins:" + wins + "</p>" +
	"<p> Loss:"+ losses + "</p>" +
	"<p> Guesses Left: " + guessleft + "</p>" +
	"<p> Your guesses so far: " + guesschoices + "</p>";

	document.querySelector("#game").innerHTML = html;
        }
    };