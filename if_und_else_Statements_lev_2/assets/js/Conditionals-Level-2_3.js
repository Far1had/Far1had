function findDifference(zahl) {
    const mainNum = 27;
    let difference = zahl - mainNum;

    if (difference > 27) {
        console.log("Ergebnis: " + difference * 2);
    } else {
        console.log("Kein Handlungsbedarf, X <27: " + difference);
    }
}


findDifference(123)

// 35 : Kein Handlungsbedarf, X <27: 8
// 74: Ergebnis: 94
// 123: Ergebnis: 192
//