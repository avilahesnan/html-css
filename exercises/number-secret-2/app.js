let numberSecret = generateNumberRandom();
let trys = 1;

displayTextInitial();

function displayTextScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function displayTextInitial() {
    displayTextScreen('h1', 'Jogo do número secreto');
    displayTextScreen('p', 'Escolha um número entre 1 e 10');
}

function checkKick() {
    let kick = document.querySelector('input').value;
    
    if (kick == numberSecret) {
        let wordTrys = trys > 1 ? 'tentativas' : 'tentativa';
        let msgTry = `Parabéns você venceu! com ${trys} ${wordTrys}`;

        displayTextScreen('h1', 'Acertou!');
        displayTextScreen('p', msgTry);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (kick > numberSecret) {
            displayTextScreen('p', 'O número secreto é menor');
        } else {
            displayTextScreen('p', 'O número secreto é maior');
        }
        trys++;

        cleanField();
    }
}

function generateNumberRandom() {
    return parseInt(Math.random() * 10 + 1);
}

function cleanField() {
    kick = document.querySelector('input');
    kick.value = '';
}

function restart() {
    cleanField();
    trys = 1;
    displayTextInitial();
    numberSecret = generateNumberRandom();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}