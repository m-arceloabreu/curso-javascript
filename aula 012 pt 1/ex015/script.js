
function verificar(){
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    
    var fano = document.getElementById('data')
    
    var res = document.getElementById('res')
    
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fano.value.length == 0 || fano.value > anoAtual){
        alert('ERRO')
    }
    else{
        
        res.style.textAlign = 'center'
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(fano.value)

        var genero =''
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <12){
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if(idade >= 12 && idade < 21){
                img.setAttribute('src','foto-jovem-m.png')
            }
            else if(idade < 50){
                img.setAttribute('src','foto-adulto-m.png')
            }
            else {
                img.setAttribute ('src','foto-idoso-m.png')
            }
        }
        else{
            genero = 'Mulher'
            if(idade >=0 && idade<=12){
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if(idade < 21){
                img.setAttribute('src','foto-jovem-f.png')
            }
            else if(idade < 50){
                img.setAttribute('src','foto-adulto-f.png')
            }
            else{
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}