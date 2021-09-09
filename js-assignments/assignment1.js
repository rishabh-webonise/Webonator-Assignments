let inp = window.prompt("Enter comma seperated list of numbers");
let op = new Object();
inp
  .split(",")
  .map((val, i) => parseInt(val))
  .sort()
  .forEach((val, i) => (op[val] >= 1 ? op[val]++ : (op[val] = 1)));
console.log(op);
