export function renderizarTestimonios(usuarios, contenedor) {
    contenedor.innerHTML = ''; 

    usuarios.forEach(usuario => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        // CORRECCIÓN QA EN JS:
        // 1. Usamos <h3> para el nombre (Jerarquía correcta dentro de la sección H2).
        // 2. Agregamos alt="" a la imagen (aunque sea decorativa).
        // 3. Usamos text-secondary en lugar de text-muted para mejor contraste.
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img src="https://i.pravatar.cc/150?u=${usuario.id}" 
                         alt="Foto de perfil de ${usuario.name}" 
                         class="rounded-circle mb-3" width="80">
                    
                    <h3 class="h5 card-title fw-bold">${usuario.name}</h3>
                    <p class="small text-secondary mb-2">@${usuario.username}</p>
                    
                    <p class="card-text fst-italic">"${usuario.company.catchPhrase}"</p>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

export function validarFormulario(e) {
    e.preventDefault();
    alert('Formulario enviado correctamente (Simulación)');
}