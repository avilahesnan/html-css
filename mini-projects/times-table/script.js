function tabuada() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tabuada')
    if (num.value == '') {
        alert('Por favor, digite um número!')
    }
    else {
        n = Number(num.value)
        tab.innerHTML = ''
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}