// Funktion definieren
function imageArray() {
    // Wandelt zu Array
    let returnArray = [];

    // for-Aktion zum Erstellen der Dateinamen index und Hinzufügen zum Array
    for (let i = 1; i <= 100; i++) {
        let dateiName;

        // Bedingungen für Nummerierung der Dateinamen
        if (i < 10) {
            dateiName = "image_00" + i + ".jpg";
        } else if (i < 100) {
            dateiName = "image_0" + i + ".jpg";
        } else {
            dateiName = "image_" + i + ".jpg";
        }

        // Dateiname zum Array hinzufügen
        returnArray.push(dateiName);
    }

    // Array in der Konsole ausgeben
    console.log(returnArray);
}

// Funktion aufrufen
imageArray();


// 0
// : 
// "image_001.jpg"
// 1
// : 
// "image_002.jpg"
// 2
// : 
// "image_003.jpg"
// 3
// : 
// "image_004.jpg"
// 4
// : 
// "image_005.jpg"
// 5
// : 
// "image_006.jpg"
// 6
// : 
// "image_007.jpg"
// 7
// : 
// "image_008.jpg"
// 8
// : 
// "image_009.jpg"
// 9
// : 
// "image_010.jpg"
// 10
// : 
// "image_011.jpg"
// 11
// : 
// "image_012.jpg"
// 12
// : 
// "image_013.jpg"
// 13
// : 
// "image_014.jpg"
// 14
// : 
// "image_015.jpg"
// 15
// : 
// "image_016.jpg"
// 16
// : 
// "image_017.jpg"
// 17
// : 
// "image_018.jpg"
// 18
// : 
// "image_019.jpg"
// 19
// : 
// "image_020.jpg"
// 20
// : 
// "image_021.jpg"
// 21
// : 
// "image_022.jpg"
// 22
// : 
// "image_023.jpg"
// 23
// : 
// "image_024.jpg"
// 24
// : 
// "image_025.jpg"
// 25
// : 
// "image_026.jpg"
// 26
// : 
// "image_027.jpg"
// 27
// : 
// "image_028.jpg"
// 28
// : 
// "image_029.jpg"
// 29
// : 
// "image_030.jpg"
// 30
// : 
// "image_031.jpg"
// 31
// : 
// "image_032.jpg"
// 32
// : 
// "image_033.jpg"
// 33
// : 
// "image_034.jpg"
// 34
// : 
// "image_035.jpg"
// 35
// : 
// "image_036.jpg"
// 36
// : 
// "image_037.jpg"
// 37
// : 
// "image_038.jpg"
// 38
// : 
// "image_039.jpg"
// 39
// : 
// "image_040.jpg"
// 40
// : 
// "image_041.jpg"
// 41
// : 
// "image_042.jpg"
// 42
// : 
// "image_043.jpg"
// 43
// : 
// "image_044.jpg"
// 44
// : 
// "image_045.jpg"
// 45
// : 
// "image_046.jpg"
// 46
// : 
// "image_047.jpg"
// 47
// : 
// "image_048.jpg"
// 48
// : 
// "image_049.jpg"
// 49
// : 
// "image_050.jpg"
// 50
// : 
// "image_051.jpg"
// 51
// : 
// "image_052.jpg"
// 52
// : 
// "image_053.jpg"
// 53
// : 
// "image_054.jpg"
// 54
// : 
// "image_055.jpg"
// 55
// : 
// "image_056.jpg"
// 56
// : 
// "image_057.jpg"
// 57
// : 
// "image_058.jpg"
// 58
// : 
// "image_059.jpg"
// 59
// : 
// "image_060.jpg"
// 60
// : 
// "image_061.jpg"
// 61
// : 
// "image_062.jpg"
// 62
// : 
// "image_063.jpg"
// 63
// : 
// "image_064.jpg"
// 64
// : 
// "image_065.jpg"
// 65
// : 
// "image_066.jpg"
// 66
// : 
// "image_067.jpg"
// 67
// : 
// "image_068.jpg"
// 68
// : 
// "image_069.jpg"
// 69
// : 
// "image_070.jpg"
// 70
// : 
// "image_071.jpg"
// 71
// : 
// "image_072.jpg"
// 72
// : 
// "image_073.jpg"
// 73
// : 
// "image_074.jpg"
// 74
// : 
// "image_075.jpg"
// 75
// : 
// "image_076.jpg"
// 76
// : 
// "image_077.jpg"
// 77
// : 
// "image_078.jpg"
// 78
// : 
// "image_079.jpg"
// 79
// : 
// "image_080.jpg"
// 80
// : 
// "image_081.jpg"
// 81
// : 
// "image_082.jpg"
// 82
// : 
// "image_083.jpg"
// 83
// : 
// "image_084.jpg"
// 84
// : 
// "image_085.jpg"
// 85
// : 
// "image_086.jpg"
// 86
// : 
// "image_087.jpg"
// 87
// : 
// "image_088.jpg"
// 88
// : 
// "image_089.jpg"
// 89
// : 
// "image_090.jpg"
// 90
// : 
// "image_091.jpg"
// 91
// : 
// "image_092.jpg"
// 92
// : 
// "image_093.jpg"
// 93
// : 
// "image_094.jpg"
// 94
// : 
// "image_095.jpg"
// 95
// : 
// "image_096.jpg"
// 96
// : 
// "image_097.jpg"
// 97
// : 
// "image_098.jpg"
// 98
// : 
// "image_099.jpg"
// 99
// : 
// "image_100.jpg"
// length
// : 
// 100