let namesArr = prompt("Enter names separated by commas:").split(",");
let agesArr = prompt("Enter corresponding ages separated by commas:").split(",").map(Number);

let restructured = [];
for (let i = 0; i < namesArr.length; i++) {
  restructured.push([namesArr[i], agesArr[i]]);
}

console.log("Restructured Array:");
restructured.forEach(pair => console.log(pair));
