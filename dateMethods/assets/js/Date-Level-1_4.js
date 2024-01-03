function tageImMonat(monat, jahr) {
    const ersterTagDesMonats = new Date(jahr, monat -1, 1);
    const letzterTagDesMonats = new Date(jahr, monat, 0);

    return letzterTagDesMonats.getDate();
}

console.log(tageImMonat(1,2016)); // 31
console.log(tageImMonat(2, 2016)); // 29 (Schaltjahr)
console.log(tageImMonat(2, 2017)); // 28
console.log(tageImMonat(12, 2017)); // 31
