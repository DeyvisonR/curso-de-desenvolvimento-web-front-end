$(function(){
    $('section').eq(1).css('background-color', 'blue');
    $('section').eq(2).css('background-color', 'cyan');

    var indiceAtual = 0;
    var indiceMaximo = $('.conteudo img').length;


    adicionarBullets();
    initSlider();
    cliqueSlider();


    // funções para o slider funcionar

    function adicionarBullets(){
        for(i= 0; i < indiceMaximo; i++){
            $('.bullets-nav').append('<span></span>');
        }
    }

    function initSlider(){
        $('.conteudo img').eq(indiceAtual).fadeIn(2000);
        $('.bullets-nav span').eq(indiceAtual).css('background-color','aqua').css('border', '1px solid black');
        setInterval(function(){
            alternarSlider();
        }, 5000);
    }

    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.conteudo img').stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.conteudo img').eq(indiceAtual).stop().fadeIn(2000);
            $('.bullets-nav span').css('background-color','#ccc').css('border', '0px solid black');
            $('.bullets-nav span').eq(indiceAtual).css('background-color','aqua').css('border', '1px solid black');
        });
    }

    function alternarSlider(){
        $('.conteudo img').eq(indiceAtual).stop().fadeOut(2000);
        indiceAtual ++;
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0;
        }
        $('.bullets-nav span').css('background-color','#ccc').css('border', '0px solid black');
        $('.bullets-nav span').eq(indiceAtual).css('background-color','aqua').css('border', '1px solid black');
        $('.conteudo img').eq(indiceAtual).stop().fadeIn(2000);
    }





    // aqui eu estou animando elementos com base no scrolltop

    $(window).scroll(function(){
        $('.sessao').each(function(){
            var windowOffY = $(window).scrollTop();
            var windowHeight = $(window).height();
            var elOffY = $(this).offset().top;
            if(elOffY < (windowOffY + windowHeight) && elOffY+30+$(this).height() > windowOffY){
                $('a').css('border-bottom', '0');
                var target = $(this).attr('target');
                $("."+target).css('border-bottom', '2px solid black')
                
            }
        })
    })
})
