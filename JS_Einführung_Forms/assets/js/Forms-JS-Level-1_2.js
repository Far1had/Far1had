function chinchin() {

    let eingabeWert = document.getElementById('bday').value;
    const aktuellesJahr = new Date().getFullYear();
    const doppeln = aktuellesJahr - eingabeWert;

    document.getElementById('result').innerText = 'Du bist erst ' + doppeln + ' Jahre jung. <3';
}

