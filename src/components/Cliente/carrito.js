  function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('carrito-container');
    const cantidadSpan = document.getElementById('cantidad-productos');
    const totalSpan = document.getElementById('total-productos');
    const totalGeneralSpan = document.getElementById('total-general');

    contenedor.innerHTML = '';

    let total = 0;
    let totalItems = 0;

    carrito.forEach((producto, index) => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;
      totalItems += producto.cantidad;

      const div = document.createElement('div');
      div.className = 'producto-carrito';
      div.innerHTML = `
        <div>
          <h4>${producto.nombre}</h4>
          <p>Precio: $${producto.precio.toFixed(2)}</p>
          <p>Cantidad: 
            <span class="controles-cantidad">
              <button onclick="cambiarCantidad(${index}, -1)">−</button>
              ${producto.cantidad}
              <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </span>
          </p>
          <button onclick="eliminarProducto(${index})">Eliminar</button>
        </div>
        <p><strong>Subtotal: $${subtotal.toFixed(2)}</strong></p>
      `;
      contenedor.appendChild(div);
    });

    cantidadSpan.textContent = totalItems;
    totalSpan.textContent = total.toFixed(2);
    totalGeneralSpan.textContent = total.toFixed(2);
  }

  function cambiarCantidad(index, cambio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
  }

  function eliminarProducto(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
  }

  window.addEventListener('DOMContentLoaded', cargarCarrito);

