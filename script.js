var punktyKomp = 0;
var punktyGracz = 0;
var streak = 0;

function KompLosuje(player) {
    let wybory = ["Kamień", "Papier", "Nożyce"];
    let index = Math.floor(Math.random() * 3)
    wybor = wybory[index];
    document.getElementById("komp").innerHTML = "Komputer wybrał " + wybor;
    if (index == player) {document.getElementById("wynik").innerHTML = "Remis";}
    else if (index == 0 && player == 1 || index == 1 && player == 2 || index == 2 && player == 0) {document.getElementById("wynik").innerHTML = "<span class=\"green\">Wygrałeś</span>"; punktyGracz += 1; streak += 1;}
    else if (index == 1 && player == 0 || index == 2 && player == 1 || index == 0 && player == 2) {document.getElementById("wynik").innerHTML = "<span class=\"red\">Przegrałeś</span>"; punktyKomp += 1; streak = 0;}
    if (punktyGracz > punktyKomp) {document.getElementById("punkty").innerHTML = "<span class=\"green\">Wynik: " + punktyGracz + " - " + punktyKomp + "</span>";}
    else if (punktyGracz < punktyKomp) {document.getElementById("punkty").innerHTML = "<span class=\"red\">Wynik: " + punktyGracz + " - " + punktyKomp + "</span>";}
    else {document.getElementById("punkty").innerHTML = "Wynik: " + punktyGracz + " - " + punktyKomp;}
    if (streak >= 8) {document.getElementById("streak").innerHTML = "<span class = \"streak3\">Streak: " + streak + " <img src=\"fire-icon-png-26.jpg\" alt=\"Fire\" width=\"30px\"><img src=\"fire-icon-png-26.jpg\" alt=\"Fire\" width=\"30px\"><img src=\"fire-icon-png-26.jpg\" alt=\"Fire\" width=\"30px\"></span>";}
    else if (streak >= 5) {document.getElementById("streak").innerHTML = "<span class = \"streak2\">Streak: " + streak + " <img src=\"fire-icon-png-26.jpg\" alt=\"Fire\" width=\"30px\"><img src=\"fire-icon-png-26.jpg\" alt=\"Fire\" width=\"30px\"></span>";}
    else if (streak >= 3) {document.getElementById("streak").innerHTML = "<span class = \"streak1\">Streak: " + streak + " <img src=\"fire-icon-png-26.jpg\" alt=\"Fire\" width=\"30px\"></span>";}
    else {document.getElementById("streak").innerHTML = "Streak: " + streak;}
    
}

function kamien() {
    document.getElementById("player").innerHTML = "Wybrałeś Kamień";
    KompLosuje(0)
}
function papier() {
    document.getElementById("player").innerHTML = "Wybrałeś Papier";
    KompLosuje(1)
}
function nozyce() {
    document.getElementById("player").innerHTML = "Wybrałeś Nożyce";
    KompLosuje(2)
}