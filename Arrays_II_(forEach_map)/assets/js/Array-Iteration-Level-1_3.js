let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const evenOdd = (mal2) => {
    // Verdopple die Zahlen im Array
    let dubble = mal2.map(num => num * 2);

    // Sortiere das verdoppelte Array
    dubble.sort((a, b) => a - b);

    // Gib jedes Element in einer eigenen Zeile aus
    dubble.forEach((dubbleNum, index) => {
        console.log(index + ": " + dubbleNum);
    });
}

evenOdd(array);

/*
0: 10
Array-Iteration-Level-1_3.js:14 1: 12
Array-Iteration-Level-1_3.js:14 2: 12
Array-Iteration-Level-1_3.js:14 3: 24
Array-Iteration-Level-1_3.js:14 4: 30
Array-Iteration-Level-1_3.js:14 5: 32
Array-Iteration-Level-1_3.js:14 6: 34
Array-Iteration-Level-1_3.js:14 7: 36
Array-Iteration-Level-1_3.js:14 8: 40
Array-Iteration-Level-1_3.js:14 9: 52
Array-Iteration-Level-1_3.js:14 10: 54
Array-Iteration-Level-1_3.js:14 11: 54
Array-Iteration-Level-1_3.js:14 12: 56
Array-Iteration-Level-1_3.js:14 13: 60
Array-Iteration-Level-1_3.js:14 14: 62
Array-Iteration-Level-1_3.js:14 15: 68
Array-Iteration-Level-1_3.js:14 16: 76
Array-Iteration-Level-1_3.js:14 17: 84
Array-Iteration-Level-1_3.js:14 18: 94
Array-Iteration-Level-1_3.js:14 19: 102
Array-Iteration-Level-1_3.js:14 20: 102
Array-Iteration-Level-1_3.js:14 21: 112
Array-Iteration-Level-1_3.js:14 22: 122
Array-Iteration-Level-1_3.js:14 23: 136
Array-Iteration-Level-1_3.js:14 24: 142
Array-Iteration-Level-1_3.js:14 25: 146
Array-Iteration-Level-1_3.js:14 26: 148
Array-Iteration-Level-1_3.js:14 27: 156
Array-Iteration-Level-1_3.js:14 28: 160
Array-Iteration-Level-1_3.js:14 29: 182
Array-Iteration-Level-1_3.js:14 30: 184
Array-Iteration-Level-1_3.js:14 31: 190
Array-Iteration-Level-1_3.js:14 32: 194
Array-Iteration-Level-1_3.js:14 33: 198
Array-Iteration-Level-1_3.js:14 34: 200
*/



