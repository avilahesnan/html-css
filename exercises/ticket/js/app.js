function buy() {
    let type = document.getElementById('tipo-ingresso').value;
    let quantity = parseInt(document.getElementById('qtd').value);

    buyType(quantity, type);
};

function buyType(quantity, type) {
    let qtdType = parseInt(document.getElementById(`qtd-${type}`).textContent);
    
    if (quantity > qtdType) {
        alert(`Quantidade indisponível para tipo ${type}`);
    } else {
        qtdType -= quantity;
        document.getElementById(`qtd-${type}`).textContent = qtdType;
        alert('Compra realizada com sucesso!');
    };
};