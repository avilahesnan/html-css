const elementKick = document.querySelector('#kick');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    kick = e.results[0][0].transcript;
    showKick(kick);
}

function showKick(kick) {
    elementKick.innerHTML = `
        <div>Você disse</div>
        <span class="box">${kick}</span>
    `
}