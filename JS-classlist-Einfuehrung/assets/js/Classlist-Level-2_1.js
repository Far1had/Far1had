function headShow() {
    let headShow = document.getElementById("headShow");
    headShow.classList.toggle("head-class");
}

function changeHeadline() {
    let headlineElement = document.getElementById("headShow");
    headlineElement.classList.toggle("head-class");

}

function resetHeadline() {
    let headlineElement = document.getElementById("headShow");
    headlineElement.classList.remove("head-class");
}

function changeWishes() {
    let wishesElement = document.getElementById("wishes");
    wishesElement.classList.toggle("list-class");
}

function resetWishes() {
    let wishesElement = document.getElementById("wishes");
    wishesElement.classList.remove("list-class");
}
