document.addEventListener("DOMContentLoaded", function() {
    // Warte, bis das DOM geladen ist

    // Hol dir die Farb-Elemente und den Body
    const grauTaste = document.getElementById('grauTaste');
    const weissTaste = document.getElementById('weissTaste');
    const blauTaste = document.getElementById('blauTaste');
    const gelbTaste = document.getElementById('gelbTaste');
    const bodyElement = document.body;

    // Füge Eventlistener für das Click-Event zu den Farb-Elementen hinzu
    grauTaste.addEventListener('click', function() {
        // Ändere die Hintergrundfarbe des Body-Elements
        bodyElement.style.backgroundColor = 'gray';
        bodyElement.style.color = "white";
    });

    weissTaste.addEventListener('click', function() {
        bodyElement.style.backgroundColor = 'white';
        bodyElement.style.color = "";

    });

    blauTaste.addEventListener('click', function() {
        bodyElement.style.backgroundColor = 'blue';
        bodyElement.style.color = "white";
        
    });

    gelbTaste.addEventListener('click', function() {
        bodyElement.style.backgroundColor = 'yellow';
        bodyElement.style.color = "";

    });
});
