function playSound (idElement) {
    document.querySelector(idElement).play();
}

const listSounds = document.querySelectorAll('.tecla');

let count = 0;

while (count < listSounds.length) {

    const sounds = listSounds[count];
    const sound = sounds.classList[1];

    const idSound = `#som_${sound}`;
    
    sounds.onclick = function () {
        playSound(idSound);
    }
    
    count++;
}
