const API_URL = "http://localhost:5100/usuarios";
// Obtener todos los usuarios
export async function obtenerUsuarios() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            mode: "cors"
        });
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return [];
    }
}
//Registrar un nuevo usuario
export async function registrarUsuario(usuario) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        if (!response.ok) {
            throw new Error("Error al registrar el usuario");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}

// Obtener un usuario por ID
export async function obtenerUsuarioPorId(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "GET",
            mode: "cors"
        });
        if (!response.ok) {
            throw new Error("Error al obtener el usuario");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}

// Login de usuario
export async function loginUsuario(credentials) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            throw new Error("Error al iniciar sesión");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}

// Actualizar usuario
export async function actualizarUsuario(id, usuario) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        if (!response.ok) {
            throw new Error("Error al actualizar el usuario");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}

// Eliminar usuario
export async function eliminarUsuario(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Error al eliminar el usuario");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}