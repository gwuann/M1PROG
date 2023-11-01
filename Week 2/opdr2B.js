// Opdracht B
let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your age: ", function(age) {
  if (age < 17) {
    console.log("U bent te je jong. ");
  } else {
    console.log("Kom verder. ");
  }

  rl.close();
});