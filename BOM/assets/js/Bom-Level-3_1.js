let catElement = document.getElementById("cat");
let intervalId;
let isWalking = false;
let direction = 1; 
let speed = 6; 

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
    speed = newSpeed;
}
