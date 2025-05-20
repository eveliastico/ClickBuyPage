document.addEventListener("DOMContentLoaded", function () {
    const btnConfig = document.getElementById("btnConfig");
    const menuDisplay = document.getElementById("menuDisplay");
    const btnBack = document.getElementById("back");
    //Permite que el boton regrese al menu de cliente
    btnBack.addEventListener("click", ()=> {
        window.location.href="../inicio/inicioCliente/inicioCliente.html";
    });
    btnConfig.addEventListener("click", function(){
        //Despliega el menu
        menuDisplay.style.display = (menuDisplay.style.display === "none" || menuDisplay.style.display === "") ? "block" : "none";
    });

    document.addEventListener("click", function(event){
        if (!btnConfig.contains(event.target) && !menuDisplay.contains(event.target)) {
            menuDisplay.style.display = "none";
        }
    });
    
});
    function formatoTarjeta(input) {
        //Elimina caracteres y letras
        let numTarjeta = input.value.replace(/\D/g, '');
        //Separa cada 4 numeros
        let formatoTar = numTarjeta.match(/.{1,4}/g)?.join('-');
        input.value = formatoTar || '';
    }
