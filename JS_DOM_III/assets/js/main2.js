let colorsChanged = false;

function myFunction() {
    let exampleElements = document.getElementsByClassName("example");

    if (colorsChanged) {
        // Ändere die Hintergrundfarbe zurück
        for (let i = 0; i < exampleElements.length; i++) {
            exampleElements[i].style.backgroundColor = "";
        }
    } else {
        // Ändere die Hintergrundfarbe auf Rot
        for (let i = 0; i < exampleElements.length; i++) {
            exampleElements[i].style.backgroundColor = "red";
        }
    }

    // Ändere den Status für den nächsten Klick
    colorsChanged = !colorsChanged;
}