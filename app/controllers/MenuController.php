<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once "../core/BaseDatos.php";  

try {
    $db = new Database();
    $query = "SELECT id_producto, nombre, descripcion, precio, imagen_url FROM productos";
    $productos = $db->query($query);
    
    if (!$productos) {
        throw new Exception("No se pudieron obtener los productos");
    }
    
    echo json_encode($productos);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>