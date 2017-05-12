var options = ["a","z","c","g","w","p"];
var winCount = 0;
var lossCount = 0;
var guessleft = 0;

//when i press a key
document.onkeyup = function(event){
	var userGuess = event.key;

if (userGuess === "a") || (userGuess === "z") || (userGuess === "c") || (userGuess === "g") || (userGuess === "w") ||(userGuess === "p"){
	wins++;
}
}