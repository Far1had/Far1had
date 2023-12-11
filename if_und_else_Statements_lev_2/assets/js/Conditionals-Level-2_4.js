function berechneUndAusgabeSumme(x, y) {
    let summe = x + y;

    if (x === y) {
        summe *= 5;
        console.log("Beide Zahlen sind gleich. Das Ergebnis ist: " + summe);
    } else {
        console.log("Die Summe der beiden Zahlen ist: " + summe);
    }
}

berechneUndAusgabeSumme(5, 5);

