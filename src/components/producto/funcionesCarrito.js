// Función reutilizable para cualquier página
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
};
