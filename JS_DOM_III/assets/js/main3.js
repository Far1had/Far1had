// Tipp 1: Elemente mit querySelector auswählen.
let buttons = document.querySelectorAll('button');

// Tipp 2: Eventlistener für jeden Button hinzufügen.
buttons.forEach(button => {
    // Tipp 3: Verwende addEventListener für den Klick-Event.
    button.addEventListener('click', handleClick);
});

// Tipp 4: Definiere eine Funktion, die den Klick-Event behandelt.
function handleClick(event) {
    // Tipp 6: Greife auf das <ul>-Element mit querySelector zu.
    let myList = document.querySelector('#myList');
    
    // Tipp 5: Verwende innerHTML, um den Inhalt eines Elements zu ändern.
    let output = document.querySelector('output');
    output.innerHTML = '';

    // Tipp 7: Nutze firstElementChild für das erste <li>-Element.
    let firstItem = myList.firstElementChild;
    output.innerHTML += `<p>${firstItem.textContent}</p>`;

    // Tipp 8: Nutze lastElementChild für das letzte <li>-Element.
    let lastItem = myList.lastElementChild;
    output.innerHTML += `<p>${lastItem.textContent}</p>`;

    // Tipp 9: Verwende nextElementSibling für das nächste Element.
    let nextItem = firstItem.nextElementSibling;
    output.innerHTML += `<p>${nextItem.textContent}</p>`;

    // Tipp 10: Nutze previousElementSibling für das vorherige Element.
    let previousItem = lastItem.previousElementSibling;
    output.innerHTML += `<p>${previousItem.textContent}</p>`;
}
// Tipp 11: Achte darauf, dass die Elemente nacheinander in der Liste ausgegeben werden.
