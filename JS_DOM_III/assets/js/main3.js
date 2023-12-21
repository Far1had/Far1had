// Elemente mit querySelector auswählen.
let buttons = document.querySelectorAll('button');

// Eventlistener für jeden Button hinzufügen.
buttons.forEach(button => {
    //  Verwende addEventListener für den Klick-Event.
    button.addEventListener('click', handleClick);
});

//  Definiere eine Funktion, die den Klick-Event behandelt.
function handleClick(event) {
    //  Greife auf das <ul>-Element mit querySelector zu.
    let myList = document.querySelector('#myList');
    
    //  Verwende innerHTML, um den Inhalt eines Elements zu ändern.
    let output = document.querySelector('output');
    output.innerHTML = '';

    //  Nutze firstElementChild für das erste <li>-Element.
    let firstItem = myList.firstElementChild;
    output.innerHTML += `<p>${firstItem.textContent}</p>`;

    // Nutze lastElementChild für das letzte <li>-Element.
    let lastItem = myList.lastElementChild;
    output.innerHTML += `<p>${lastItem.textContent}</p>`;

    // Verwende nextElementSibling für das nächste Element.
    let nextItem = firstItem.nextElementSibling;
    output.innerHTML += `<p>${nextItem.textContent}</p>`;

    // Nutze previousElementSibling für das vorherige Element.
    let previousItem = lastItem.previousElementSibling;
    output.innerHTML += `<p>${previousItem.textContent}</p>`;
}
// Achte darauf, dass die Elemente nacheinander in der Liste ausgegeben werden.
