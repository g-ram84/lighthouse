const args = process.argv.slice(2);
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);
const sum = (a, b) => {
	return a + b;
};
console.log(sum(num1, num2));
