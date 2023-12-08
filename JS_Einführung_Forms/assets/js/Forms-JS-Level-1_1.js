function verdoppeln() {

    let inputValue = document.getElementById('num-id').value;
    let doubledValue = parseFloat(inputValue) * 2 || 0;

    document.getElementById('result').innerText = 'Das verdoppelte Ergebnis ist: ' + doubledValue;
}
