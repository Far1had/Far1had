
const date1 = new Date("September 2, 2019 09:00:00");
        const date2 = new Date(0);
        const date3 = new Date(31556908800);
        const date4 = new Date(86400000);

        // Ergebnisse im HTML darstellen
        document.getElementById('output').innerHTML =
        `<main> <div>
            <p>Date 1: ${date1}</p> 
            <p>Date 2: ${date2}</p> 
            <p>Date 3: ${date3}</p> 
            <p>Date 4: ${date4}</p>
            </div> </main>`