<?php
// Incluir archivo de conexión a la base de datos
include('conexion.php');

// Comprobar si los datos se enviaron por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = mysqli_real_escape_string($enlace, $_POST['nombre']);
    $correo = mysqli_real_escape_string($enlace, $_POST['correo']);
    $telefono = mysqli_real_escape_string($enlace, $_POST['telefono']);
    $tipoConsulta = mysqli_real_escape_string($enlace, $_POST['tipoConsulta']);
    $mensaje = mysqli_real_escape_string($enlace, $_POST['mensaje']);

    // Validación simple (puedes mejorarlo)
    if (empty($nombre) || empty($correo) || empty($telefono) || empty($tipoConsulta) || empty($mensaje)) {
        die("Por favor, complete todos los campos del formulario.");
    }

    // Imprimir los datos para verificar
    echo "Datos recibidos:<br>";
    echo "Nombre: " . $nombre . "<br>";
    echo "Correo: " . $correo . "<br>";
    echo "Teléfono: " . $telefono . "<br>";
    echo "Tipo de Consulta: " . $tipoConsulta . "<br>";
    echo "Mensaje: " . $mensaje . "<br>";

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO consultas_contacto (nombre_completo, correo_electronico, tipo_consulta, mensaje)
            VALUES ('$nombre', '$correo', '$tipoConsulta', '$mensaje')";
if (mysqli_query($enlace, $sql)) {
    echo "<script>alert('Consulta enviada con éxito. Nos pondremos en contacto pronto.'); window.location.href = 'contacto.html';</script>";
} else {
    // Mostrar detalles de la consulta SQL y el error
    echo "Error en la consulta: " . $sql . "<br>" . mysqli_error($enlace);
}


    // Cerrar la conexión a la base de datos
    mysqli_close($enlace);
}
?>
