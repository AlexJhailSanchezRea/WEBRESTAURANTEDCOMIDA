<?php
session_start();
include 'conexion.php'; // Conectar a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = trim($_POST["correo"]);
    $password = trim($_POST["password"]);

    if (!empty($correo) && !empty($password)) {
        // Buscar usuario en la base de datos
        $sql = "SELECT id_usuario, nombre_completo, contrasena FROM usuarios WHERE correo_electronico = ?";
        $stmt = mysqli_prepare($enlace, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "s", $correo);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);

            if (mysqli_stmt_num_rows($stmt) > 0) {
                mysqli_stmt_bind_result($stmt, $id_usuario, $nombre_completo, $hashed_password);
                mysqli_stmt_fetch($stmt);

                // Verificar la contraseña
                if (password_verify($password, $hashed_password)) {
                    $_SESSION["usuario"] = $nombre_completo;
                    $_SESSION["id_usuario"] = $id_usuario;

                    header("Location: index.html"); // Redirigir a la página principal
                    exit();
                } else {
                    echo "<script>alert('⚠️ Contraseña incorrecta.'); window.location.href='login.html';</script>";
                }
            } else {
                echo "<script>alert('⚠️ Usuario no encontrado.'); window.location.href='login.html';</script>";
            }
            mysqli_stmt_close($stmt);
        } else {
            echo "Error en la consulta: " . mysqli_error($enlace);
        }
    } else {
        echo "<script>alert('⚠️ Todos los campos son obligatorios.'); window.location.href='login.html';</script>";
    }
} else {
    header("Location: login.html");
    exit();
}
?>
