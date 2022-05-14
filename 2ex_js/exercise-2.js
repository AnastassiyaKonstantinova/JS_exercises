function canPlay() {
	const personName = 'Paul';

	if (true) {
		personName = 'George';
	}

	personName += ' plays football';

	console.log(personName);
}

canPlay();

// if it means "only to be read and not changed", the function has to be "const" and not "let"
