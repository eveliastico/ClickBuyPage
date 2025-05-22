import { loginUsuario } from "../../../services/usuarioServicio.js";
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const backIndex = document.getElementById("backIndex");
    //Función que permite regresar a index.html con la flecha de regresar dentro de la pantalla login
    backIndex.addEventListener("click", ()=> {
        if (window.history.length > 1) {
            //Permite regresar a la pagina anterior en caso encuentre 
            window.history.back();
        } else {
           window.location.reload(); 
        }
    });
    // Manejar el login
    loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();
        const correoElectronico = document.getElementById("email").value.trim();
        const contrasena = document.getElementById("password").value.trim();
        const credentials = { correoElectronico, contrasena };
        try {
            //Hace el login con el servicio usuario
            const respuesta = await loginUsuario(credentials);
            // Verifica si la respuesta es exitosa y contiene token
            if (respuesta && respuesta.token) {
                localStorage.setItem("token", respuesta.token);
                localStorage.setItem("tipoUsuario", respuesta.tipoUsuario);
                // Redirige según el tipo de usuario
                if (respuesta.tipoUsuario === "cliente") {
                    window.location.href = "../../inicio/inicioCliente/inicioCliente.html";
                } else if (respuesta.tipoUsuario === "vendedor") {
                    window.location.href = "../../inicio/inicioVendedor/inicioVendedor.html";
                }
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } catch (error) {
            alert("Error al iniciar sesión");
        }
    });
});