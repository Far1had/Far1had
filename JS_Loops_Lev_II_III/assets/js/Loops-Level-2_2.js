function generateDynamicLoop() {
    // Eingabe aus dem Input-Feld abrufen
    let inputNumber = document.getElementById("inputNumber").value;

    // Überprüfen, ob die Eingabe eine gültige Zahl ist
    if (!isNaN(inputNumber) && inputNumber !== "") {
        // Dynamischen Loop erzeugen und in HTML ausgeben
        let loopWord = "L" + "o".repeat(inputNumber) + "p";

        // Ergebnis in HTML setzen
        document.getElementById("output").textContent = loopWord;
    } else {
        // Fehlermeldung anzeigen, wenn die Eingabe ungültig ist
        document.getElementById("output").textContent = "Ungültige Eingabe. Bitte eine Zahl eingeben.";
    }
}

