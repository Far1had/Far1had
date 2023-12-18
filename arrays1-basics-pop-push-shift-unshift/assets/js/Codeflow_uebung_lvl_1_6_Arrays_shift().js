let person = ["Farhad", 51, 183]
let friends = ["Tobi", "Tina", "Uli"]
let favoriteFood = ["salat", "Bratwurst", "Döner"]

let meinDaten = ["Farhad", 51, 183]
console.log(meinDaten);
console.log(meinDaten);
let pushmeinDaten = meinDaten.push(true, "schwarz")
console.log(pushmeinDaten);


console.log(meinDaten);

let meinFriends = ["Tobi", "Tina", "Uli"]
console.log(meinFriends);

let pushmeinFriends = meinFriends.push("Peter", "Ali", "Ahmad")
console.log(pushmeinFriends);
console.log(meinFriends);

//-------------------shift()-------------------------------//

let shiftmeinDaten = meinDaten.shift();
console.log(shiftmeinDaten);
console.log(meinDaten);

let firstWert = meinDaten.shift()
console.log(firstWert);
console.log(meinDaten);
console.log(firstWert);
console.log(meinDaten);


let shiftmeinFriends = meinFriends.shift();
console.log(shiftmeinFriends);
console.log(meinFriends);

let firstFriend = meinFriends.shift()
console.log(firstFriend);
console.log(meinFriends);
console.log(firstFriend);
console.log(meinFriends);


/*
(3) ['Farhad', 51, 183]
Codeflow_uebung_lvl_1_6_Arrays_shift().js:7 (3) ['Farhad', 51, 183]
Codeflow_uebung_lvl_1_6_Arrays_shift().js:9 5
Codeflow_uebung_lvl_1_6_Arrays_shift().js:12 (5) ['Farhad', 51, 183, true, 'schwarz']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:15 (3) ['Tobi', 'Tina', 'Uli']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:18 6
Codeflow_uebung_lvl_1_6_Arrays_shift().js:19 (6) ['Tobi', 'Tina', 'Uli', 'Peter', 'Ali', 'Ahmad']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:24 Farhad
Codeflow_uebung_lvl_1_6_Arrays_shift().js:25 (4) [51, 183, true, 'schwarz']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:28 51
Codeflow_uebung_lvl_1_6_Arrays_shift().js:29 (3) [183, true, 'schwarz']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:30 51
Codeflow_uebung_lvl_1_6_Arrays_shift().js:31 (3) [183, true, 'schwarz']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:35 Tobi
Codeflow_uebung_lvl_1_6_Arrays_shift().js:36 (5) ['Tina', 'Uli', 'Peter', 'Ali', 'Ahmad']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:39 Tina
Codeflow_uebung_lvl_1_6_Arrays_shift().js:40 (4) ['Uli', 'Peter', 'Ali', 'Ahmad']
Codeflow_uebung_lvl_1_6_Arrays_shift().js:41 Tina
Codeflow_uebung_lvl_1_6_Arrays_shift().js:42 (4) ['Uli', 'Peter', 'Ali', 'Ahmad']
*/



