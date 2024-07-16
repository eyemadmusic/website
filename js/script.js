document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    const themeIcon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Actualizar el menú móvil
    const mobileNav = document.querySelector('.mobile-nav');
    if (document.body.classList.contains('light-mode')) {
        mobileNav.classList.add('light-mode');
    } else {
        mobileNav.classList.remove('light-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.style.display = 'flex';
    });
    
    closeBtn.addEventListener('click', function() {
        mobileNav.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var novedadesLink = document.getElementById("novedades-link");
    var novedadesDropdown = document.getElementById("novedades-dropdown");
    var novedadesLinkMobile = document.getElementById("novedades-link-mobile");
    var novedadesDropdownMobile = document.getElementById("novedades-dropdown-mobile");

    novedadesLink.addEventListener("click", function () {
        novedadesDropdown.style.display = novedadesDropdown.style.display === "block" ? "none" : "block";
    });

    novedadesLinkMobile.addEventListener("click", function () {
        novedadesDropdownMobile.style.display = novedadesDropdownMobile.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", function (e) {
        if (!e.target.matches('#novedades-link') && !e.target.matches('#novedades-link-mobile')) {
            if (novedadesDropdown.style.display === "block") {
                novedadesDropdown.style.display = "none";
            }
            if (novedadesDropdownMobile.style.display === "block") {
                novedadesDropdownMobile.style.display = "none";
            }
        }
    });
});

const themeToggle = document.getElementById('theme-toggle');
const logoImg = document.getElementById('logo-img');

function updateLogo() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    logoImg.src = isDarkMode ? 'transparent_png/white.png' : 'transparent_png/black.png';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateLogo();
});

document.addEventListener('DOMContentLoaded', () => {
    updateLogo();
});

