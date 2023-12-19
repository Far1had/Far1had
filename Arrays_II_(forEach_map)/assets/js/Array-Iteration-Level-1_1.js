function myDrinks() {
let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"
];
getraenke.sort()
console.log(getraenke);

getraenke.forEach((drink, index)=> {
    console.log(index + ": " + drink);
    document.write(index + ": " + drink + "<br>");
});
}
myDrinks()


/*
0: Apfelsaft
Array-Iteration-Level-1_1.js:14 1: Coca-Cola
Array-Iteration-Level-1_1.js:14 2: Fanta
Array-Iteration-Level-1_1.js:14 3: Orangensaft
Array-Iteration-Level-1_1.js:14 4: Pepsi
Array-Iteration-Level-1_1.js:14 5: Red Bull Energy Drink
Array-Iteration-Level-1_1.js:14 6: Sprite
Array-Iteration-Level-1_1.js:14 7: Traubensaft
*/





