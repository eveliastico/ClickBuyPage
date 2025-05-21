const API_URL = "http://localhost:5100/productos";

export async function obtenerProductos() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            mode: "cors"
        });
        if (!response.ok) {
            throw new Error("Error al obtener los productos");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return [];
    }
}

export async function obtenerProductoPorId(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "GET",
            mode: "cors"
        });
        if (!response.ok) {
            throw new Error("Error al obtener el producto");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}
