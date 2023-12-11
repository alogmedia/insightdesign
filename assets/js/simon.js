console.log("simon.js is running…");

let forslag = [];
for (let i = 1; i <= 60; i++) {
    forslag.push("Stativ nr. " + i);
}

// Henter HTML-elementer fra DOM'en ved at konvertere dem til variabler.
let search = document.querySelector(".search");
const input = search.querySelector("input");
const resultatboks = search.querySelector(".resultatboks");

// Gem listeelementerne i en variabel
let listen = [];

// Laver en event listener, som opstår ved indtastning i inputfelter
input.onkeyup = (e) => {
    let intastning = e.target.value;
    if (intastning) {
        emptyArray = forslag.filter((data) => {
            // Fjern "Stativ nr." og sammenlign kun med nummeret.
            return data.replace("Stativ nr. ", "").startsWith(intastning);
        });

        // Viser resultater i en vertikal liste
        emptyArray = emptyArray.map((data) => {
            return '<li class="forslag-listeelement">' + data + '</li>';
        });

        search.classList.add("active");
        showforslag(emptyArray);

        // Viser resultatboksen
        resultatboks.style.display = 'block'; // Eller anden ønsket display-stil
    } else {
        // Skjuler resultatboksen og tømmer inputfeltet, når det er tomt
        search.classList.remove("active");
        resultatboks.style.display = 'none';
        resultatboks.innerHTML = ''; // Tømmer resultatboksen
        input.value = ''; // Tømmer inputfeltet
    }
}

// Event listener for klik uden for søgefeltet
document.addEventListener('click', function(e) {
    // Tjek om klikket ikke er inden for søgefeltet
    if (!search.contains(e.target)) {
        // Skjuler resultatboksen og tømmer inputfeltet
        search.classList.remove("active");
        resultatboks.style.display = 'none';
        resultatboks.innerHTML = ''; // Tømmer resultatboksen
        input.value = ''; // Tømmer inputfeltet
    }
});

// Funktion for at vise forslag i resultatboksen.
function showforslag(list) {
    // Opdaterer indholdet af resultatboksen med de matchende forslag.
    resultatboks.innerHTML = list.join('');

    // Tilføj en event listener til hvert listeelement for hover-effekt og tryk-effekt
    listen = resultatboks.querySelectorAll("li");
    for (let i = 0; i < listen.length; i++) {
        listen[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "#D7EAD9"; // Skift farven efter behov
        });

        listen[i].addEventListener("mouseout", function() {
            this.style.backgroundColor = ""; // Nulstil farven ved hover-out
        });

        listen[i].addEventListener("mousedown", function() {
            this.style.backgroundColor = "#008559"; // Skift farven ved tryk
        });

        listen[i].addEventListener("mouseup", function() {
            this.style.backgroundColor = "#D7EAD9"; // Nulstil farven ved løft af tryk
        });

        listen[i].addEventListener("click", function() {
            select(this);
        });
    }
}

