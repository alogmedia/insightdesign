// Tilføj dette lige før </body> i dit eksisterende script
document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlayph");
    var openButton = document.querySelectorAll(".segraf");
    var closeButton = document.getElementById("closeOverlayph");
  
    openButton.forEach(function(button) {
      button.addEventListener("click", function() {
        console.log(String(button));
        if (button.Includes("phknap")){
            console.log("Sesam");
    } else {
        console.log("lort");
        return
    }
      });
    });
  
    closeButton.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
