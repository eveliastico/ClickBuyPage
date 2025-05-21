import { obtenerProductos } from "./src/services/productoServicio.js";

document.addEventListener("DOMContentLoaded", async () => {
    const productsContainer = document.querySelector(".contenedor-cards");

    // Llama al servicio para obtener los productos
    try {
        console.log("ENTRE");
        const respuesta = await obtenerProductos();
        console.log("Respuesta de la API:", respuesta);

        // Accede a la propiedad `data` para obtener los productos
        const productos = respuesta.data;
        renderizarProductos(productos);
    } catch (error) {
        console.error("Error al renderizar los productos:", error);
    }

    // Función para renderizar los productos en el DOM
    function renderizarProductos(productos) {
        if (!Array.isArray(productos)) {
            console.error("La respuesta de la API no es un array:", productos);
            return;
        }

        productsContainer.innerHTML = ""; // Limpia el contenedor
        productos.forEach(producto => {
            const card = document.createElement("div"); // Cambiado a 'div'
            card.className = "card-producto";
            card.innerHTML = `
            <img src="src/assets/images/inicio/relacionados/Laptop.png" alt="${producto.descripcion}">
            <p class="titulo">${producto.nombre}</p>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button class="btn-carrito" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito 🛒</button>
        `;
            card.onclick = () => {
                window.location.href = `/src/components/producto/visualizacion-producto.html?id=${producto._id}`;
            };
            productsContainer.appendChild(card);
        });
    }

    // Función básica de carrito
    window.agregarAlCarrito = function (nombre, precio) {
        alert(`¡${nombre} agregado al carrito por $${precio}!`);
    };
});