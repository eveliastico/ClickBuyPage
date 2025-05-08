document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const backIndex = document.getElementById("backIndex");
    //Función que permite regresar a index.hmtl con la flecha de regresar dentro de la pantalla login
    backIndex.addEventListener("click", ()=> {
        window.location.href= "/index.html";
    });
    //Función que permite iniciar sesión a un usuario
    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const email = document.getElementById("email");
        const password = document.getElementById("psswd");
        const response = await fetch("http://localhost:3000/usuarios/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        });
        const data = await response.json();
        if (response.ok) {
            if (data.tipoUsuario === "cliente") {
                window.location.href="../";
            }
        }
    });

});



