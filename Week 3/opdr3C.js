// Opdracht C
let readlineSync = require('readline-sync');
 

function leeftijd(jaar, maand, dag) {
    let now = new Date();
    let birth = new Date(jaar, maand, dag); 
    let miliseconds = now-birth;
    console.log(miliseconds / 31556952000);
    
}

let _jaar = readlineSync.question('Welk jaar ben je geboren?: ');
let _maand = readlineSync.question('Welke maand ben je geboren?: ',);
let _dag = readlineSync.question('Welke dag ben je geboren?: ',);
leeftijd(_jaar, _maand, _dag);
