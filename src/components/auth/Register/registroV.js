import { registrarUsuario } from "../../../services/usuarioServicio.js";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRegistroVendedor");
    const backIndex = document.getElementById("backIndex");
    //Permite regresar a la página anterior o recargar la página
    backIndex.addEventListener("click", ()=> {
        if (window.history.length > 1) {
            window.history.back();  
        } else {
            window.location.reload();
        } 
    }); 
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Captura de datos
            const nombre = document.getElementById("nombres").value.trim();
            const apellido = document.getElementById("apellidos").value.trim();
            const fechaNacimiento = document.getElementById("fecha").value;
            const telefono = document.getElementById("telefono").value.trim();
            const correoElectronico = document.getElementById("correo").value.trim();
            const contrasena = document.getElementById("contraseña").value;
            const confirmPassword = document.getElementById("contra2").value;
            const tipoUsuario = "vendedor";
          
            // Validaciones
            if (!nombre || !apellido || !fechaNacimiento || !telefono || !correoElectronico || !contrasena || !confirmPassword) {
              alert("Por favor, completa todos los campos.");
              return;
            }
            // Validar correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correoElectronico)) {
              alert("Por favor, ingresa un correo electrónico válido.");
              return;
            }
            // Validar teléfono (solo números y mínimo 8 numeros)
            if (!/^\d{8,}$/.test(telefono)) {
              alert("El teléfono debe contener solo números y al menos 8 dígitos.");
              return;
            }
            // Validar contraseña (mínimo 6 caracteres)
            if (contrasena.length < 6) {
              alert("La contraseña debe tener al menos 6 caracteres.");
              return;
            }
            // Validar coincidencia de contraseñas
            if (contrasena !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            const nuevoUsuario = {
            nombre,
            apellido,
            fechaNacimiento,
            telefono,
            correoElectronico,
            contrasena,
            tipoUsuario
            }; 
            //console.log(nuevoUsuario); 
          // Llama a la función para registrar usuario
          const resultado = await registrarUsuario(nuevoUsuario);

          if (resultado) {
            alert("Usuario registrado correctamente");
            // Puedes redirigir o limpiar el formulario aquí
            form.reset();
            window.location.href = "../Login/login.html"; // Redirigir a la página de login
          } else {
            alert("Error al registrar usuario");
          }
        });
    
});
