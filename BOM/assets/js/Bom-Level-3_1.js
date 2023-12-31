let catElement = document.getElementById("cat");
let intervalId;
let isWalking = false;
let direction = 1; 
let speed = 1; 

function catWalk() {
    if (!isWalking) {
        isWalking = true;
        intervalId = setInterval(function () {
            let currentPosition = catElement.offsetLeft;
            let windowWidth = window.innerWidth;
            let catWidth = catElement.clientWidth;

            currentPosition += direction * speed;

            if (currentPosition + catWidth >= windowWidth || currentPosition <= 0) {
                turn();
            }

            catElement.style.left = currentPosition + "px";
        }, 16); 
    }
}

function turn() {
    direction *= -1; 

   catElement.style.transform = direction === -1 ? "scaleX(-1)" : "scaleX(1)";
}

function pause() {
    clearInterval(intervalId);
    isWalking = false;
}

function catSpeed() {
    speed += 2; 
}


function changeSpeed(newSpeed) {
    // Überprüfe, ob die neue Geschwindigkeit kleiner als 1 ist
    if (newSpeed > 1) {
        // Setze die Geschwindigkeit auf 1, wenn sie kleiner als 1 ist
        speed = 1;
    } else {
        // Andernfalls setze die Geschwindigkeit auf den angegebenen Wert
        speed = newSpeed;
    }
}
