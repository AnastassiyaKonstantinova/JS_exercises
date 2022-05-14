function canPlay() {
	let personName = 'Paul';
	personName += ' plays football';
	console.log(personName);
}
canPlay();

// "let" has a local scope, therefore is has to be defined outside of an if statement, but if it was a global scope, its position wouldn't matter. in our case we need to put it in the same scope that we have and it fixes the problem.
