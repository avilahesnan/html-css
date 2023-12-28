const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const elementInsertBooks = document.querySelector('#livros');
let books = [];

async function getSearchBooks() {
    const response = await fetch(endPointAPI);
    books = await response.json();
    console.table(books);
    showBooks(books);
}

function showBooks(listBooks) {
    listBooks.forEach(book => {
        elementInsertBooks.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${book.imagem}" alt="${book.alt}" />
            <h2 class="livro__titulo">${book.titulo}</h2>
            <p class="livro__descricao">${book.autor}</p>
            <p class="livro__preco" id="preco">${book.preco}</p>
            <div class="tags">
                <span class="tag">${book.categoria}</span>
            </div>
        </div>
        `
    });
}

getSearchBooks();