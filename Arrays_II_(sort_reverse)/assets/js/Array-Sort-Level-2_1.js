const umgedrehterString = (para) => {
  let splitStr = para.split("")
  let reverseStr = splitStr.reverse()

  let joinStr = reverseStr.join("")
  return joinStr
}

console.log(umgedrehterString("Sergio"))
console.log(umgedrehterString("Hanna"))
console.log(umgedrehterString("Regallager"))
console.log(umgedrehterString("Reliefpfeiler"))
console.log(umgedrehterString("Rentner"))
console.log(umgedrehterString("Ella mag alle Bohnen"))
console.log(umgedrehterString("han nesaH has ennaH"))

/*
oigreS
Array-Sort-Level-2_1.js:21 annaH
Array-Sort-Level-2_1.js:22 regallageR
Array-Sort-Level-2_1.js:23 reliefpfeileR
Array-Sort-Level-2_1.js:24 rentneR
Array-Sort-Level-2_1.js:25 nenhoB ella gam allE
Array-Sort-Level-2_1.js:26 Hanne sah Hasen nah
*/



