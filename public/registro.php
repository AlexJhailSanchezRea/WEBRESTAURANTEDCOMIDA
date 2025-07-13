<?php
include 'conexion.php';

if (!$enlace) { // Verifica que la conexión a la base de datos sea válida
    die("Error de conexión: " . mysqli_connect_error());
}

if(isset($_POST['nombre_completo'], $_POST['correo_electronico'], $_POST['contrasena'])){
    $nombre_completo = $_POST['nombre_completo'];
    $correo_electronico = $_POST['correo_electronico'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Encriptar contraseña
    // Consulta SQL
    $insertarDatos = "INSERT INTO usuarios (nombre_completo, correo_electronico, contrasena) 
                      VALUES ('$nombre_completo', '$correo_electronico', '$contrasena')";

    $ejecutarInsertar = mysqli_query($enlace, $insertarDatos);

    if ($ejecutarInsertar) {
        echo "Registro exitoso";
    } else {
        echo "Error en la consulta: " . mysqli_error($enlace); // Mostrar error detallado
    }
} else {
    echo "Error: Todos los campos son obligatorios.";
}
?>
