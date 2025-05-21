document.addEventListener("DOMContentLoaded", function () {
    const btnBack = document.getElementById("back");
    //Permite que el boton regrese al menu de cliente
    btnBack.addEventListener("click", ()=> {
        window.location.href="../inicio/inicioVendedor/inicioVendedor.html";
    });

});