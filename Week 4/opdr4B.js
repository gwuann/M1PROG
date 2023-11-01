// Opdracht B

const readlineSync = require("readline-sync");
const randomNummer = Math.floor(Math.random() * 100)

function raadNummer() {
  let nummer = readlineSync.question("Raad een nummer van 1 tot 100: ");

  if (nummer == randomNummer) {
    console.log("Goed!");
  } else if (nummer < randomNummer) {
    console.log("Te laag!");
    raadNummer();
  } else if (nummer > randomNummer) {
    console.log("Te hoog!");
    raadNummer();
  }
}

raadNummer();