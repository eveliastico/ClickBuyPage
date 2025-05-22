import { obtenerProductoPorId } from "../../services/productoServicio.js";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (!productId) {
        console.error("No se proporcionó un ID de producto en la URL.");
        return;
    }

    try {
        const respuesta = await obtenerProductoPorId(productId);
        console.log("Respuesta de la API:", respuesta);

        const producto = await respuesta.data;
        renderizarProductos(producto);
    } catch (error) {
        console.error("Error al renderizar los productos:", error);
    }

    function renderizarProductos(producto) {
        try {
            document.querySelector(".producto-detalle").innerHTML = `
                <h1>${producto.nombre}</h1>
                <img src="../../assets/images/inicio/relacionados/Laptop.png" alt="${producto.descripcion}">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="btn-carrito" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito 🛒</button>
            `;
        } catch (error) {
            console.error("Error al cargar los detalles del producto:", error);
        }
    }
});

window.abrirCarrito = function abrirCarrito() {
    const carrito = document.getElementById("carrito");
    carrito.classList.add("activo");
};

window.cerrarCarrito = function cerrarCarrito() {
    const carrito = document.getElementById("carrito");
    carrito.classList.remove("activo");
};

window.agregarAlCarrito = function agregarAlCarrito(nombre, precio) {
    const productosCarrito = document.getElementById("productos-carrito");
    const productoHTML = `
        <div class="producto-carrito">
            <p>${nombre} - $${precio.toFixed(2)}</p>
            <button class="eliminar" onclick="eliminarProducto(this)">Eliminar</button>
        </div>
    `;
    productosCarrito.insertAdjacentHTML("beforeend", productoHTML);
    abrirCarrito();
};

window.eliminarProducto = function eliminarProducto(button) {
    const producto = button.closest(".producto-carrito");
    producto.remove();
};