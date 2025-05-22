document.addEventListener("DOMContentLoaded", function () {
    const btnBack = document.getElementById("back");
    const btnAgregar = document.getElementById("agregar");
    //Boton de regresar
        btnBack.addEventListener("click", ()=> {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href="../inicio/inicioCliente/inicioCliente.html";
            }
        });
    btnAgregar.addEventListener("click", () => {
        window.location.href = "../vendedor/creacion-producto.html";
    });   
});