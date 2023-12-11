// Tilføj dette lige før </body> i dit eksisterende script
document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlayph");
    var openButton = document.querySelectorAll(".segraf");
    var closeButton = document.getElementById("closeOverlayph");
  
    openButton.forEach(function(button) {
      button.addEventListener("click", function() {
        console.log(String(button));
          if (button.id.includes("phknap")) {
              overlay.style.display = "block"; // Assuming you want to show the overlay
              console.log("Sesam");
          } else {
              console.log("lort");
          }
      });
    });
  
    closeButton.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
