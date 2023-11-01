// Opdracht C
let readlineSync = require('readline-sync');
 
let jaar = readlineSync.question('Welk jaar ben je geboren?: ');
let maand = readlineSync.question('Welke maand ben je geboren?: ',);
let dag = readlineSync.question('Welke dag ben je geboren?: ',);

let now = new Date();
let birth = new Date(jaar, maand, dag); 
let miliseconds = now-birth;
console.log(miliseconds / 31556952000);
