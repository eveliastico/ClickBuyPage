document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".promo button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const texto = boton.parentElement.querySelector(".info h2").textContent;

      let cupon = null;

      if (texto.includes("%")) {
        const porcentaje = parseInt(texto);
        cupon = { tipo: "porcentaje", valor: porcentaje };
      } else if (texto.includes("$")) {
        const cantidad = parseInt(texto.replace(/[^0-9]/g, ""));
        cupon = { tipo: "cantidad", valor: cantidad };
      }

      if (cupon) {
        localStorage.setItem("cupon", JSON.stringify(cupon));
        alert(`✅ ¡Cupón aplicado con éxito!\nHas activado: ${texto}`);
        boton.textContent = "Aplicado ✅";
        boton.disabled = true;
        boton.style.backgroundColor = "#28a745";
      } else {
        alert("❌ Cupón no reconocido");
      }
    });
  });
});