let sum = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

let log = value => console.log(value);
//`((2 + 4) * (5 + 2) - 2) / 5`

log(divide(subtract(multiply(sum(2, 4), sum(2, 5)), 2), 5));
