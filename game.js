var hangman = require ('./hangman.js');
var inquirer = require('inquirer');

console.log('\n**************************************************************************\n');
console.log('                  Welcome to the Coding Genius Hangman                         ')
console.log('\n**************************************************************************\n');
console.log('                        Guess the Coding Genius!                            \n\n');

//gets random word to start game
function startGame(){
	var word = hangman.getWord();
	word.display();
	getUserGuess(word);
}

function getUserGuess(word){
	inquirer.prompt([{
		name: "letter",
		message: "Guess a letter: ",
		validate: function(input){
			return /[a-z]/.test(input.trim().toLowerCase());
			}
		}]).then(function(guess){
			word.letterInWord(guess.letter.toLowerCase());
			word.display();

			if (!word.guessed) {
				if(word.guessesLeft > 0){
					getUserGuess(word);
				} else {
					console.log("\n                   Whoops! No more guesses left!\n\n");
					gameDone()
				}
			
			} else if (word.guessed && word.guessesLeft === 0) {
				console.log("\n                   Yeah! You got it Genius!\n\n");
				gameDone();
			}
		});
}

function gameDone() {
	inquirer.prompt([{
		type: "confirm",
    	name: "playOrNay",
    	message: "Would you like to play again?"
		}]).then(function(user){
			if (user.playOrNay === true) {
				startGame();
			} else {
				console.log("See ya later!!")
			}
		});
}

startGame();