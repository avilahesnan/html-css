const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementInsertBooks = document.querySelector('#livros');
const buttons = document.querySelectorAll('.btn');
const btnOrderPrice = document.querySelector('#btnOrdenarPorPreco');
const elementTotalBooks = document.querySelector('#valor_total_livros_disponiveis');
let books = [];

async function getSearchBooks() {
    const response = await fetch(endPointAPI);
    books = await response.json();
    let booksDiscount = applyDiscount(books);
    showBooks(booksDiscount);
}

function showBooks(listBooks) {
    elementTotalBooks.innerHTML = '';
    elementInsertBooks.innerHTML = '';
    listBooks.forEach(book => {
        let availability = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        elementInsertBooks.innerHTML += `
        <div class="livro">
            <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">${book.titulo}</h2>
            <p class="livro__descricao">${book.autor}</p>
            <p class="livro__preco" id="preco">${book.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>
        `;
    });
}

function applyDiscount(books) {
    const discount = 0.2;
    booksDiscount = books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)};
    });
    return booksDiscount;
}

function filterBooks() {
    const elementBtn = document.getElementById(this.id);
    const category = elementBtn.value;
    let booksFiltered = category == 'disponivel' ? filterAvailability() : filterCategory(category);
    showBooks(booksFiltered);
    if (category == 'disponivel') {
        const valueTotal = valueTotalBooks(booksFiltered);
        showTotalBooks(valueTotal);
    }
}

function filterCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterAvailability() {
    return books.filter(book => book.quantidade > 0);
}

function orderBooksPrice() {
    booksOrdered = books.sort((a, b) => a.preco - b.preco);
    showBooks(booksOrdered);
}

function showTotalBooks(valueTotal) {
    elementTotalBooks.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valueTotal}</span></p>
        </div>
    `;
}

function valueTotalBooks(books) {
    return books.reduce((acc, book) => acc + book.preco, 0).toFixed(2);
}

getSearchBooks();
buttons.forEach(btn => btn.addEventListener('click', filterBooks));
btnOrderPrice.addEventListener('click', orderBooksPrice);
