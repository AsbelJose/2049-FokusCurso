//SELECCION DE ELEMENTOS DEL DOM

const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');

// LOGICA
function cambiarContexto (contexto) {
    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`);
};

//CAPTURA DE EVENTOS DEL DOM
botonCorto.addEventListener('click', () => {
    cambiarContexto ('descanso-corto');
});

botonEnfoque.addEventListener('click', () => {
    cambiarContexto ('enfoque');

});

botonLargo.addEventListener('click', () => {
    cambiarContexto ('descanso-largo');

});


