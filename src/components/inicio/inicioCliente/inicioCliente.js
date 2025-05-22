import { obtenerProductos } from "../../../services/productoServicio.js";

document.addEventListener("DOMContentLoaded", async () => {

    const btnConfig = document.getElementById("btnConfig");
    const menuDisplay = document.getElementById("menuDisplay");
    btnConfig.addEventListener("click", function () {
        //Despliega el menu
        menuDisplay.style.display = (menuDisplay.style.display === "none" || menuDisplay.style.display === "") ? "block" : "none";
    });

    document.addEventListener("click", function (event) {
        if (!btnConfig.contains(event.target) && !menuDisplay.contains(event.target)) {
            menuDisplay.style.display = "none";
        }
    });

    // Función para generar 4 productos aleatorios
    function generarOfertasDelDia() {
        const seleccionados = [];

        while (seleccionados.length < 4) {
            const random = productosDisponibles[Math.floor(Math.random() * productosDisponibles.length)];
            if (!seleccionados.find(p => p.nombre === random.nombre)) {
                seleccionados.push(random);
            }
        }

        localStorage.setItem("ofertasDelDia", JSON.stringify(seleccionados));
        localStorage.setItem("ultimaActualizacion", new Date().toDateString());
        mostrarOfertas();
    }

    /** Mostrar las ofertas en el DOM
    function mostrarOfertas() {
        const contenedor = document.querySelector(".contenedor-cards");
        contenedor.innerHTML = ""; // limpiar

        const ofertas = JSON.parse(localStorage.getItem("ofertasDelDia")) || [];

        ofertas.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card-producto";
            card.innerHTML = `
      <img src="src/assets/images/${producto.imagen}" alt="${producto.nombre}">
      <p class="titulo">${producto.nombre}</p>
      <p class="precio">$${producto.precio}</p>
      <button class="btn-carrito" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito 🛒</button>
    `;
            contenedor.appendChild(card);
        });
    }
    */


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
            <img src="../../../assets/images/inicio/relacionados/Laptop.png" alt="${producto.descripcion}">
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

    // Verificar si ya pasó la medianoche
    function verificarActualizacion() {
        const ultima = localStorage.getItem("ultimaActualizacion");
        const hoy = new Date().toDateString();

        if (ultima !== hoy) {
            generarOfertasDelDia();
        } else {
            mostrarOfertas();
        }
    }

    function actualizarContadorOfertas() {
        const reloj = document.getElementById("reloj");
        const ahora = new Date();

        // Siguiente medianoche
        const manana = new Date();
        manana.setHours(24, 0, 0, 0); // próximo día a las 00:00:00

        const diferencia = manana - ahora; // en milisegundos

        const horas = Math.floor(diferencia / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        reloj.textContent = `TIEMPO RESTANTE: ${horas}h ${minutos}m ${segundos}s`;
    }

    setInterval(actualizarContadorOfertas, 1000);

    document.addEventListener("DOMContentLoaded", verificarActualizacion);
});

let clonesCreados = 0;

window.moverCarrusel = function moverCarrusel() {
    const carrusel = document.getElementById("carrusel");
    const cardWidth = carrusel.querySelector(".card-producto").offsetWidth + 20;

    // 🔁 Cada 5 clics, clonamos el set de productos original
    if (clonesCreados % 5 === 0) {
        const productosOriginales = Array.from(carrusel.querySelectorAll(".card-producto:not(.clonado)"));
        productosOriginales.forEach(producto => {
            const clon = producto.cloneNode(true);
            clon.classList.add("clonado");
            carrusel.appendChild(clon);
        });
    }

    clonesCreados++;
    carrusel.scrollBy({ left: cardWidth, behavior: 'smooth' });
}

window.retrocederCarrusel = function retrocederCarrusel() {
    const carrusel = document.getElementById("carrusel");
    const cardWidth = carrusel.querySelector(".card-producto").offsetWidth + 20;
    carrusel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
}

const lista = document.getElementById("listaCategorias");

document.querySelector(".flecha-categoria.izquierda").onclick = () => {
    lista.scrollBy({ left: -150, behavior: "smooth" });
};

document.querySelector(".flecha-categoria.derecha").onclick = () => {
    lista.scrollBy({ left: 150, behavior: "smooth" });
};