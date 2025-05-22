document.addEventListener("DOMContentLoaded", function () {
    const btnBackV = document.getElementById("backV");
    const btnBackU = document.getElementById("backU");
    
    if (btnBackU) {
        btnBackU.addEventListener("click", ()=> {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href="../inicio/inicioCliente/inicioCliente.html";
            }
        });
    } else if(btnBackV) {
        btnBackV.addEventListener("click", ()=> {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href="../inicio/inicioVendedor/inicioVendedor.html";
            }
    });
    }
    
});