window.addEventListener('DOMContentLoaded', cargarCarrito);

function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('carrito-container');
  const cantidadSpan = document.getElementById('cantidad-productos');
  const totalSpan = document.getElementById('total-productos');
  const descuentoSpan = document.getElementById('descuento-carrito');
  const totalGeneralSpan = document.getElementById('total-general');
  const cuponTexto = document.getElementById('cupón-aplicado');
  const mensajeVacio = document.getElementById('mensaje-vacio'); // <-- Agregado

  // Limpiar contenido anterior
  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    mensajeVacio.style.display = 'block'; // Mostrar mensaje vacío
    cantidadSpan.textContent = 0;
    totalSpan.textContent = '$0.00';
    descuentoSpan.textContent = '-$0.00';
    totalGeneralSpan.textContent = '$0.00';
    cuponTexto.textContent = '';
    return; // Salir porque no hay nada que mostrar
  } else {
    mensajeVacio.style.display = 'none'; // Ocultar mensaje vacío
  }

  let total = 0;
  let totalItems = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;
    totalItems += producto.cantidad;

    const div = document.createElement('div');
    div.className = 'producto-carrito';
    div.innerHTML = `
      <div class="producto-info">
        <div>
          <h4>${producto.nombre}</h4>
          <p>Precio: $${producto.precio.toFixed(2)}</p>
          <div class="acciones-carrito">
            <div class="controles-cantidad">
              <button onclick="cambiarCantidad(${index}, -1)">−</button>
              <span>${producto.cantidad}</span>
              <button onclick="cambiarCantidad(${index}, 1)">+</button>
            </div>
            <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
          </div>
        </div>
        <div class="subtotal">
          <strong>Subtotal: $${subtotal.toFixed(2)}</strong>
        </div>
      </div>
    `;
    contenedor.appendChild(div);
  });

  // Actualizar totales
  cantidadSpan.textContent = totalItems;

  const cupon = JSON.parse(localStorage.getItem('cupon'));
  let descuento = 0;

  if (cupon) {
    if (cupon.tipo === 'porcentaje') {
      descuento = total * (cupon.valor / 100);
    } else if (cupon.tipo === 'cantidad') {
      descuento = cupon.valor;
    }
  }

  descuento = Math.min(descuento, total);
  const totalConDescuento = total - descuento;

  totalSpan.textContent = `$${total.toFixed(2)}`;
  descuentoSpan.textContent = `-$${descuento.toFixed(2)}`;
  totalGeneralSpan.textContent = `$${totalConDescuento.toFixed(2)}`;

  // Mostrar texto del cupón
  cuponTexto.textContent = cupon
    ? `Cupón aplicado: ${cupon.tipo === 'porcentaje' ? cupon.valor + '% OFF' : '$' + cupon.valor + ' OFF'}`
    : '';
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

function eliminarCupon() {
  localStorage.removeItem("cupon");
  alert("Cupón eliminado ❌");
  cargarCarrito();
}


function eliminarProducto(index) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  cargarCarrito();
}

window.addEventListener('DOMContentLoaded', cargarCarrito);

function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Verifica si ya existe el producto
  const index = carrito.findIndex(p => p.nombre === nombre);
  if (index !== -1) {
    // Ya existe, solo aumenta cantidad
    carrito[index].cantidad += 1;
  } else {
    // Nuevo producto
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`"${nombre}" fue agregado al carrito.`);
}
