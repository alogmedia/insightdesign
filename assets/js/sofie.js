console.log("Sofie.js køre...");

// Tilføj dette lige før </body> i dit eksisterende script
document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.getElementById("overlaygraf");
    let overlayImage = overlay.querySelector("img");
    let openButton = document.querySelectorAll(".segraf, .segrafbund");
    let closeButton = document.getElementById("closeOverlaygraf");
  
    openButton.forEach(function(button) {
      button.addEventListener("click", function() {
        console.log(String(button));
          if (button.id.includes("phknap")) {
            overlay.style.display = "block"; // Assuming you want to show the overlay
            overlayImage.src = "assets/images/grafer/phgraf.svg";
            console.log("phknap blev klikket på");
          } 
          else if (button.id.includes("luftknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/luftgraf.svg";
            console.log("luftknap blev klikket på");
          }
          else if (button.id.includes("kuldioxidknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/kuldioxidgraf.svg";
            console.log("kuldioxidknap blev klikket på");
          }
          else if (button.id.includes("vandknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/vandgraf.svg";
            console.log("vandknap blev klikket på");
          }
      });
    });
  
    closeButton.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
