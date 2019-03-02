//const userInput = 'rock';

var userInput = prompt("What will you throw?");			// Collects user input. Put into function. Also need to correct for caps

const options = ['rock', 'paper', 'scissors'];				// Array of the possible options

//Computer Input
const computer = Math.floor(Math.random() * 3);				// determines a random number between 0 and 2. 3 = # of options
const computerThrow = options[computer];					// What the computer will throw

// User Input
const userThrow = userInput.toLowerCase();					// Convers user input to lowercase

// Decision making process
if (userThrow == 'rock') {
	if (computerThrow == 'rock') {
		console.log("It's a tie!");	
	}
	else if (computerThrow == 'paper') {
		console.log("Computer wins :(");
	}
	else {
		console.log('user wins!');
	}
}
if (userThrow == 'paper') {
	if (computerThrow == 'rock') {
		console.log("You win!");	
	}
	else if (computerThrow == 'paper') {
		console.log("It's a tie!");
	}
	else {
		console.log("Computer wins :(");
	}
}
if (userThrow == 'scissors') {
	if (computerThrow == 'rock') {
		console.log("Computer wins :(");	
	}
	else if (computerThrow == 'paper') {
		console.log("You win!");
	}
	else {
		console.log("It's a tie!");
	}
}