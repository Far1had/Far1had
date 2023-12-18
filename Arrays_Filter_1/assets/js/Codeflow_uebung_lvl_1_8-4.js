const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

console.log("Array liste:", heroArr);

function myHeros(arr) {
  return arr.filter((hero) => hero !== null && hero !== undefined);
}

const filteredHeroArr = myHeros(heroArr);

console.log("Array liste nach Filtern:", filteredHeroArr);

/*
Array liste: 
Array(12)
0
: 
"Superman"
1
: 
"Batman"
2
: 
undefined
4
: 
"Wonder Woman"
5
: 
"Spider-Man"
6
: 
"Black Widow"
7
: 
"Iron Man"
8
: 
"Thor"
9
: 
"Catwoman"
11
: 
null
length
: 
12
[[Prototype]]
: 
Array(0)
Codeflow_uebung_lvl_1_8-4.js:11 Array liste nach Filtern: 
Array(8)
0
: 
"Superman"
1
: 
"Batman"
2
: 
"Wonder Woman"
3
: 
"Spider-Man"
4
: 
"Black Widow"
5
: 
"Iron Man"
6
: 
"Thor"
7
: 
"Catwoman"
length
: 
8
*/
