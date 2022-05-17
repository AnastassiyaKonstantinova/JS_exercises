function adultFilter(persons) {
	//for every element of the array we need to select those whose age is egual or above 18 and return them into another array;

	//for every element of the array

	let result = [];
	for (let i = 0; i < persons.length; i++) {
		//select those whose age is equal or more than 18

		if (persons[i].age >= 18) {
			result.push(persons[i]);
		}
	}
	return result;
}

const persons = [
	{ name: 'Paul', age: 16 },
	{ name: 'George', age: 17 },
	{ name: 'Lucas', age: 21 },
	{ name: 'Marco', age: 32 },
	{ name: 'Peter', age: 18 },
	{ name: 'Carl', age: 13 },
	{ name: 'Simon', age: 24 },
	{ name: 'Mark', age: 15 },
	{ name: 'Sandra', age: 34 },
	{ name: 'Alice', age: 28 },
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
