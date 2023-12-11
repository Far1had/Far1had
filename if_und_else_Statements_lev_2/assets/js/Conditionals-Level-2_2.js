function checkQuality() {
    const sliderValue = document.getElementById("aqiSlider").value;

    const aqiValueText = document.getElementById("aqiValue");
    aqiValueText.textContent = `Luftqualität: ${sliderValue} (${getQuality(sliderValue)})`;

    const body = document.body;
    if (sliderValue <= 50) {
        body.style.backgroundColor = "green"; 
    } else if (sliderValue <= 100) {
        body.style.backgroundColor = "yellow"; 
    } else if (sliderValue <= 150) {
        body.style.backgroundColor = "orange"; 
    } else {
        body.style.backgroundColor = "red"; 
    }
}

function getQuality(aqiValue) {
    if (aqiValue <= 50) {
        return "Level of health concern: Good\nLevel of health effect: Little or no risk";
    } else if (aqiValue <= 100) {
        return "Level of health concern: Moderate\nLevel of health effect: Acceptable quality";
    } else if (aqiValue <= 150) {
        return "Level of health concern: Unhealthy for sensitive groups\nLevel of health effect: General public not likely affected";
    } else {
        return "Level of health concern: Hazardous\nLevel of health effect: Everyone may begin to experience health effects";
    }
}