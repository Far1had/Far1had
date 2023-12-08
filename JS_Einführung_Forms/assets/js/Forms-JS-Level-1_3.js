function chinchin() {

    let eingabeWert = document.getElementById('eingabe').value;
    let eingabeWert2 = document.getElementById('eingabe2').value;
    
    const rechne = eingabeWert - eingabeWert2;

    document.getElementById('result').innerText = rechne;
}
