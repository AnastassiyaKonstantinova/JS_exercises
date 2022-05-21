function greet(message) {
	return function (name) {
		return message + ' ' + name;
	};
}

let sayHello = greet('Hello');
let sayGoodbye = greet('Goodbye');

console.log(sayHello('John'));
console.log(sayGoodbye('Peter'));
