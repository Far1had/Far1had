function changeColor() {
    // Überprüfe, ob die Hintergrundfarbe bereits "black" ist
    if (this.style.backgroundColor === "black") {
        // Wenn ja, setze die Hintergrundfarbe zurück (original) und die Textfarbe auf schwarz
        this.style.backgroundColor = "";
        this.style.color = "black";
    } else {
        // Wenn nein, setze die Hintergrundfarbe auf "black" und die Textfarbe auf weiß
        this.style.backgroundColor = "black";
        this.style.color = "white";
    }
}

const divStyles = document.querySelectorAll(".card");

divStyles.forEach(divStyle => {
    divStyle.addEventListener("click", changeColor);
});
