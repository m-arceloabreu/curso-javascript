

function contar(){
    var initi = document.getElementById('inicio')
    var finali = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    

    
    if (initi.value.length == 0 || finali.value.length == 0 || pas.value.length == 0){
       alert('Erro')
    }
    else if (pas.value <= 0){
        alert ('EROO')
    }
    else{
        var i = Number(initi.value)
        var f = Number(finali.value)
        var p = Number(pas.value)
        if(i<f){ //contagem progressiva
            for (var c = i; c<= f; c += p){
                res.innerHTML += ` ${c}`
            }
        }
        else{//contagem regressiva
            for (var c = i; c>= f; c -= p){
                res.innerHTML += ` ${c}`
            }
        }
    }
  
}