function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var ano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    if (ano.value == '' || ano.value > atual) {
        alert('ERRO! verifique os dados e tente novamente.')
    }
    else {
        var sex = document.getElementsByName('radsex')
        var idade = atual - Number(ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotomenino.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'fotojovem-h.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'fotohomem.png')
            }
            else {
                img.setAttribute('src', 'fotosenhor.png')
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotomenina.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'fotojovem-m.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'fotomulher.png')
            }
            else {
                img.setAttribute('src', 'fotosenhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.<p>`
        res.appendChild(img)
    }

}