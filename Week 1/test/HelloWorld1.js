// Opdracht A
console.log("Hello World")
// Opdracht B
let name = "nob";
let Level = 10
let Strength = 10
let Defense = 10
let Dexerity = 10
let magic1 = "Unlocked "
let magic2 = "Locked "
let Skills = "None"
let Special = "None"
console.log("Build: " + "None")
console.log("Name: " + name);
console.log("Level: " + Level)
console.log("Strength: " + Strength)
console.log("Defense: " + Defense)
console.log("Dexerity: " + Dexerity)
if (Level === 20){
    console.log("Magic: " + magic1);
} else {
    console.log("Magic: " + magic2);
}
console.log("Skills: " + Skills)
console.log("Special Abilities: " + Special)
// Opdracht C
let readline = require('readline-sync');
let name1 = readline.question("Hallo hoe heet jij: ");
console.log("Hallo " + name1 + "Aangenaamd kennis te maken! ");
// Opdracht D
let vers1 = ("Ik ben Julian ");
let vers2 = ("ik woon in Amsterdam ");
let vers3 = ("ik ben een man ");
let vers4 = ("en ik slaap heel lang! ");

console.log(vers1 + vers2 + vers3 + vers4);