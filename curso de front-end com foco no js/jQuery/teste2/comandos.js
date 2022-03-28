$(function(){

    $('.box').fadeOut(2000, function(){
        $('.box2').fadeIn(2000, function(){
            $('.box2').fadeOut(2000, function(){
                $('.box').fadeIn(2000, function(){
                    window.alert('acabou a animação do fadeIn e fadeOut')
                })
            })
        })
    })

    // fadeIn serve para o elemento aparecer
    // fadeOut serve para o elemento desaparecer

    $('.box').click(function(){
        $('.classteste').slideToggle(500, function(){
            window.alert("acabou a animação do slideToggle")
        })
    })

    // o slideToggle serve para criar a animação de menu desçendo

    var contTimeout = function(){
        $('.classteste').animate({
            'width': '50%',
            'height': '400px',
            'marginLeft': '300px'
            
        }, 4000)

        // o animate serve para criar animações personalizadas
        // o primeiro parametro e a function(){oque quer que aconteca}
        // o segundo e o tempo que vai demorar essa animação
    };

    $('body').click(function(){
        clearTimeout(timer)
        console.log('o setTimeout foi parado')
        // da pra parar o Timeout caso queira
    })

    var timer = setTimeout(contTimeout, 1000)

    // o setTimeout serve para criar um evento que acontecera em um certo tempo uma unica vez
    // o primeiro parametro e a function(){oque quer que aconteca}
    // o segundo e o tempo que vai demorar para acontecer o evento


    var contInterval = function(){
        window.alert('ola mundo')
    }

    $('body').click(function(){
        clearInterval(timer2)
        console.log('o setInterval foi limpo')
    })

    var timer2 = setInterval(contInterval, 2000)

    // o setInterval serve para criar um evento que acontecera infinitas vezes ou ate que seja parado
    // o primeiro parametro e a function(){oque quer que aconteca}
    // o segundo e o tempo que vai demorar para acontecer o evento




    // adicionando e removendo classes dos elementos dinamicamente

    $('.box3').removeClass('box3')

    // o .removeClass(nome da class sem o ponto) serve para remover a class

    $('#teste').addClass('classteste')

    // o addClass('nome da class sem o ponto') serve para adicionar uma class a um elemento 

    $('.classteste').attr('meuatributoteste','valoratributoteste')

    // o .attr('nome do atributo', 'o valor que quer da a ele') serve para adicionar atributos e dar valores aos atributos




    // clonar e mover elementos

    var elclone = $('.classteste').clone()
    // cria o clone do elemento

    $('.testeclone').html(elclone)
    // adiciona a uma div a copia do elemento

    $('.movervalor').appendTo('.testeclone')
    // o mover tem que fazer mais alguns testes




    // para importar elemntos de outras paginas internas e externas e só usar o ajax

    $.ajax({
        'url':'conteudo.html',
        //'method': 'post',
        //'data':{'nome': 'guilherme', 'idade': '23'}
    }).done(function(data){
        $('.center').append(data)
    })
    // o ajax tem que fazer mais ums testes com o xamp ligado




    // testando na pratica o ajax

    $('.n1').click(function(){
        $.ajax({
            'url': 'home.html'
            //'method': 'post',
            //'data':{'nome': 'guilherme', 'idade': '23'}
        }).done(function(data){
            $('.container-pagina').html(data)
        })
    })

    $('.n2').click(function(){
        $.ajax({
            'url': 'conteudo.html'
            //'method': 'post',
            //'data':{'nome': 'guilherme', 'idade': '23'}
        }).done(function(data){
            $('.container-pagina').html(data)
        })
    })

    $('.n3').click(function(){
        $.ajax({
            'url': 'home.html'
            //'method': 'post',
            //'data':{'nome': 'guilherme', 'idade': '23'}
        }).done(function(data){
            $('.container-pagina').html(data)
        })
    })

});
