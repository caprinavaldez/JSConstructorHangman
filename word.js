var Letter = require('./letter.js');

module.exports= function Word(word) {

	var letters = [];
	var wordArray = word.split('');

	wordArray.forEach(function(lett) {
		letters.push(new Letter(lett));
	});

	this.guessesLeft = 10;
	this.guessed = false;
	
	function every(array, cb) {
		//if every element of the array returns true, then return true
		var temp = true;
		for (var i = 0; i < array.length; i++) {
			if (cb(array[i]) === false) {
				temp = false; 
			} 
			return temp
		}
	}

	this.letterInWord = function(userGuess) {
		this.guessesLeft --;
		this.guessed = every(letters, function (letter) {
			if(userGuess === letter.lett) {
				letter.guessed = true;
			}
			return letter.guessed;
		});
	}

	this.display = function() {
		var str = '';
		letters.forEach(function(letter) {
			str += letter.display();
		});
		console.log('                                 '+str+'       Guesses Left:'+ this.guessesLeft);
	}
}