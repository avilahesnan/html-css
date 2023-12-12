function alterStatus(id) {
    let gameclicked = document.getElementById(`game-${id}`);
    let img = gameclicked.querySelector('.dashboard__item__img');
    let btn = gameclicked.querySelector('.dashboard__item__button');
    
    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented');
        btn.classList.remove('dashboard__item__button--return');
        btn.textContent = 'Alugar';
    } else {
        img.classList.add('dashboard__item__img--rented');
        btn.classList.add('dashboard__item__button--return');
        btn.textContent = 'Devolver';
    };
};
