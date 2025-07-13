// Función original para mostrar/ocultar contraseña
function togglePassword(idInput) {
    const campoContraseña = document.getElementById(idInput);
    campoContraseña.type = campoContraseña.type === 'password' ? 'text' : 'password';
}
// Función para mostrar o ocultar la contraseña
function togglePassword(idInput) {
    const campoContraseña = document.getElementById(idInput);
    campoContraseña.type = campoContraseña.type === 'password' ? 'text' : 'password';
}

// Función para validar el formulario de registro
function validarFormulario() {
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar-contraseña').value;
    const mensajeError = document.getElementById('mensaje-error');

    // Comprobamos si las contraseñas coinciden
    if (contraseña !== confirmarContraseña) {
        mensajeError.classList.remove('oculto');
    } else {
        mensajeError.classList.add('oculto');
        alert('Registro exitoso');
        // Aquí puedes agregar la lógica para enviar el formulario
    }
}
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