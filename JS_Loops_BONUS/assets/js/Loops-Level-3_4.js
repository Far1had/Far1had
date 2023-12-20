function calculateSum() {
    // Eingaben abrufen
    let inputNumber = document.getElementById("inputNumber").value;
    let select1 = document.getElementById("select1").value;
    let select2 = document.getElementById("select2").value;

    // Überprüfen, ob das Input-Feld leer ist
    if (inputNumber === "") {
        document.getElementById("output").textContent = "Fehler: Bitte eine Nummer eingeben.";
        return;
    }

    // Überprüfen, ob beide select-Felder die gleiche Zahl ausgewählt haben
    if (select1 === select2) {
        document.getElementById("output").textContent = "Fehler: Bitte unterschiedliche Zahlen wählen.";
        return;
    }

    // Gesamtsumme initialisieren
    let sum = 0;

    // Überprüfen, ob die Zahl durch eine der ausgewählten Zahlen teilbar ist
    for (let i = 0; i <= inputNumber; i++) {
        if (i % select1 === 0 || i % select2 === 0) {
            sum += i;
        }
    }

    // Ergebnis in HTML setzen
    document.getElementById("output").textContent = "Gesamtsumme: " + sum;
}
