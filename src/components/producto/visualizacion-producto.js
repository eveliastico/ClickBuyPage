import { obtenerProductoPorId } from "../../services/productoServicio.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Obtén el ID del producto desde la URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (!productId) {
        console.error("No se proporcionó un ID de producto en la URL.");
        return;
    }

    try {
        // Usa el ID obtenido de la URL para llamar a la API
        const respuesta = await obtenerProductoPorId(productId);
        console.log("Respuesta de la API:", respuesta);

        // Accede a la propiedad `data` para obtener el producto
        const producto = await respuesta.data;
        renderizarProductos(producto);
    } catch (error) {
        console.error("Error al renderizar los productos:", error);
    }

    function renderizarProductos(producto) {
        try {
            document.querySelector(".producto-detalle").innerHTML = `
                <h1>${producto.nombre}</h1>
                <img src="src/assets/images/inicio/relacionados/pantalla.png" alt="${producto.descripcion}">
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <button class="btn-carrito" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito 🛒</button>
            `;
        } catch (error) {
            console.error("Error al cargar los detalles del producto:", error);
        }
    }
});