
var num = document.getElementById('num')
var lista = document.getElementById('seltab')
let res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}
function inLista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado: ${num.value}`
        lista.appendChild(item)
        res.innerHTML ==''

    }else{
        alert ('erro')

    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('adicione valores')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            
            if (valores[pos]> maior)
                maior = valores[pos]
            if (valores[pos]<menor)
                menor = valores[pos]
        }
        media = soma/tot

        res.innerHTML ==''
        res.innerHTML += `<p> Ao todo temos ${tot} numeros adicionados</p>`
        res.innerHTML += `<p>O maior valor informado é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é: ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>Media dos valores: ${media}</p>`
    }
}