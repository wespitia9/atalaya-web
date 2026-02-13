// Módulo de Tema: Maneja el Modo Oscuro y la Persistencia (LocalStorage)

const TEMA_KEY = 'atalaya_tema';

// Función 1: Recuperar memoria del usuario
export function cargarTema() {
    // Consultamos LocalStorage (memoria de largo plazo)
    const temaGuardado = localStorage.getItem(TEMA_KEY);

    if (temaGuardado) {
        // Aplicamos el tema guardado en el HTML
        document.documentElement.setAttribute('data-bs-theme', temaGuardado);
    }
}

// Función 2: Microinteracción de cambio de tema
export function alternarTema() {
    const html = document.documentElement;
    const temaActual = html.getAttribute('data-bs-theme') || 'light';

    // Invertimos el tema
    const nuevoTema = temaActual === 'light' ? 'dark' : 'light';

    // 1. Feedback Visual: Bootstrap maneja el contraste y colores
    html.setAttribute('data-bs-theme', nuevoTema);

    // 2. Persistencia: Guardamos la preferencia para el futuro
    localStorage.setItem(TEMA_KEY, nuevoTema);
}