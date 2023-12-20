function generateDynamicLoop() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!isNaN(inputNumber) && inputNumber !== "") {
        let num = parseInt(inputNumber, 10);
        if (num === 0) {
            document.getElementById("output").textContent = "Fehler: Die Eingabe darf nicht 0 sein.";
            return;
        }

        let loopWord = "L";
        for (let i = 0; i < num; i++) {
            if (num % 2 === 0) {
                loopWord += "o";
            } else {
                loopWord += i % 2 === 0 ? "o" : "0";
            }
        }
        loopWord += "p";

        // Ergebnis in HTML setzen
        document.getElementById("output").textContent = loopWord;
    } else {
        // Fehlermeldung anzeigen, wenn die Eingabe ungültig ist
        document.getElementById("output").textContent = "Ungültige Eingabe. Bitte eine Zahl eingeben.";
    }
}

