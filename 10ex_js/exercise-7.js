function sumUntil(maxValue) {
	let resultString = '0';
	let result = 0;
	for (let i = 1; i <= maxValue; i++) {
		result = i + result;
		resultString = resultString + ' + ' + i;
	}
	return resultString + ' = ' + result;
}

console.log(sumUntil(5));
