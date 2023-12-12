alert('Bem-vindo ao site!');
let numberMax = 100;
let numberSecret = parseInt(Math.random() * numberMax + 1);
let kick;
let trys = 1;

while (kick != numberSecret) {
    
    kick = prompt(`Informe um número entre 1 e ${numberMax}`);

    if (kick == numberSecret) {
        break;
    } else {

        if (kick > numberSecret) {
            alert(`O número secrete é menor que ${kick}`);
        } else {
            alert(`O número secreto é maior que ${kick}`);
        }

        trys++;
    }

}

let wordTry = trys > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você venceu! com ${trys} ${wordTry}`);