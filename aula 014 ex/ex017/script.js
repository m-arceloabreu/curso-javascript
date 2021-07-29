function gerar(){
    var n = document.getElementById('num')
    var res = document.getElementById('seltab')
    

    if(n.value.length == 0){
        alert ('erro')
    }
    else{   
        var numero = Number(n.value)
        var cont = 1
        res.innerHTML = ''
        for (cont = 1; cont<= 10; cont ++){
                var item = document.createElement('option')
                item.text = `${numero} x ${cont} = ${numero*cont}`
                res.appendChild(item)
                
                }
    }
}
