const relogio = setInterval(function carregar() {
    var foto = document.querySelector('div#imagem')
    var day = document.querySelector('div#day')    
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    var dia = data.getDay()
    var seg = data.getSeconds()

    switch(dia) {
        case 0:
            day.innerHTML = `Hoje é Domingo e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
        break
        case 1:
            day.innerHTML = `Hoje é Segunda-feira e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
            break
        case 2:
            day.innerHTML = `Hoje é Terça-feira e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
            break
        case 3:
            day.innerHTML = `Hoje é Quarta-feira e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
            break
        case 4:
            day.innerHTML = `Hoje é Quinta-feira e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
            break
        case 5:
            day.innerHTML = `Hoje é Sexta-feira e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
            break
        case 6:
            day.innerHTML = `Hoje é Sábado e agora são ${hora} horas, ${min} minutos e ${seg} segundos.`
            break
        default:
            console.log('Erro: Dia invalido')
    }

    if (hora >= 0 && hora < 12) {
        imagem.src = './img/manha.png'
        document.body.style.background = '#fd8400'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = './img/tarde.png'
        document.body.style.background = '#f5b182'
    } else {
        imagem.src = './img/noite.png'
        document.body.style.background = '#05031c'
    }
    
})


