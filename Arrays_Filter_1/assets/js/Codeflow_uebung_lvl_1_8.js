const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("10 Zahlen:", zahlen);

const geradeZahlen = (array) => {
  return array.filter((zahl) => zahl % 2 === 0);
};

const ungeradeZahlen = (array) => {
  return array.filter((zahl) => zahl % 2 !== 0);
};

console.log("Gerade Zahlen:", geradeZahlen(zahlen));
console.log("Ungerade Zahlen:", ungeradeZahlen(zahlen));



