document.addEventListener('DOMContentLoaded', () => {
    const journeySection = document.querySelector('.viaje-culinario');
    const destacados = document.querySelectorAll('.destacado');

    // Parallax y efectos de scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const header = document.querySelector('.encabezado-gourmet');
        
        // Efecto parallax en header
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;

        // Efecto de rotación en sección de viaje culinario
        if (window.innerWidth > 1200) {
            const rotationFactor = Math.min(scrollPosition * 0.05, 10);
            journeySection.style.transform = `perspective(1000px) rotateX(${5 - rotationFactor}deg)`;
        }
    });

    // Animación de entrada para destacados
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    destacados.forEach(destacado => {
        observer.observe(destacado);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Nueva función para el menú desplegable
function toggleMenu() {
    const menuNav = document.querySelector('.menu-navegacion');
    const iconosNav = document.querySelector('.iconos-navegacion');
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const barIcon = menuHamburguesa.querySelector('.fa-bars');
    const timesIcon = menuHamburguesa.querySelector('.fa-times');
    
    menuNav.classList.toggle('active');
    iconosNav.classList.toggle('active');
    
    // Cambiar el ícono
    if (menuNav.classList.contains('active')) {
        barIcon.style.display = 'none';
        timesIcon.style.display = 'block';
    } else {
        barIcon.style.display = 'block';
        timesIcon.style.display = 'none';
    }
}

// Cerrar menú al hacer click en un enlace
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.enlace-navegacion').forEach(enlace => {
        enlace.addEventListener('click', () => {
            const menuNav = document.querySelector('.menu-navegacion');
            if (menuNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});
