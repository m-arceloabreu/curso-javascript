function carregar(){
var msg = document.getElementById('msg')
var img = document.querySelector('img#imagem')
//var data =  new Date()
//var hora = data.getHours()
var hora = 15
msg.innerHTML = `Agora são: ${hora} horas`

    if (hora>= 0 && hora <12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e3cd9f'
        
    }
    else if(hora>=12 && hora<18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#aa7502'
        
    }
    else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background ='#230052'
        
    }

}