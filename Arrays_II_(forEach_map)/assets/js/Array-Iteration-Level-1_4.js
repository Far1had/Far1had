let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const temWandler = (pet) => {
    let umrechner = pet.map(fahrenHeit => Math.round((fahrenHeit - 32) / 1.8));
    console.log(umrechner);

    umrechner.forEach(dubbleNum => {
        console.log("celsius: " + dubbleNum);

    });
}

temWandler(fahrenheit);

/*
0: -181: 02: 73: 104: 245: 276: 377: 49length: 8[[Prototype]]: Array(0)
Array-Iteration-Level-1_4.js:9 celsius: -18
Array-Iteration-Level-1_4.js:9 celsius: 0
Array-Iteration-Level-1_4.js:9 celsius: 7
Array-Iteration-Level-1_4.js:9 celsius: 10
Array-Iteration-Level-1_4.js:9 celsius: 24
Array-Iteration-Level-1_4.js:9 celsius: 27
Array-Iteration-Level-1_4.js:9 celsius: 37
Array-Iteration-Level-1_4.js:9 celsius: 49
*/

