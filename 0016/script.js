function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var imgres = document.getElementById('imgres')

    if(fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homen'
            if (idade > 0 && idade < 5){
                img.setAttribute('src','baby.png')
            }else if(idade < 12){
                img.setAttribute('src','menino.png')
            }else if(idade < 18){
                img.setAttribute('src','garoto.png')
            }else if(idade < 40){
                img.setAttribute('src','jovemman.png')
            }else{
                img.setAttribute('src','oldman.png')
            }
        }else{
            gênero = 'Mulher'
            if (idade > 0 && idade < 5){
                img.setAttribute('src','baby.png')
            }else if(idade < 12){
                img.setAttribute('src','menina.png')
            }else if(idade < 18){
                img.setAttribute('src','garota.png')
            }else if(idade < 40){
                img.setAttribute('src','jovemmulher.png')
            }else{
                img.setAttribute('src','oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gênero} com ${idade} anos.`
        imgres.appendChild(img)
    }

}