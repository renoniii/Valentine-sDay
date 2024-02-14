document.addEventListener('DOMContentLoaded', function() {
        var hamburger = document.querySelector(".hamburger");
        var navBar = document.querySelector(".navbar");
    
        hamburger.onclick = function() {
            navBar.classList.toggle("active");
        }
    });
    