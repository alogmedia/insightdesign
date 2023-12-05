// Generer muligheder for stativnr. 1-999
const datalist = document.getElementById('stativnr-list');

for (let i = 1; i <= 999; i++) {
  const option = document.createElement('option');
  option.value = i;
  datalist.appendChild(option);
}

// Tilføjer event listener for inputtet
const input = document.getElementById('stativnr-input');

input.addEventListener('change', function(event) {
  const value = event.target.value;
  if (value >= 1 && value <= 999) {
    // Trigger et event når du vælger en værdi.
    console.log("Selected Stativnr:", value);
    // Add your event trigger code here
  }
});