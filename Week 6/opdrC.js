/*
let stuff = ['c', 5645, 9393.77, "hello", true, false, "Good morning", "number", 88, -90, 777.777, 90, 665.33, "F"];

for (let i = 0; i < stuff.length; i++) {
     if (typeof stuff[i] === "number") {
     console.log("Nummer gevonden index: " + i);
        } else if (typeof stuff[i] === "string") {
        console.log("String gevonden bij index: " + i);
         } else if (typeof stuff[i] === "boolean") {
         console.log("Boolean gevonden bij index: " + i);
  }
  
};
*/

let stuff = ['c', 5645, 9393.77, "hello", true, false, "Good morning", "number", 88, -90, 777.777, 90, 665.33, "F"];

let Nummerlist = [];
let Stringlist = [];
let Booleanlist = [];

for (let i = 0; i < stuff.length; i++) {
  if (typeof stuff[i] === "number") {
    Nummerlist.push(stuff[i]);
  } else if (typeof stuff[i] === "string") {
    Stringlist.push(stuff[i]);
  } else if (typeof stuff[i] === "boolean") {
    Booleanlist.push(stuff[i]);
  }
}

console.log("Nummerlist: ", Nummerlist);
console.log("Stringlist: ", Stringlist);
console.log("Booleanlist: ", Booleanlist);
