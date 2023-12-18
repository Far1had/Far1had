let person = ["Farhad", 51, 183]
let friends = ["Tobi", "Tina", "Uli"]
let favoriteFood = ["salat", "Bratwurst", "Döner"]

let meinDaten = ["Farhad", 51, 183]
console.log(meinDaten);
console.log(meinDaten);
let pushmeinDaten = meinDaten.push(true, "schwarz")
console.log(pushmeinDaten);

console.log(meinDaten);

let popmeinDaten = meinDaten.pop()
console.log(popmeinDaten);
console.log(meinDaten);

let lastValue = meinDaten.pop();
console.log(meinDaten);

console.log(lastValue);
console.log(meinDaten);

let meinFriends = ["Tobi", "Tina", "Uli"]
console.log(meinFriends);

let pushmeinFriends = meinFriends.push("Peter", "Ali", "Ahmad")
console.log(pushmeinFriends);
console.log(meinFriends);

let popmeinFriends = meinFriends.pop()
console.log(popmeinFriends);
console.log(meinFriends);

let lastFriend = meinFriends.pop();
console.log(lastFriend);
console.log(meinFriends);
console.log(lastFriend);
console.log(meinFriends);


/*
lev1_5_Arrays_pop().js:6 (3) ['Farhad', 51, 183]
lev1_5_Arrays_pop().js:7 (3) ['Farhad', 51, 183]
lev1_5_Arrays_pop().js:9 5
lev1_5_Arrays_pop().js:11 (5) ['Farhad', 51, 183, true, 'schwarz']
lev1_5_Arrays_pop().js:14 schwarz
lev1_5_Arrays_pop().js:15 (4) ['Farhad', 51, 183, true]
lev1_5_Arrays_pop().js:18 (3) ['Farhad', 51, 183]
lev1_5_Arrays_pop().js:20 true
lev1_5_Arrays_pop().js:21 (3) ['Farhad', 51, 183]
lev1_5_Arrays_pop().js:24 (3) ['Tobi', 'Tina', 'Uli']
lev1_5_Arrays_pop().js:27 6
lev1_5_Arrays_pop().js:28 (6) ['Tobi', 'Tina', 'Uli', 'Peter', 'Ali', 'Ahmad']
lev1_5_Arrays_pop().js:31 Ahmad
lev1_5_Arrays_pop().js:32 (5) ['Tobi', 'Tina', 'Uli', 'Peter', 'Ali']
lev1_5_Arrays_pop().js:35 Ali
lev1_5_Arrays_pop().js:36 (4) ['Tobi', 'Tina', 'Uli', 'Peter']
lev1_5_Arrays_pop().js:37 Ali
lev1_5_Arrays_pop().js:38 (4) ['Tobi', 'Tina', 'Uli', 'Peter']
*/