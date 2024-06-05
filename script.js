const data = [
  "testing", //string
  false, //boolean
  30, //number
  { model: "3", color: "red" }, //object
  [1, 2, 3, 4, 5], // array
]; // length = 5, but last index = 4

const multiplier = data[4];

// number to be multiplied
const multiplyBy = prompt();

for (let i = 0; i <= multiplier.length; i++) {
  const message = multiplyBy + "*" + i + " = " + multiplyBy * i;

  console.log(message);
}
