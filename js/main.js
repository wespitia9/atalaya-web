// Módulo Principal: Conecta la API con la UI

import { obtenerUsuarios } from './api.js';
import { renderizarTestimonios, validarFormulario } from './ui.js';
// Importamos el módulo de UX
import { cargarTema, alternarTema } from './theme.js';

const contenedor = document.getElementById('contenedor-testimonios');
const formulario = document.querySelector('form');
const btnTema = document.getElementById('btn-tema');

document.addEventListener('DOMContentLoaded', async () => {
    // PASO 1: Cargar preferencias del usuario (UX Personalizada)
    cargarTema();

    // PASO 2: Cargar datos
    const usuarios = await obtenerUsuarios();
    if (usuarios.length > 0) {
        renderizarTestimonios(usuarios, contenedor);
    }
});

formulario.addEventListener('submit', (e) => {
    validarFormulario(e);
});

// PASO 3: Escuchar la interacción del usuario
btnTema.addEventListener('click', () => {
    alternarTema();
});