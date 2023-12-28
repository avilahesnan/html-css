const containerVideos = document.querySelector('.videos__container');
const search = document.querySelector('.pesquisar__input');
const btnCategory = document.querySelectorAll('.superior__item');

async function searchAndShowVideos() {
    try {
        const api = await fetch("http://localhost:3000/videos");
        const videos = await api.json();

        videos.forEach(video => {
            if (video.categoria == "") {
                throw new Error('Vídeo não tem categoria');
            }
            containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </li>
            `;
        })
    } catch (error) {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`;
    }  
}

function filterSearch() {
    const videos = document.querySelectorAll('.videos__item');
    const valueFilter = search.value.toLowerCase();

    videos.forEach((video) => {
        const title = video.querySelector('.titulo-video').textContent.toLowerCase();
        video.style.display = valueFilter ? title.includes(valueFilter) ? 'block' : 'none' : 'block';
    });
}

function filterCategory(name) {
    const videos = document.querySelectorAll('.videos__item');

    videos.forEach((video) => {
        let category = video.querySelector('.categoria').textContent.toLowerCase();
        let valueFilter = name.toLowerCase();
        video.style.display = !category.includes(valueFilter) && valueFilter != 'tudo' ? 'none' : 'block';
    });
}

searchAndShowVideos();
search.addEventListener('input', filterSearch);

btnCategory.forEach((btn) => {
    let nameCategory = btn.getAttribute('name');
    btn.addEventListener('click', () => filterCategory(nameCategory));
});
