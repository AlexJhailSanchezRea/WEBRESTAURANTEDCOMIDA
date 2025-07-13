document.getElementById('formularioContacto').addEventListener('submit', function(e) {
    // Remover e.preventDefault() para permitir que el formulario se envíe normalmente
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const tipoConsulta = document.getElementById('tipoConsulta').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido');
        return;
    }

    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(telefono.replace(/\s/g, '').replace('+', ''))) {
        alert('Por favor, ingrese un número de teléfono válido');
        return;
    }

    if (!tipoConsulta) {
        alert('Por favor, seleccione un tipo de consulta');
        return;
    }

    if (mensaje.trim() === '') {
        alert('Por favor, escriba un mensaje');
        return;
    }

    // Continuamos con el envío del formulario
    this.submit();
});


    // Simular envío de formulario
    const botonEnviar = this.querySelector('.boton');
    botonEnviar.textContent = 'Enviando...';
    botonEnviar.disabled = true;

    // Simular envío asincrónico
    setTimeout(() => {
        // Mostrar modal de confirmación
        document.getElementById('modalConfirmacion').classList.add('show');
        
        // Resetear formulario
        this.reset();
        botonEnviar.textContent = 'Enviar Consulta';
        botonEnviar.disabled = false;
    }, 2000);
;

// Funciones para cerrar modal
document.getElementById('cerrarModal').addEventListener('click', closeModal);
document.getElementById('botonCerrarModal').addEventListener('click', closeModal);

function closeModal() {
    document.getElementById('modalConfirmacion').classList.remove('show');
}

// Añadir efecto de validación en tiempo real
const inputs = document.querySelectorAll('#formularioContacto input, #formularioContacto textarea, #formularioContacto select');
inputs.forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('error');
    });

    input.addEventListener('input', function() {
        this.classList.remove('error');
    });
});// Nueva función para el menú desplegable
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