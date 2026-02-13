//Módulo API: Se encarga de la comunicación con el servidor

export async function obtenerUsuarios() {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Petición asíncrona con Fetch
        const respuesta = await fetch(URL);
        
        // Verificamos si la respuesta fue exitosa (Status 200)
        if (!respuesta.ok) {
            throw new Error('Error en la conexión con la API');
        }

        // Convertimos a JSON y retornamos los datos puros
        const datos = await respuesta.json();
        return datos;

    } catch (error) {
        console.error('Falló la petición:', error);
        return []; // Retornamos array vacío para no romper la app
    }
}