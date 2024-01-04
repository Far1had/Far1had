document.addEventListener("DOMContentLoaded", function () {
    let count = 10;

    const countElement = document.getElementById("count");

    const intervalId = setInterval(function () {
        countElement.textContent = count;

        if (count === 0) {
            clearInterval(intervalId);
            
            // Füge eine CSS-Animation hinzu, um die Transparenz allmählich zu reduzieren
            countElement.parentElement.style.animation = "fadeOut 0.5s ease-out forwards";
            
            // Nach der Animation kannst du weitere Aktionen hinzufügen
            countElement.parentElement.addEventListener("animationend", function() {
                countElement.parentElement.style.display = "none";
                // Hier können weitere Aktionen ausgeführt werden, wenn das Element ausgeblendet ist
            });
        } else {
            count--; 
        }
    }, 1000); 
});
