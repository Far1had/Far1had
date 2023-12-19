let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
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

