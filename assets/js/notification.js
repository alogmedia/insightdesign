function getTemperatureText() {
  // Get all h3 elements in .ramme-content elements
  const h3Elements = document.querySelectorAll('.ramme-content h3');
  
  // Iterate through them to find one that contains "Temperatur"
  for (let h3 of h3Elements) {
    if (h3.textContent.includes("Temperatur")) {
      // Get the next sibling element, which should be the <p> with the temperature
      return h3.nextElementSibling.textContent;
    }
  }

  return null; // If "Temperatur" was not found
}

function checkValues() {
  // Define your limits
  const temperatureLimit = 40;
  
  // Get the current temperature value from the DOM
  const temperatureText = getTemperatureText();
  
  if (temperatureText) {
    // Remove the '°' character and convert to a number
    const temperature = parseFloat(temperatureText.replace('°', ''));
    
    // Check if the temperature exceeds the limit
    if (temperature > temperatureLimit) {
      console.log(temperature);
      alert('Temperaturen er for høj!!');
    }
  }
  
  // ... implement other checks ...
}

// Run the checkValues function at regular intervals
setInterval(checkValues, 5000); // Checks every 5 minutes
