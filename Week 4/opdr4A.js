// Opdracht A 

let getal1 = 0;
let getal2 = 1;
let antwoord;
while(true){
    antwoord = getal1 + getal2
   console.log(getal1)
   getal1 = getal2;
   getal2 = antwoord;
   if (antwoord > 10000000)
   break;
}