const elementKick = document.querySelector('#kick');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function onSpeak(e) {
    kick = e.results[0][0].transcript;
    showKick(kick);
    checkValue(kick);
}

function showKick(kick) {
    elementKick.innerHTML = `
        <div>Você disse</div>
        <span class="box">${kick}</span>
    `;
}