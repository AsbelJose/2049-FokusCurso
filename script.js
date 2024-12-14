//SELECCION DE ELEMENTOS DEL DOM Y CREACION DE VARIABLES.

const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const botonIniciarPausar = document.querySelector('#start-pause');
const textoIniciarPausar = document.querySelector('#start-pause span');
const tiempoEnPantalla = document.querySelector('#timer');

const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const audioPlay = new Audio('./sonidos/play.wav');
const audioPausa = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');

let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;

// LOGICA
function cambiarContexto (contexto) {
    botones.forEach(function (contexto) {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto',contexto);
    banner.setAttribute('src', `./imagenes/${contexto}.png`);

    switch (contexto) {
        case 'enfoque':
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong" >sumérgete en lo que importa.</strong>`
            break;
        
        case 'descanso-corto':
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro? ,<br>
                <strong class="app__title-strong" >¡Haz una pausa corta!</strong>`
            break;
        
        case 'descanso-largo':
            titulo.innerHTML = `
            Hora de volver a la superficie ,<br>
                <strong class="app__title-strong" >Haz una pausa larga.</strong>`
            break;

        default:
            break;
    }
};

musica.loop = true;

function mostrarTiempo() {
    const tiempo = tiempoTranscurridoEnSegundos
    tiempoEnPantalla.innerHTML = `${tiempo}`;
};

mostrarTiempo();

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
    textoIniciarPausar.textContent = 'Comenzar';
};

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos <= 0){
        audioTiempoFinalizado.play();
        alert('tiempo final');
        reiniciar();
        return
    };
    textoIniciarPausar.textContent = 'Pausar'
    tiempoTranscurridoEnSegundos -= 1;
    mostrarTiempo();
};

function iniciarPausar() {
    if (idIntervalo) {
        audioPausa.play();
        reiniciar()
        return
    };
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva, 1000)
};

//CAPTURA DE EVENTOS DEL DOM
botonCorto.addEventListener('click', () => {
    cambiarContexto ('descanso-corto');
    botonCorto.classList.add('active');
});

botonEnfoque.addEventListener('click', () => {
    cambiarContexto ('enfoque');
    botonEnfoque.classList.add('active');
});

botonLargo.addEventListener('click', () => {
    cambiarContexto ('descanso-largo');
    botonLargo.classList.add('active');
});

inputEnfoqueMusica.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }
    else{
        musica.pause();
    }
});

botonIniciarPausar.addEventListener('click', iniciarPausar);


