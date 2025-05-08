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
        //Variables que capturan los datos del formlogin del html
        const email = document.getElementById("email").value;
        const password = document.getElementById("psswd").value;
        /*Hasta conectar con BD se comenta para permitir cargar inicio//Manda los datos al backend
        try{
            const response = await fetch("http://localhost:3000/usuarios/login", {
                //Hay que cambiar el metodo HTTP de login dentro de rutasUsuarios
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });
            //Recibe los datos del backend y verifica que tipo de usuario es
            const data = await response.json();
            if (response.ok) {
                //Guarda el token JWT
                localStorage.setItem("token", data.token);
                if (data.tipoUsuario === "cliente") {
                    window.location.href="/src/components/inicio/inicioCliente/inicioCliente.html";
                }else if(data.tipoUsuario === "vendedor"){
                   window.location.href="/src/components/inicio/inicioVendedor/inicioVendedor.html"; 
                }else {
                    //Aun falta por agregar el inicio de admin
                    window.location.href="/src/components/inicio/inicioAdmin/inicioAdmin.html";
                }
            }else {
                console.log("Error: "+ data.error);
            }
        } catch(error){
            console.error("Error en el login: ", error);
        }*/
        window.location.href="/src/components/inicio/inicioCliente/inicioCliente.html"
    });

});



