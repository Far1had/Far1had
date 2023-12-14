function calculate() {
    // Holen Sie sich die eingegebenen Werte
    let heightInput = document.getElementById('inputnumber').value;
    let ageInput = document.getElementById('inputage').value;
    let isWide = document.getElementById('wide').checked;
  
    // Validierung der Höhe mit if und else
    let height;
    if (heightInput === '') {
      alert('Bitte geben Sie eine Höhe ein.');
      return;
    } else if (isNaN(heightInput)) {
      alert('Die Höhe muss eine Zahl sein.');
      return;
    } else {
      height = parseFloat(heightInput);
    }
  
    // Validierung des Alters mit if und else
    let age;
    if (ageInput === '') {
      alert('Bitte geben Sie ein Alter ein.');
      return;
    } else if (isNaN(ageInput)) {
      alert('Das Alter muss eine Zahl sein.');
      return;
    } else {
      age = parseInt(ageInput);
    }
  
    // Berechnung des Idealgewichts mit if und else
    let idealWeight;
    if (isWide) {
      idealWeight = ((height - 100) + (age / 10)) * 0.9 * 1.1;
    } else {
      idealWeight = ((height - 100) + (age / 10)) * 0.9 * 0.9;
    }
  
    // Ausgabe des Ergebnisses
    alert('Ihr Idealgewicht beträgt: ' + idealWeight.toFixed(2) + ' kg');
  }