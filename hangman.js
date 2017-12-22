var Word = require('./word.js');

module.exports.getWord = function (){

		//was not able to get this to work as all caps!
		var wordBank = ['vic', 'drew', 'alex', 'eric', 'stephanie', 'daniel', 'nathan', 'sam', 'james', 'alwyn', 'momo', 'josh', 'johnny'];
		// picks a random word
		var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		var word = new Word(randomWord);
		console.log(randomWord);
		return word;
}