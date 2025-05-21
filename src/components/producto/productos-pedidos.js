document.addEventListener("DOMContentLoaded", function () {
    const btnBack = document.getElementById("back");
    const pedidos = document.querySelectorAll(".pedido");
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    //Boton de regresar
    btnBack.addEventListener("click", ()=> {
        window.location.href="../inicio/inicioCliente/inicioCliente.html";
    });
    //Funcion que permite añadir botones a los pedidos
    pedidos.forEach(pedido => {
        //Crea el elemento boton
        let boton = document.createElement("button");
        //Le añade el texto al boton
        boton.textContent = "Ver Pedido";
        //Le añade clase al boton
        boton.classList.add("btn");
        //Asigna el boton al div pedido
        pedido.appendChild(boton);
        //Evento que redirije al hacer click al boton
        boton.addEventListener("click", function() {
            window.location.href="visualización-pedido.html";
        });
    });
    //
});