console.log("Sofie.js køre...");

document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.getElementById("overlaygraf");
    let overlayImage = overlay.querySelector("img");

    let openButton = document.querySelectorAll(".segraf, .segrafbund");
    let closeButton = document.getElementById("closeOverlaygraf");
  
    openButton.forEach(function(button) {
      button.addEventListener("click", function() {
          if (button.id.includes("phknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/phgraf.svg";
          } 
          else if (button.id.includes("luftknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/luftgraf.svg";
          }
          else if (button.id.includes("kuldioxidknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/kuldioxidgraf.svg";
          }
          else if (button.id.includes("vandknap")) {
            overlay.style.display = "block";
            overlayImage.src = "assets/images/grafer/vandgraf.svg";
          }
      });
    });
  
    closeButton.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
