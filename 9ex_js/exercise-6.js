function getKeys(obj) {
	//when iterating though objects, use for...in as a method
	let result = [];
	for (let i in obj) {
		result.push(i);
	}
	return result;
}

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 32,
	city: 'Rome',
	job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
