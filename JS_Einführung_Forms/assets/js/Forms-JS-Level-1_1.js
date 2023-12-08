function verdoppeln() {

    var inputValue = document.getElementById('num-id').value;
    var doubledValue = parseFloat(inputValue) * 2 || 0;

    document.getElementById('result').innerText = 'Das verdoppelte Ergebnis ist: ' + doubledValue;
}
