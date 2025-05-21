document.addEventListener("DOMContentLoaded", function () {
    btnBackV = document.getElementById("backV");
    btnBackU = document.getElementById("backU");
    
    if (btnBackU) {
        btnBackU.addEventListener("click", ()=> {
            window.location.href="../inicio/inicioCliente/inicioCliente.html";
        });
    } else if(btnBackV) {
        btnBackV.addEventListener("click", ()=> {
            window.location.href="../inicio/inicioVendedor/inicioVendedor.html";
        }); 
    }

    
});