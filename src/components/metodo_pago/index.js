document.addEventListener("DOMContentLoaded", function () {
    const btnConfig = document.getElementById("btnConfig");
    const menuDisplay = document.getElementById("menuDisplay");
    const btnBack = document.getElementById("back");
    //const carrito = JSON.parse(localStorage.getItem('carrito')) || []; Para utilizar el carrito
    const btnPago = document.getElementById('pago');
    //Boton de regresar
    btnBack.addEventListener("click", ()=> {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href="../inicio/inicioCliente/inicioCliente.html";
        }
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
    
    //Funcion que permitiria hacer el pago y generar el pedido
    btnPago.addEventListener("click", function() {
        
        window.location.href="../producto/visualización-pedido.html";
    });
});
//Funcion que permite formatear el input de la tarjeta
function formatoTarjeta(input) {
    //Elimina caracteres y letras
    let numTarjeta = input.value.replace(/\D/g, '');
    //Separa cada 4 numeros
    let formatoTar = numTarjeta.match(/.{1,4}/g)?.join('-');
    input.value = formatoTar || '';
}
