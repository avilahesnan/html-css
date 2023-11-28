let friends = [];

function add() {
    let friend = document.getElementById('nome-amigo');

    if (friend.value == '') {
        alert('Informe o nome do amigo!');
        return;
    };

    if (friends.includes(friend.value)) {
        alert('Nome já adicionado!');
        return;
    };

    let list = document.getElementById('lista-amigos');
    friends.push(friend.value);

    if (list.textContent == '') {
        list.textContent = friend.value;
    } else {
        list.textContent += ', ' + friend.value;
    };

    friend.value = '';
};

function draw() {

    if (friends.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    };

    embaralhar(friends);

    let drawn = document.getElementById('lista-sorteio');

    for (let i = 0; i < friends.length; i++) {
        if (i == friends.length - 1) {
            drawn.innerHTML = drawn.innerHTML + friends[i] +' --> ' +friends[0] + '<br/>';
        } else {
            drawn.innerHTML = drawn.innerHTML + friends[i] +' --> ' +friends[i + 1] + '<br/>';
        };
    };
};

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    };
};

function restart() {
    friends = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};