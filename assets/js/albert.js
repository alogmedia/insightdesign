//Variabler
let overlayalert = document.getElementById("overlayalert");
let overlayalertImage = overlayalert.querySelector("img");
let closeButton = document.getElementById("closeOverlayalert");


// Funktion for at få temperatur
function getTemperatureText() {
  // h3
  const h3Elements = document.querySelectorAll('.ramme-content h3');
  
  // find temperatur
  for (let h3 of h3Elements) {
    if (h3.textContent.includes("Temperatur")) {
      // Get the next sibling element, which should be the <p> with the temperature
      return h3.nextElementSibling.textContent;
    }
  }

  return null; // hvis ingen temperatur er fundet
}

function checkValues() {
  // variable for max
  const temperatureLimit = 40;
  
  // Temperatur fra DOM
  const temperatureText = getTemperatureText();
  
  if (temperatureText) {
    // Fjern symbol for at konvertere til nummer.
    const temperature = parseFloat(temperatureText.replace('°', ''));
    
    // Se om temperatur er godkendt.
    if (temperature > temperatureLimit) {
      console.log(temperature);
      overlayalert.style.display = "block"; // Assuming you want to show the overlay
      overlayalert.querySelector("h2").textContent = "Advarsel - " + temperature + "°"; 
      overlayalert.querySelector("p").textContent = "temperaturen er for høj!!";
      overlayalertImage.src = "assets/images/alert.png";
      console.log("alert blev åbnet");
    }
  }
  
  closeButton.addEventListener("click", function() {
    overlayalert.style.display = "none";
  });
}


setInterval(checkValues, 5000); // 5 sekunder
