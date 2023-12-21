function addElement() {
    // Eingabefeld und Liste abrufen
    let inputElement = document.getElementById('inputText');
    let list = document.getElementById('myList');

    // Eingabe prüfen
    let inputValue = inputElement.value; // Leerzeichen entfernen
    if (inputValue === '') {
        // Zeigt Meldung im Dokument an!
        errorMessage.textContent = 'Bitte geben Sie einen gültigen Wert ein.';
        return;
    }

    // Neues Listenelement erstellen
    let listItem = document.createElement('li');
    listItem.textContent = inputValue;

    // Listenelement zur Liste hinzufügen
    list.appendChild(listItem);

    // Eingabefeld leeren
    inputElement.value = '';
    errorMessage.textContent = '';
}
document.getElementById('inputText').addEventListener('keydown', function(event) {
    // Wenn die gedrückte Taste die Enter-Taste ist
    if (event.key === 'Enter') {
        // Führe die addElement-Funktion aus
        addElement();
    }
});