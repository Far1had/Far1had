document.getElementById("btn").onclick = function () {
    let percent = 100;
    const zeitElement = document.querySelector(".zeit");

    const intervalId = setInterval(function () {
        zeitElement.textContent = percent + "%";

        if (percent === 0) {
            clearInterval(intervalId); 
        } else {
            percent--; 
        }
    }, 100); 
};
