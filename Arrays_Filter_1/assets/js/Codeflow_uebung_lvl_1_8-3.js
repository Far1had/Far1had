const zahlen = [12, 25, 7, 18, 30, 5];

function filterNumbers(arr) {
  return arr.filter(function(num) {
    return num <= 20; // Überprüfung, ob die Zahl kleiner oder gleich 20 ist
  });
}

// Ergebnis 
console.log("Ergebnis:", filterNumbers(zahlen));

// Arrow-Function, Filtert Zahlen kleiner oder gleich 6!!!
const filterKurzeZahlen = (arr) => arr.filter((num) => num <= 20);

// Ausgabe des Ergebnisses mit Arrow-Function
console.log("Ergebnis mit Arrow-Function:", filterKurzeZahlen(zahlen));

/*
Codeflow_uebung_lvl_1_8-3.js:10 Ergebnis: (4) [12, 7, 18, 5]
Codeflow_uebung_lvl_1_8-3.js:16 Ergebnis mit Arrow-Function: (4) [12, 7, 18, 5]
*/
