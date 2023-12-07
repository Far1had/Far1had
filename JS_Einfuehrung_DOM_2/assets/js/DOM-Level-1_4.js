document.getElementById('info').innerHTML = '<h1>Hello World</h1>' + '<h2>How are you?</h2>';
document.getElementById('container').innerHTML = '<p>start of the element</p>';


function displayText() {
    let userInput = document.getElementById('inputText').value;
    
    let existingText = document.getElementById('info').innerHTML;

    document.getElementById('info').innerHTML = existingText + '<p>Mensch: ' + userInput + '</p>';

    document.getElementById('info').innerHTML += '<h1>Hello h1</h1>';

    let currentDate = new Date();
    document.getElementById('info').innerHTML += '<p>Current Date: ' + currentDate + '</p>';
}
  