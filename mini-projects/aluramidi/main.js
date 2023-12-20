function playSound (idElement) {
    const element = document.querySelector(idElement);
 
    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
    
}

const listSounds = document.querySelectorAll('.tecla');

for (let count = 0; count < listSounds.length; count++) {

    const sounds = listSounds[count];
    const sound = sounds.classList[1];

    const idSound = `#som_${sound}`;
    
    sounds.onclick = function () {
        playSound(idSound);
    }

    sounds.onkeydown = function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            sounds.classList.add('ativa');
        }
    }

    sounds.onkeyup = function () {
        sounds.classList.remove('ativa');
    }
}
