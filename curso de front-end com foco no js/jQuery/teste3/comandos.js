$(function(){
    $('.button-1').click(function(){
        $('.bg').fadeIn();
    });

    $('form, .button-1').click(function(e){
        e.stopPropagation();
    });

    $('body, .button-2').click(function(){
        $('.bg').fadeOut()
    })

    $('form').submit(function(e){
        e.preventDefault() 
        var nome = $('input[name="nome"]').val()
        var email = $('input[name="email"]').val()
        var telefone = $('input[name="telefone"]').val()
        if(verificarnome(nome) == false){
            inputInvalido($('input[name=nome]'))
            resetarinput($('input[name=nome]'))
        }else if(verificaremail(email) == false){
            inputInvalido($('input[name=email]'))
            resetarinput($('input[name=email]'))
        }else if(verificartelefone(telefone) == false){
            inputInvalido($('input[name=telefone]'))
            resetarinput($('input[name=telefone]'))
        }else{
            console.log('formulario enviado com sucesso')
        }
        


        // funções de verificação

        function verificarnome(nome){
            nomeSplit = nome.split(' ')
            if(nomeSplit.length >= 2){
                for(i = 0; i < nomeSplit.length; i++){
                    if(nomeSplit[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    }
                    else{
                        return false
                    }
                }
            }else{
                return false
            }
        }


        function verificaremail(email){
            if(email.match(/^([a-zA-Z0-9-_@>.<]{1,})+@+([a-z.]{1,})$/) == null){
                return false
            }
        }


        function verificartelefone(telefone){
            if(telefone.match(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}/) == null){
                return false
            }
        }



        // funções para alterar o css dos elementos

        function inputInvalido(el){
            el.css('color', 'red')
            el.css('border', '1px solid red')
            el.val('Campo inválido!!!')
        }

        function resetarinput(el){
            el.focus(function(){
                el.css('color', 'black')
                el.css('border', '1px solid #ccc')
                el.val('')
            });
        }

    })

    
})
