function headShow() {
    let headShow = document.getElementById("headShow");
    headShow.classList.toggle("head-class");
}

function wishes() {
    let wishesElement = document.getElementById("wishes");
    wishesElement.classList.toggle("list-class");
}


function changeHeadline() {
    let headlineElement = document.getElementById("headShow");
    headlineElement.style.color = "blue";
    headlineElement.style.fontFamily = "sans-serif";
    headlineElement.style.fontSize = "2rem";
}

function resetHeadline() {
    let headlineElement = document.getElementById("headShow");
    headlineElement.style.color = ""; 
    headlineElement.style.fontFamily = "";
    headlineElement.style.fontSize = "";
}

function changeWishes() {
    let wishesElement = document.getElementById("wishes");
    wishesElement.style.color = "green";
    wishesElement.style.fontFamily = "sans-serif";
    wishesElement.style.fontSize = "1.5rem";
}

function resetWishes() {
    let wishesElement = document.getElementById("wishes");
    wishesElement.style.color = "";
    wishesElement.style.fontFamily = "";
    wishesElement.style.fontSize = "";
}
