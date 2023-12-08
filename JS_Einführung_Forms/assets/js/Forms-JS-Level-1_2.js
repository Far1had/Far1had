function chinchin() {

    let eingabeWert = document.getElementById('bday').value;
    const aktuellesJahr = new Date().getFullYear();
    const rechne = aktuellesJahr - eingabeWert;

    document.getElementById('result').innerText = 'Gerne, Du bist erst ' + rechne + ' Jahre jung. <3 :-)';
}

