let numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);
let names = prompt("Enter names separated by commas:").split(",");

let merged = [...numbers, ...names];
console.log("Merged Array:", merged);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in reverse:", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names sorted alphabetically:", sortedNames);
