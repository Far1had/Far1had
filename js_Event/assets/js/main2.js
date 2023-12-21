// Hol  Button-Element mit getElementById
let button = document.getElementById('clickMe');

// sind die Klickanzahl im Local Storage vorhanden?
let count = localStorage.getItem('clickCount') || 0;

// Aktualisiere den Text des Buttons mit der gespeicherten Anzahl
button.innerHTML = 'Click me: ' + count;

// Schreibe eine Funktion, die den Klickzähler erhöht und die Anzahl auf dem Button aktualisiert
function increaseCount() {
    // Erhöhe die Anzahl um 1
    count++;

    // Speichere die neue Anzahl im Local Storage
    localStorage.setItem('clickCount', count);

    // Aktualisiere den Text des Buttons mit der neuen Anzahl
    button.innerHTML = 'Click me: ' + count;
}

// Füge einen Eventlistener zum Button hinzu, der die Funktion increaseCount aufruft
button.addEventListener('click', increaseCount);
