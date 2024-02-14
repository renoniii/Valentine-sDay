document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('noButton').addEventListener('click', function() {
        var yesButton = document.querySelector('button[onclick*="form.html"]');
        var currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentFontSize + 10) + 'px'; // Aumenta el tamaño de fuente en 10px
    });
});
