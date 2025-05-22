const categorias = [
  { id: 1, nombre: "Electrónica", descripcion: "Productos tecnológicos, gadgets y más." },
  { id: 2, nombre: "Hogar", descripcion: "Artículos para el hogar y decoración." },
  { id: 3, nombre: "Ropa", descripcion: "Moda para todas las edades y estilos." },
  { id: 4, nombre: "Libros", descripcion: "Lecturas para todos los gustos." },
  { id: 5, nombre: "Juguetes", descripcion: "Juegos y diversión para niños." }
];

document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("categorias-table");

  categorias.forEach(categoria => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td style="padding: 10px; border: 1px solid #ccc;">${categoria.id}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${categoria.nombre}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">${categoria.descripcion}</td>
    `;
    tabla.appendChild(fila);
  });
});
