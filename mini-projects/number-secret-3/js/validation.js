function checkValue(kick) {
    const number = +kick;

    if (kickInvalid(number)) {
        if (kick.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="btn-again" class="btn-play">Jogar novamente</button>
            `;
            document.body.style.backgroundColor = 'black';
        } else {
            elementKick.innerHTML += '<div>Valor inválido</div>';
        }
    }

    if (highestOrLowestThanAllowed(number)) {
        elementKick.innerHTML += `<div>Valor inválido: Fale um número entre ${lowestValue} e ${highestValue}</div>`;
        return;
    }

    if (number === numberSecret) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numberSecret}</h3>
            <button id="btn-again" class="btn-play">Jogar novamente</button>
        `;
    } else if (number > numberSecret) {
        elementKick.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        elementKick.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    }
}

function highestOrLowestThanAllowed(number) {
    return number > highestValue || number < lowestValue;
}

function kickInvalid(number) {
    return Number.isNaN(number);
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'btn-again') {
        window.location.reload();
    }
})
