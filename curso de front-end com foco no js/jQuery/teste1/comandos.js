$(function(){

    // colocando estilos no css pelo jQuery

    $('.teste, .teste-2').css("background-color",'orange').css('line-height', '80px');
    $('.teste-2').css('background-color', 'green').css('display', 'none');




    // colocando eventos no site com o jQuery

    contTeste = 0;

    $(".teste").click(function(){

        contTeste++;
        // evento de quando clica no elemento

        if(contTeste % 2 == 1){
        $('.teste-2').css('display', 'block');
        }else{
            $('.teste-2').css('display', 'none');
        }

    });

    $(".teste-2").hover(function(){
        // evento de quando passa o mouse no elemento
        $(".teste-2").css("background-color", "gray");
    },function(){
        // aqui e para colocar oque vai ficar depois de mostrar o hover
        $(".teste-2").css("background-color", "green");
    });

    $('textarea').focus(function(){
        // evento de quando clicka numa caixa de texto
        console.log("esse comando ira sair quando eu focar no textarea ");
    }).blur(function(){
        // evento de quando sai da caixa de texto
        console.log("esse outro comando ira sair quando eu parar de focar no textarea ");
    });

    $('.center select').change(function(){
        // evento de quando muda a opção do select
        console.log("esse comando ira sair quando eu mudar de opção no select ");
    });

    $(window).scroll(function(){
        // evento de quando mexe no scroll
    });

    var timer;
    $(window).resize(function(){
        // evento de quando redimenciona a tela
    })

    $('body').click(function(){
        $('.teste').css("display", 'none');
    })

    $('.teste').click(function(e){
        e.stopPropagation();
    })

    $("a").click(function(e){
        e.preventDefault();
    })

    $('.box-teste').on().click(function(){
        $('body').css('background-color', 'purple')
        // nao sei exatamente oque a função .on() faz(pesquisar depois)
    })

    $('input[type="text"]').keyup(function(){
        //$(this).css('background-color', 'green');
        $('input[type="text"]').eq($(this).index() - 3).css('background-color', 'green');
        // .index() pega a posição do elemento
        // o this serve para pegar o elemento usado
        // se ativa quando para de segurar a tecla
    })

    $('.formteste').submit(function(){
        var testeinput = $('input[type="text"]').val();
        var nome = $('input[name="nome"]').val();
        var idade = $('input[name="idade"]').val();
        var sobrenome = $('input[name="sobrenome"]').val();
        console.log(nome, idade, sobrenome);
        return false
    })


    // para criar uma variavel de um elemento do css ou do html com jQuery basta usar:

    var element = $('.teste');

    // e para usala e só usar:

    element.css("width", '600px').css("margin", '0 auto');




    // manipulando elementos css de forma dinamica

    $('.teste-2').height('300px') // no lugar do height pode colocar qualquer outro estilo que vai funcionar ex:
    // $('class, id ou tag').estilo('parametro do estilo');

    // para que o javascript mostre o parametro daquele estilo basta ultilizar o(vou ultilizar o console.log() apenas para testar):
    console.log($('.teste-2').height());

    console.log($('.teste-2').innerWidth());
    // o innerWidth mostra ou define o tamanho contando com o padding

    console.log($('.teste-2').outerWidth());
    // o outerWidth mostra ou define o tamanho contando com o padding e a borda




    // manipulando o html pelo jQuery
    
    var el = $('.teste');
    el.html( el.html() + `
    <div class="box-teste">
        <div><p>elemento 1</p></div>
        <div><p>elemento 2</p></div>
        <div><p>elemento 3</p></div>
    </div>`);
    el.html( el.html() + `
    <div class="box-teste2">
        <div><p>elemento 4</p></div>
        <div><p>elemento 5</p></div>
        <div><p>elemento 6</p></div>
    </div>
    <div class="teste-text"></div>`);


    // o .html() serve para adicionar elementos dentro de uma tag ou div no html
    // lembrando que ele apaga tudo oque tem dentro então para nao apagar tem que colocar o elemento.html() + oque deseja adicionar


    // append serve para adicionar elementos no final da tag/div

    $(".box-teste2").append('<p>teste do append</p>');


    // prepend serve para adicionar elementos no inicio da tag/div

    $(".box-teste2").prepend('<p>teste do prepend</p>');

    // para usar o append e o prepend e colocar estilos neles e so mudar a ordem e colocar o To

    $('<p>teste do append</p>').appendTo(".box-teste2").css('color', 'blue');

    $('<p>teste do prepend</p>').prependTo(".box-teste2").css('color', 'green');

    // usando o after e o before pra colocar elementos antes e depois das tags/divs

    $(".box-teste2").after('<h3>teste do after</h3>');

    // o after serve para colocar elementos depois da tag/div

    $(".box-teste2").before('<h3>teste do before</h3>');

    // o before serve para colocar elementos antes da tag/div


    // para usar eles e poder colocar estilos neles basta inverter a orden e colocar o insert

    $('<h3>teste do after</h3>').insertAfter(".box-teste2").css('color', 'red');

    $('<h3>teste do before</h3>').insertBefore(".box-teste2").css('background-color', 'green');

    // para escolher um elemento dentre vario que tem a mesma classe ou tag e só usar o eq()

    $('.teste-2').eq(1).css('background-color', 'pink');

    // .remove() remove o elemento

    $('.teste-2').eq(1).remove();




    // colocando codigo html como texto no html
    
    $('.teste-text').text('<div><p>teste</p></div>');




    // testando algumas funções nativas do javascript para manipulação de strings

    $('button').click(function(){
    var texto = $('textarea').val();
    console.log(texto);

    // split dividi o texto

    var textosplit = texto.split(" ");
    // no parenteses coloca o parametro pra quando tiver dividir o texto
    console.log(textosplit);

    // substr pega uma parte do texto

    var textodiv = texto.substr(0, 5);
    console.log(textodiv);
    console.log(texto.substr(0, 1));
    // no parenteses pode colocar da onde ate aonde vai pegar do texto

    // trim tira os espaços do inicio e do final

    console.log(texto.trim());

    // agr todos eles juntos menos o split

    console.log(texto.trim().substr(0,5));
    })




    
});
