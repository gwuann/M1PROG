// Opdracht C
let schooldag = true;

let huidigeTijd2 = new Date();
console.log(huidigeTijd2.getDay());

(schooldag = 1, 2, 3, 4, 5)
if(schooldag == true){
    console.log("Ik moet naar school");
} else {
    console.log("Lekker uitslapen!");
}
