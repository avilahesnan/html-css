function contar() {
    let ini = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if (ini.value == '' || fim.value == '' || passo.value == '') {
        res.innerHTML = 'Impossível contar!'
    }
    else {
        res.innerHTML = 'Contando:<br>'
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if (p == 0) {
            alert(`${p} é um passo inválido, considerando o PASSO 1`)
            p = 1
        }
        if (i < f && p < 0) {
            alert('Não é possivél contar com esses dados!')
        }
        else {
            if ( i < f && p > 0) {
                for(let c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            else if (p < 0){
                for(let c = i; c >= f; c += p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            else {
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}