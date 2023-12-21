const html = document.querySelector('html');
const focusBtn = document.querySelector('.app__card-button--foco');
const shortBtn = document.querySelector('.app__card-button--curto');
const longBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const text = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const musicFocusInput = document.querySelector('#alternar-musica');
const music = new Audio('sons/luna-rise-part-one.mp3');
const startPauseBtn = document.querySelector('#start-pause');
const startOrPauseBtn = document.querySelector('#start-pause span');
const audioPlay = new Audio('sons/play.wav');
const audioPause = new Audio('sons/pause.mp3');
const audioTimeFinalized = new Audio('sons/beep.mp3');
const screenTime = document.querySelector('#timer');
const icon = document.querySelector('.app__card-primary-butto-icon');

let elapsedTimeSeconds = 1500;
let intervalId = null;

music.loop = true;

function alterContext(context) {
    showTime();
    buttons.forEach(function (context) {
        context.classList.remove('active');
    })
    html.setAttribute('data-contexto', context);
    banner.setAttribute('src', `imagens/${context}.png`);
    switch (context) {
        case "foco":
            text.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            text.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            text.innerHTML = `Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;
        default:
            break;
    }
}

function startOrPause() {
    if (intervalId) {
        audioPause.play();
        zero();
        icon.setAttribute('src', `imagens/play_arrow.png`);
        return;
    }
    audioPlay.play();
    intervalId = setInterval(countdown, 1000);
    startOrPauseBtn.textContent = "Pausar";
    icon.setAttribute('src', `imagens/pause.png`);
}

function zero() {
    clearInterval(intervalId);
    intervalId = null;
    startOrPauseBtn.textContent = "Começar";
}

function showTime() {
    const time = new Date(elapsedTimeSeconds * 1000);
    const timeFormated = time.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'});
    screenTime.innerHTML = `${timeFormated}`;

}

const countdown = () => {
    if(elapsedTimeSeconds <= 0) {
        audioTimeFinalized.play();
        zero();
        return;
    }
    elapsedTimeSeconds -= 1;
    showTime();
}

startPauseBtn.addEventListener('click', startOrPause);

musicFocusInput.addEventListener('change', () => {
    music.paused ? music.play() : music.pause();
});

focusBtn.addEventListener('click', () => {
    elapsedTimeSeconds = 1500;
    alterContext('foco');
    focusBtn.classList.add('active');
});

shortBtn.addEventListener('click', () => {
    elapsedTimeSeconds = 300;
    alterContext('descanso-curto');
    shortBtn.classList.add('active');
});

longBtn.addEventListener('click', () => {
    elapsedTimeSeconds = 900;
    alterContext('descanso-longo');
    longBtn.classList.add('active');
});

showTime();