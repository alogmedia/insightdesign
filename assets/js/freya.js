console.log("freya.js is running…");

// Variabler og typer
let tidsrammeDropdown = document.getElementById("tidsrammedropdown");
 
// Vis eller skjul indstillingsmenuen ved klik
let tidsrammeLink = document.getElementById("tidsrammeknap");
tidsrammeLink.addEventListener("click", function(event) {
    event.stopPropagation(); // Stop propagation for at undgå at lukke menuen med det samme
    if (tidsrammeDropdown.style.display === "block") {
        tidsrammeDropdown.style.display = "none";
    } else {
        tidsrammeDropdown.style.display = "block";
    }
});

// Luk indstillingsmenuen, når der klikkes uden for menuen
document.addEventListener("click", function() {
    tidsrammeDropdown.style.display = "none";
});

// Undgå at lukke menuen, når der klikkes inde i menuen
tidsrammeDropdown.addEventListener("click", function(event) {
    event.stopPropagation();
});

// array via const - variable
const dage = ["1 Dag", "1 Uge", "1 Måned", "3 Måneder", "6 Måneder", "1 år",];

// anden variable - kan ændres
let tekst = "";
dage.forEach(bygmenu); // loop
document.getElementById("tidsliste").innerHTML = tekst; // DOM

// funktion der kaldes hver gang i loopet
function bygmenu(value, index, array) { 
    tekst += "<li>" + value + "</li>"; 
}





