document.addEventListener("DOMContentLoaded", () => {
    let count = 10;
    const countElement = document.getElementById("count");

    const intervalId = setInterval(() => {
        countElement.textContent = count;

        if (count === 0) {
            clearInterval(intervalId);

            countElement.parentElement.style.animation = "fadeOut 0.5s ease-out forwards";
            countElement.parentElement.addEventListener("animationend", () => {
                countElement.parentElement.style.display = "none";
            });
        } else {
            count--;
        }
    }, 1000);
});
