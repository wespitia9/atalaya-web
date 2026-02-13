// Módulo UI: Se encarga de pintar en pantalla y validar formularios

// Función para pintar tarjetas de testimonios
export function renderizarTestimonios(usuarios, contenedor) {
    const muestra = usuarios.slice(0, 3);

    muestra.forEach(usuario => {
        // Creamos un DIV columna para la grilla
        const columna = document.createElement('div');
        columna.className = 'col-md-4 mb-3'; // Clases de Bootstrap

        columna.innerHTML = `
            <div class="card h-100 p-3 shadow-sm">
                <h5 class="card-title">${usuario.name}</h5>
                <p class="card-text text-muted">Empresa: <strong>${usuario.company.name}</strong></p>
                <small>${usuario.email}</small>
            </div>
        `;
        contenedor.appendChild(columna);
    });
}

// Función para Validar Formulario
export function validarFormulario(evento) {
    evento.preventDefault(); // Detenemos recarga

    // Selección de inputs dentro del formulario que disparó el evento
    const formulario = evento.target;
    const nombre = formulario.querySelector('#nombre').value;
    const email = formulario.querySelector('#email').value;

    // Validación: Campos vacíos
    if (!nombre || !email) {
        alert('❌ Error: Por favor completa todos los campos.');
        return;
    }

    // Validación extra: Formato de correo simple (incluye @)
    if (!email.includes('@')) {
        alert('⚠️ Error: Ingresa un correo válido.');
        return;
    }

    // Éxito
    alert(`✅ ¡Gracias ${nombre}! Mensaje enviado correctamente.`);
    formulario.reset();
}