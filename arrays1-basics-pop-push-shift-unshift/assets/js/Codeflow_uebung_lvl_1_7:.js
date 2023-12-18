

let meinFriends = ["Tobi", "Tina", "Uli"]
console.log(meinFriends);

let unshiftMeinFriends = meinFriends.unshift("Peter", "Ali", "Ahmad")
console.log(unshiftMeinFriends);
console.log(meinFriends);


let myFavoriteFood = ["salat", "Bratwurst", "Döner"]
console.log(myFavoriteFood);

let unshiftmyFavoriteFood = myFavoriteFood.unshift("Lamacun", "KebabKubideh")
console.log(unshiftmyFavoriteFood);
console.log(myFavoriteFood);

/*
(3) ['Tobi', 'Tina', 'Uli']
Codeflow_uebung_lvl_1_7:.js:7 6
Codeflow_uebung_lvl_1_7:.js:8 
(6) ['Peter', 'Ali', 'Ahmad', 'Tobi', 'Tina', 'Uli']
Codeflow_uebung_lvl_1_7:.js:12 
(3) ['salat', 'Bratwurst', 'Döner']
Codeflow_uebung_lvl_1_7:.js:15 5
Codeflow_uebung_lvl_1_7:.js:16 
(5) ['Lamacun', 'KebabKubideh', 'salat', 'Bratwurst', 'Döner']
*/