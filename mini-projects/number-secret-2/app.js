let listNumbers = [];
let maxNumber = 5;
let numberSecret = generateNumberRandom();
let trys = 1;

displayTextInitial();

function displayTextScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2} );
}

function displayTextInitial() {
    let paragraph = `Escolha um número entre 1 e ${maxNumber}`;
    displayTextScreen('h1', 'Jogo do número secreto');
    displayTextScreen('p', paragraph);
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
    let numberChosen = parseInt(Math.random() * maxNumber + 1);
    let quantityElements = listNumbers.length;

    if (quantityElements == maxNumber) {
        listNumbers = [];
    }

    if (listNumbers.includes(numberChosen)) {
        return generateNumberRandom();
    } else {
        listNumbers.push(numberChosen);
        return numberChosen;
    }
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