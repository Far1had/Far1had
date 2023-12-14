const vorstellung = (vorname, nachname, geburtsort, alter, wohnort) => {
    const ergebnis = `Mein Name ist ${vorname} ${nachname}! Ich bin auf ${geburtsort} geboren. Ich bewache die Welt vor finsteren Mächten. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}`
    console.log(ergebnis);
}
vorstellung('Anja', 'Engels', 'Offenbach', '29', 'Frankfurt.')

const vorstellungsTabelle = (vorname, nachname, geburtsort, alter, wohnort) => {
    const ergebnis = `Mein Name ist ${vorname} ${nachname}!
    Ich bin auf ${geburtsort} geboren.
    Ich bewache die Welt vor finsteren Mächten.
    Ich bin ${alter} Jahre alt.
    Ich wohne in ${wohnort}`
    console.log(ergebnis);
}
vorstellungsTabelle('Ye', 'Ti', 'Himalaya', '510', 'Tibet.')