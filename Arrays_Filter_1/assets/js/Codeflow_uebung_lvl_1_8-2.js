// alle Woerter
const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

// Filtern von 6 oder weniger Zeichen
function filterKurzeWoerter(arr) {
  return arr.filter(function(woort) {
    return woort.length <= 6;
  });
}

// Ergebnis 
console.log("Ergebnis mit normaler Funktion:", filterKurzeWoerter(woerter));

// Arrow-Function,Filtert  Zeichenketten mit 6 oder weniger Zeichen!!!
const filterKurzeWoerterArrow = (arr) => arr.filter((woort) => woort.length <= 6);

// Aausgeben ergebnis mit "Arrow-Function" // 
console.log("Ergebnis mit Arrow-Function:", filterKurzeWoerterArrow(woerter));
