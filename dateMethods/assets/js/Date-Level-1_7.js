function wochenendeOderArbeitstag(datumEingabeString) {
    const datum = new Date(datumEingabeString);
    const tag = datum.getDay();

     if (tag === 0 || tag === 6) {
        return "Wochenende";
    } else {
        return "Arbeitstag";
    }
}

console.log(wochenendeOderArbeitstag("12.15.2019")); // Wochenende
console.log(wochenendeOderArbeitstag("2.16.2001")); // Arbeitstag
console.log(wochenendeOderArbeitstag("2.1.2020")); // Wochenende
console.log(wochenendeOderArbeitstag("2.29.2020")); // Wochenende
