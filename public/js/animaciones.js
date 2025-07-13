class DishCarousel {
    constructor() {
        this.dishes = [
            { 
                title: {
                    first: 'POLLO',
                    second: 'RELLENO'
                },
                image: 'img/Platillo/platillo5.jpg'
            },
            {
                title: {
                    first: 'CARNE',
                    second: 'A LA BRASA'
                },
                image: 'img/Platillo/platillo1.jpg'
            },
            {
                title: {
                    first: 'POLLO',
                    second: 'AL ESPIEDO'
                },
                image: 'img/Platillo/platillo2.jpg'
            },
            {
                title: {
                    first: 'CARNE',
                    second: 'CON PIÑA'
                },
                image: 'img/Platillo/platillo3.jpg'
            },
            {
                title: {
                    first: 'FLAN',
                    second: 'FRANCESA'
                },
                image: 'img/Platillo/platillo4.jpg'
            }
        ];
        
        this.currentIndex = 0;
        this.isTransitioning = false;
        this.setupCarousel();
        this.startAutoPlay();
    }

    setupCarousel() {
        this.titleElement = document.getElementById('dynamic-title');
        this.carouselTrack = document.querySelector('.carousel-track');
        this.indicatorsContainer = document.querySelector('.carousel-indicators');

        // Create slides and indicators
        this.dishes.forEach((dish, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            
            const img = document.createElement('img');
            img.src = dish.image;
            img.alt = `${dish.title.first} ${dish.title.second}`;
            
            slide.appendChild(img);
            this.carouselTrack.appendChild(slide);

            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });

        // Setup navigation
        document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next').addEventListener('click', () => this.nextSlide());

        // Set initial title
        this.updateTitle(0);
    }

    updateTitle(index) {
        const dish = this.dishes[index];
        this.titleElement.innerHTML = `
            <span class="restaurant-name">${dish.title.first}</span> 
            <span class="dish-type">${dish.title.second}</span>
        `;
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        
        this.isTransitioning = true;
        
        // Update slides
        const slides = this.carouselTrack.querySelectorAll('.carousel-slide');
        slides[this.currentIndex].classList.remove('active');
        slides[index].classList.add('active');

        // Update indicators
        const indicators = this.indicatorsContainer.querySelectorAll('.indicator');
        indicators[this.currentIndex].classList.remove('active');
        indicators[index].classList.add('active');

        // Update title with fade effect
        this.titleElement.style.opacity = '0';
        setTimeout(() => {
            this.updateTitle(index);
            this.titleElement.style.opacity = '1';
        }, 250);

        this.currentIndex = index;
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.dishes.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.dishes.length) % this.dishes.length;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        setInterval(() => {
            if (!this.isTransitioning) {
                this.nextSlide();
            }
        }, 5000);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DishCarousel();
});






/*  - - - -- - - - -    Reservas   - - - - -- - - -- - - - -- - - - -*/

    // Agregar esto a tu archivo animaciones.js

    document.addEventListener('DOMContentLoaded', function() {
        const modalFormulario = document.getElementById('modalFormulario');
        const btnEvento = document.querySelector('.evento-btn');
        const btnCerrar = document.querySelector('.cerrar-modal');
        const inputs = document.querySelectorAll('.campo-input');
        const menuBtn = document.querySelector('.menu-btn');
    
        // Funcionalidad para el modal
        btnEvento.addEventListener('click', function() {
            modalFormulario.classList.add('activo');
            document.body.style.overflow = 'hidden';
        });
    
        btnCerrar.addEventListener('click', function() {
            modalFormulario.classList.remove('activo');
            document.body.style.overflow = 'auto';
        });
    
        modalFormulario.addEventListener('click', function(e) {
            if (e.target === modalFormulario) {
                modalFormulario.classList.remove('activo');
                document.body.style.overflow = 'auto';
            }
        });
    
        // Animación de la línea de input
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
    
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
    
        // Funcionalidad del botón de menú
        menuBtn.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para mostrar el menú
            console.log('Abriendo menú...');
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
