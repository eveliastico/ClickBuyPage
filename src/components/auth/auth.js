//Hace la verificación de token dentro de las paginas para permitir o negar el acceso
const token = localStorage.getItem("token");
if (!token) {
    alert("No tienes acceso a esta pagina. Inicia Sesión primero.");
    window.location.href= "Login/login.html";
}