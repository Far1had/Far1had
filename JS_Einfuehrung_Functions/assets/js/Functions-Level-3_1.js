

function changeColors(bgColor, textColor) {
    let body = document.body;
    let title = document.getElementById('title');

    body.style.background = bgColor;
    title.style.color = textColor;

    //damit ich sehe was er macht & daten evl. in datenbank zu speichern!
    console.log(changeColors);
}

//ChangeColors ("red", "blue")
//changeColors ("red", "white")
//changeColors ("white", "red")

