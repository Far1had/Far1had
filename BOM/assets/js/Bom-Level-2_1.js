document.addEventListener("DOMContentLoaded", function () {
    let count = 10;

    const countElement = document.getElementById("count");

    const intervalId = setInterval(function () {
        countElement.textContent = count;

        if (count === 0) {
            clearInterval(intervalId);
            countElement.parentElement.style.display = "none";
        } else {
            count--; 
        }
    }, 1000); 
});
