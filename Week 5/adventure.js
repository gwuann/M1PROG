let readlineSync = require("readline-sync");

let totalhp = 20;
let totalenemyhp = 20;
let name = readlineSync.question("Hoe heet jij?: ");
console.log("Je komt een slime tegen.");

function fight() {
    let damage = Math.floor(Math.random() * 7) + 1;
    let slimedamage = Math.floor(Math.random() * 5) + 1;

    let choice = readlineSync.question("Wil je vechten (1) of vluchten (2)? ");

    if (choice === "1") {
        console.log(name + " valt de slime aan! ");
        console.log("De slime slaat terug! ");
        totalenemyhp -= damage;
        console.log("Enemy HP: " + totalenemyhp);
        totalhp -= slimedamage;
        console.log("Jouw HP: " + totalhp);

        if (totalenemyhp > 0 && totalhp > 0) {
            fight();
        } else if (totalenemyhp <= 0) {
            console.log("Je hebt de slime vermoord! ");
        } else if (totalhp <= 0) {
            console.log("Je bent dood! ");
        }
    } else if (choice === "2") {
        console.log("Je bent ontsnapt. ");
    } else {
        console.log("Ongeldige keuze. Kies 1 om te vechten of 2 om te vluchten.");
        fight();
    }
}

fight();