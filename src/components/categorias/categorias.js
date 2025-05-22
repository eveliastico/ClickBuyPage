const categorias = [
  {
    nombre: "Electrónica",
    imagen: "../../assets/images/inicio/CategoriasCarrusel/electronicos.png"

  },
  {
    nombre: "Hogar",
    imagen: "../../assets/images/inicio/CategoriasCarrusel/hogar.png"
  },
  {
    nombre: "Belleza",
    imagen: "../../assets/images/inicio/CategoriasCarrusel/belleza.png"
  },
  {
    nombre: "Fitness",
    imagen: "../../assets/images/inicio/CategoriasCarrusel/fitness.png"
  },
  {
    nombre: "Moda",
    imagen: "../../assets/images/inicio/CategoriasCarrusel/moda.png"
  },
  {
    nombre: "Deportes",
    imagen: "../../assets/images/inicio/CategoriasCarrusel/deportes.png"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("categorias-container");

  categorias.forEach(categoria => {
    const item = document.createElement("div");
    item.className = "categoria-item";

    item.innerHTML = `
      <div class="icono-circulo">
        <img src="${categoria.imagen}" alt="${categoria.nombre}" />
      </div>
      <p class="nombre-categoria">${categoria.nombre}</p>
    `;

    // Genera nombre del archivo y redirige
    const archivo = categoria.nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "") + ".html";

    item.addEventListener("click", () => {
      window.location.href = `./subcategorias/${archivo}`;
    });

    contenedor.appendChild(item);
  });
});

