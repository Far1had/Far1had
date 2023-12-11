const johnGroesse = 170;
const johnAlter = 22;

const mikeGroesse = 168;
const mikeAlter = 34;

const punkteJohn = johnAlter * 5 + johnGroesse;
const punkteMike = mikeAlter * 5 + mikeGroesse;

console.log("john scoren: " + (johnAlter * 5 + johnGroesse));
console.log("mike scoren: " + (mikeAlter * 5 + mikeGroesse));

if (punkteJohn > punkteMike) {
    console.log(`John gewinnt mit ${punkteJohn} Punkten!`);
} else if (punkteMike > punkteJohn) {
    console.log(`Mike gewinnt mit ${punkteMike} Punkten!`);
} else {
    console.log("Unentschieden!");
}

/*
Conditionals-Level-2_1.js:10 john scoren: 280
Conditionals-Level-2_1.js:11 mike scoren: 338
Conditionals-Level-2_1.js:16 Mike gewinnt mit 338 Punkten!
*/