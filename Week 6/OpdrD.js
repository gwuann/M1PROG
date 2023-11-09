let readline = require('readline-sync');

let BoodschappenLijst = [];

function voegtoe(woord) {
  BoodschappenLijst.push(woord);
  console.log(woord + " Toegevoegd an de lijst.");
}

function haalweg(woord) {
  let index = BoodschappenLijst.indexOf(woord);
  if (index > -1) {
    BoodschappenLijst.splice(index, 1)
    console.log(woord + " Is uit de lijst gehaald.")
  } else {
    console.log(woord + " Is niet in de lijst.")
  }
}

function Delijst() {
  console.log('\nShopping List: ' + BoodschappenLijst);
}

while (true) {
  console.log("  MENU  ")
  console.log('1: Voeg iets toe.');
  console.log('2: Haal iets weg.');
  console.log('3: Laat de lijst zien.');
  console.log('4: Stoppen.');

  let keuze = readline.question("Kies iets om te doen: ");

  switch (keuze) {
    case "1":
      let itemToAdd = readline.question("Wat wil je toevoegen?: ");
      voegtoe(itemToAdd);
      break;
    case "2":
      let itemToRemove = readline.question("Wat wil weg halen?: ");
      haalweg(itemToRemove);
      break;
    case "3":
      Delijst();
      break;
    case "4":
      process.exit(0);
  }
  
  console.log("\n")
}
