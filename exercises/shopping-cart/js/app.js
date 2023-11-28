let total;
clean();

function add() {
    let product = document.getElementById('produto').value;
    let nameProduct = product.split('-')[0];
    let value = product.split('R$')[1];
    let quantity = document.getElementById('quantidade').value;
    let price = quantity * value;
    let cart = document.getElementById('lista-produtos');

    if (quantity != 0) {
        cart.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantity}x</span> ${nameProduct} <span class="texto-azul">R$${value}</span>
        </section>
        `;
        total += price;
        let fieldTotal = document.getElementById('valor-total');
        fieldTotal.textContent = `R$ ${total}`;
        document.getElementById('quantidade').value = 0;
    } else {
        alert('Informe a quantidade do produto!');
    };
};

function clean() {
    total = 0;
    document.getElementById('quantidade').value = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
};