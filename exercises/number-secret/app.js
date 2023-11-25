alert('Bem-vindo ao site!');
let numberSecret = 5;
let kick;
let trys = 1;


while (kick != numberSecret) {
    
    kick = prompt('Informe um número?')

    if (kick == numberSecret) {
        break;
    } else {

        if (kick > numberSecret) {
            alert(`O número secrete é menor que ${kick}`);
        } else {
            alert(`O número secreto é maior que ${kick}`);
        }

        trys++
    }

    
}

let wordTry = trys > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você venceu! com ${trys} ${wordTry}`);