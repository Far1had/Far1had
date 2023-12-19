let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
    "DOG"
];

const bearbeiteDateinamen = (albumArray) => {
    let bearbeitetesAlbum = albumArray.map((dateiname) => {
        let punktIndex = dateiname.lastIndexOf('.');
        
        if (punktIndex !== -1) {
            let dateinameOhneErweiterung = dateiname.substring(0, punktIndex).toLowerCase();
            return dateinameOhneErweiterung;
        } else {
            return "invalid";
        }
    });
    return bearbeitetesAlbum;
};

let bearbeitetesAlbumArray = bearbeiteDateinamen(album);
console.log(bearbeitetesAlbumArray);


/*
 ['holidays', 'restaurant', 'invalid', 'rooms', 'dogatbeach', 'invalid']
0
: 
"holidays"
1
: 
"restaurant"
2
: 
"invalid"
3
: 
"rooms"
4
: 
"dogatbeach"
5
: 
"invalid"
length
: 
6
[[Prototype]]
: 
Array(0)
*/
