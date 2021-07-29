let valores = [8,1,7,4,2,9]
valores.sort()
/*
for( pos = 0 ; pos<valores.length; pos++){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
} */


for(let pos in valores){     //para cada posição dentro de valores faz:
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}

valores.indexOf(7)  // pesquisa a posição do valor no vetor  se nao tiver o valor no vetor ele retorna -1
console.log(valores)
console.log(`O valor 7 está na posição ${valores.indexOf(7)}`)
