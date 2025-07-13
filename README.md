# 🍽️ Sistema Web para Restaurante

Este es un sistema web desarrollado para la gestión y presentación de un restaurante. Incluye funcionalidades básicas para usuarios como visualización del menú, registro, login, carrito de compras y contacto, todo integrado con backend en PHP y una arquitectura sencilla tipo MVC.

## 📁 Estructura del Proyecto

```
WEBRESTAURANTEDECOMIDA/
├── .htaccess
├── readme
├── app/
│   └── controllers/
│       └── MenuController.php
├── public/
│   ├── index.html
│   ├── login.html / login.php
│   ├── registro.html / registro.php
│   ├── menu.html / menu.php
│   ├── carrito.php
│   ├── contacto.html / contacto.php
│   ├── procesar_contacto.php
│   ├── conexion.php
│   ├── quienesomos.html
│   ├── sucursal.html
│   └── css/
│       ├── contacto.css
│       ├── estilo.css
│       └── estilomenu.css
```

## 🛠️ Tecnologías Usadas

- HTML5, CSS3
- PHP (estructura ligera tipo MVC)
- Apache (XAMPP o similar)
- Archivos `.htaccess` para configuración del servidor

## ✅ Funcionalidades Principales

- Página de inicio y presentación del restaurante
- Registro y login de usuarios
- Visualización del menú
- Carrito de compras
- Página de contacto funcional (formulario con PHP)
- Gestión del menú vía controlador

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/webrestaurantedcomida.git
   ```

2. Copia la carpeta a tu servidor local (XAMPP o WAMP):
   ```
   C:/xampp/htdocs/WEBRESTAURANTEDECOMIDA/
   ```

3. Inicia Apache en XAMPP y accede desde tu navegador:
   ```
   http://localhost/WEBRESTAURANTEDECOMIDA/public/index.html
   ```

4. Asegúrate de tener una base de datos creada y configurada en `conexion.php`.

## 📌 Notas

- Este sistema puede ser ampliado con panel de administración, gestión de pedidos y pasarelas de pago.
- Si deseas mejorar seguridad y escalabilidad, se recomienda usar frameworks como Laravel o Symfony.

## 📄 Licencia

Este proyecto es de uso académico y libre para modificación bajo los términos de la licencia MIT.

---

Desarrollado por **Alex Jhail Sanchez Rea** - Estudiante de Ingeniería de Sistemas
