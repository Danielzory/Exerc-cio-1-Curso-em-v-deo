function carregar(){
 let msg = document.getElementById('msg')
 let img = document.getElementById('img')
 var data = new Date()
 var hora = data.getHours()
 //var hora = 15
 msg.innerHTML = `Agora são ${hora} Horas`    

if(hora < 12){
    msg.innerHTML += `<p>Bom dia! Vamos trabalhar</p>`
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
}else if(hora < 18){
    msg.innerHTML += `<p>Boa tarde! Hora dos exercícios</p>`
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
}else{
    msg.innerHTML += `<p>Boa noite! Hora da boa música e estudar</p>`
    img.src = 'noite.png'
    document.body.style.background = 'black'
}

}