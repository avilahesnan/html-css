function aleatorio(N) {
    return Math.round(Math.random()*N);
}

function prepararJanela(titulo, url) {
    tituloJanela.innerHTML = titulo;
    iframeJanela.src = url;
    $("#janelaModal").css("background-color", 
    `rgba(${aleatorio(255)}, ${aleatorio(255)}, ${aleatorio(255)}, 0.5)`);
}

function excluirFavorito(btn) {
    $(btn).parent().remove();
}

function carregarFavoritos() {
   $("#divFavoritos").load("favoritos.html")
}

//Código que executa após o carregamento da página
$(() => {
    carregarFavoritos();

    $(".btn-suporte").click(() => {
        $(".div-chat").toggleClass("d-none");
    });

    $.get( "header.html", (dados) => {
        $("body").prepend(dados)
    })

    $.get( "footer.html", (dados) => {
        $("body").append(dados)
    })
});