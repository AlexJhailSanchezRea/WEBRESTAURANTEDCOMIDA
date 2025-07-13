<?php
$servidor = "localhost"; // Servidor de la base de datos
$usuario = "root"; // Usuario de MySQL (por defecto es "root" en XAMPP)
$clave = ""; // Contraseña (en XAMPP suele estar vacía)
$baseDeDatos = "sabores-eternos"; // Nombre de la base de datos

// Crear conexión
$enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

// Verificar conexión
if (!$enlace) {
    die("Error de conexión: " . mysqli_connect_error() . " (Código: " . mysqli_connect_errno() . ")");
} else {
    echo "Conexión exitosa a la base de datos.";
}
?>