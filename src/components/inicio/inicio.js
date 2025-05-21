document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");
    const dialog = document.getElementById("registerModal");
    const closeDialog = document.getElementById("closeModal");

    registerBtn.onclick = () => {
        dialog.showModal();
    }
    closeDialog.onclick = () => {
        dialog.classList.add('close-animate');
        setTimeout(() => {
            dialog.close();
            dialog.classList.remove('close-animate');
        }, 100)
    }

    // Lista de posibles productos
    const productosDisponibles = [
        { nombre: "Reloj digital", precio: 129, imagen: "reloj.png" },
        { nombre: "Cafetera instantanea", precio: 249, imagen: "cafetera.png" },
        { nombre: "Audífonos Soly", precio: 199, imagen: "audifonos.png" },
        { nombre: "Laptop Lenovo", precio: 7999, imagen: "laptop.png" },
        { nombre: "Lámpara LED", precio: 349, imagen: "lampara.png" },
        { nombre: "Mochila Antirrobo", precio: 599, imagen: "mochila.png" },
        { nombre: "Silla Gamer", precio: 3200, imagen: "silla.png" },
        { nombre: "Mouse inalámbrico", precio: 299, imagen: "mouse.png" }
    ];

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

    // Mostrar las ofertas en el DOM
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

    document.addEventListener("DOMContentLoaded", verificarActualizacion);

    // Función básica de carrito
    window.agregarAlCarrito = function(nombre, precio) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        const index = carrito.findIndex(p => p.nombre === nombre);
        if (index !== -1) {
            carrito[index].cantidad += 1;
        } else {
            carrito.push({ nombre, precio, cantidad: 1 });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`🛒 "${nombre}" fue agregado al carrito por $${precio}`);
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


});

let clonesCreados = 0;

function moverCarrusel() {
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

function retrocederCarrusel() {
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

