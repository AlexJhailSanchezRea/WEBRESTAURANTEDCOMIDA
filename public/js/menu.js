// Clase para manejar el carrito de compras
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.init();
    }

    init() {
        // Agregar el HTML del carrito
        this.createCartHTML();
        
        // Añadir listeners a todos los botones de pedido
        document.querySelectorAll('.btn-pedido').forEach(button => {
            button.addEventListener('click', (e) => {
                const platoItem = e.target.closest('.plato-item');
                const plato = {
                    id: Date.now(), // ID único para cada item
                    nombre: platoItem.querySelector('.plato-title').textContent,
                    precio: parseFloat(platoItem.querySelector('.plato-precio').textContent.replace('Bs', '')),
                    imagen: platoItem.querySelector('.plato-imagen img').src,
                    cantidad: 1
                };
                this.addItem(plato);
            });
        });

        // Mostrar/ocultar carrito al hacer click en el ícono
        document.querySelector('.fa-shopping-cart').parentElement.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.cart-dropdown').classList.toggle('show');
        });
    }

    createCartHTML() {
        // Crear el HTML del carrito desplegable
        const cartHTML = `
            <div class="cart-dropdown">
                <div class="cart-header">
                    <h3>Carrito de Compras</h3>
                    <span class="cart-count">0</span>
                </div>
                <div class="cart-items">
                    <!-- Los items se agregarán aquí dinámicamente -->
                </div>
                <div class="cart-footer">
                    <div class="cart-total">
                        Total: <span>0.00 Bs</span>
                    </div>
                    <button class="btn-checkout">Realizar Pedido</button>
                </div>
            </div>
        `;

        // Insertar el HTML después del ícono del carrito
        document.querySelector('.fa-shopping-cart').parentElement.insertAdjacentHTML('afterend', cartHTML);
    }

    addItem(plato) {
        // Verificar si el item ya existe en el carrito
        const existingItem = this.items.find(item => item.nombre === plato.nombre);
        
        if (existingItem) {
            existingItem.cantidad++;
            this.updateItemUI(existingItem);
        } else {
            this.items.push(plato);
            this.createItemUI(plato);
        }

        this.updateTotal();
        this.updateCartCount();
        this.showCartNotification();
    }

    createItemUI(plato) {
        const itemHTML = `
            <div class="cart-item" data-id="${plato.id}">
                <img src="${plato.imagen}" alt="${plato.nombre}">
                <div class="item-details">
                    <h4>${plato.nombre}</h4>
                    <div class="item-price">${plato.precio} Bs</div>
                    <div class="item-quantity">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">${plato.cantidad}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
                <button class="remove-item">×</button>
            </div>
        `;

        document.querySelector('.cart-items').insertAdjacentHTML('beforeend', itemHTML);
        
        // Añadir event listeners para los botones de cantidad
        const itemElement = document.querySelector(`.cart-item[data-id="${plato.id}"]`);
        this.addQuantityListeners(itemElement, plato);
    }

    addQuantityListeners(itemElement, plato) {
        const plusBtn = itemElement.querySelector('.plus');
        const minusBtn = itemElement.querySelector('.minus');
        const removeBtn = itemElement.querySelector('.remove-item');

        plusBtn.addEventListener('click', () => {
            plato.cantidad++;
            this.updateItemUI(plato);
            this.updateTotal();
            this.updateCartCount();
        });

        minusBtn.addEventListener('click', () => {
            if (plato.cantidad > 1) {
                plato.cantidad--;
                this.updateItemUI(plato);
                this.updateTotal();
                this.updateCartCount();
            }
        });

        removeBtn.addEventListener('click', () => {
            this.removeItem(plato);
        });
    }

    updateItemUI(plato) {
        const itemElement = document.querySelector(`.cart-item[data-id="${plato.id}"]`);
        if (itemElement) {
            itemElement.querySelector('.quantity').textContent = plato.cantidad;
        }
    }

    removeItem(plato) {
        this.items = this.items.filter(item => item.id !== plato.id);
        document.querySelector(`.cart-item[data-id="${plato.id}"]`).remove();
        this.updateTotal();
        this.updateCartCount();
    }

    updateTotal() {
        this.total = this.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        document.querySelector('.cart-total span').textContent = `${this.total.toFixed(2)} Bs`;
    }

    updateCartCount() {
        const count = this.items.reduce((sum, item) => sum + item.cantidad, 0);
        document.querySelector('.cart-count').textContent = count;
    }

    showCartNotification() {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = '¡Producto agregado al carrito!';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
}

// Inicializar el carrito cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
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