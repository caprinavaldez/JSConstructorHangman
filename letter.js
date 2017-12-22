// Constructor function for letter objects
function Letter(lett) {
	this.lett = lett;
	this.guessed = false;
}

Letter.prototype.display = function() {
	if(this.guessed === false){
		return '_ ';
	} else {
		return this.lett;
	}
}

module.exports = Letter;

