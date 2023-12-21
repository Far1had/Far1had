document.addEventListener("DOMContentLoaded", function() {
    // Warte, bis das DOM geladen ist

    // Hol dir das Select-Element und den Paragraphen
    const mySelect = document.getElementById('mySelect');
    const outputParagraph = document.getElementById('output');

    // Füge einen Eventlistener für das Change-Event zum Select-Element hinzu
    mySelect.addEventListener('change', function(event) {
        // Aktualisiere den Text im Paragraphen mit dem ausgewählten Wert
        outputParagraph.textContent = 'Ausgewählte Option: ' + event.target.value;
    });
});
