function verdoppeln() {

    let eingabeWert = document.getElementById('eingabe-id').value;
    const doppeln = eingabeWert * 2;

    document.getElementById('result').innerText = 'Ergebnis: ---> ' + doppeln;
}
