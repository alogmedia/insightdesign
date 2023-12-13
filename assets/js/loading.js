document.addEventListener("DOMContentLoaded", function() {
    var rammeContents = document.querySelectorAll('.ramme-content');

    rammeContents.forEach(function(rammeContent) {
        var originalContent = rammeContent.innerHTML;
        rammeContent.innerHTML = '';

        var loadingImage = document.createElement('img');
        loadingImage.src = 'assets/images/loading.gif';
        loadingImage.alt = 'Loading...';
        loadingImage.className = 'dataph';
        loadingImage.style.width = "20%";
        rammeContent.appendChild(loadingImage);

        setTimeout(function() {
            rammeContent.innerHTML = originalContent;
        }, Math.random() * 1000 + 1000); 
    });
});
