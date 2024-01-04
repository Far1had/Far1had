function displayText() {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
  }
  
  function countdown() {
    let seconds = 10; 
    console.log("Start: Warten für 3 Sekunden..");
  
    const intervalId = setInterval(function() {
      if (seconds > 0) {
        if (seconds === 8) {
          displayText(); 
        }
        console.log(seconds);
        seconds--;
      } else {
        clearInterval(intervalId);
        console.log("Endlich Feierabend!");
      }
    }, 1000);
  }
  
  setTimeout(countdown, 3000);