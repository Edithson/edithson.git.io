//alert("hello world")

$(document).ready(function(){
    //la page d'acceille
    $('.aumenu').hide()
    $('.tlaumenu').hide()
    $('.telephone p').hide()
    $('.p1').css({'color':'red','font-size': 'xx-large'})
    //n'oublions pas le plat du jours
    $('.aumenu').css({'background-image': 'url(../médias/HKEU3740.JPG)'})
    $('#1').css({'font-size': 'large','color':'red'})
    $('#2').css({'font-size': 'medium','color':'blue'})
    $('#3').css({'font-size': 'medium','color':'blue'})
    $('#4').css({'font-size': 'medium','color':'blue'})
    $('#5').css({'font-size': 'medium','color':'blue'})
    $('.recette2').css({'margin-left': '1000px','transition': '1s'})
    $('.recette3').css({'margin-left': '1000px','transition': '1s'})
    $('.recette4').css({'margin-left': '1000px','transition': '1s'})
    $('.recette5').css({'margin-left': '1000px','transition': '1s'})
    $('.recette1').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})

    $('.p1').click(function(){
        $('.aumenu').hide()
        $('.aumenu').css({'display':'none'})
        $('.tlaumenu').hide()
        $('.tlaumenu').css({'display':'none'})
        $('.platdujour').show()
        $('.p1').css({'color':'red','font-size': 'xx-large'})
        $('.p2').css({'color':'blue','font-size': 'x-large'})
        $('.tlp2').css({'color':'blue','font-size': 'x-large'})

        //n'oublions pas le plat du jours
        $('.aumenu').css({'background-image': 'url(../médias/HKEU3740.JPG)'})
        $('#1').css({'font-size': 'large','color':'red'})
        $('#2').css({'font-size': 'medium','color':'blue'})
        $('#3').css({'font-size': 'medium','color':'blue'})
        $('#4').css({'font-size': 'medium','color':'blue'})
        $('#5').css({'font-size': 'medium','color':'blue'})
        $('.recette2').css({'margin-left': '1000px','transition': '1s'})
        $('.recette3').css({'margin-left': '1000px','transition': '1s'})
        $('.recette4').css({'margin-left': '1000px','transition': '1s'})
        $('.recette5').css({'margin-left': '1000px','transition': '1s'})
        $('.recette1').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})
    })


    //la page du menu pour grand et petit écrant
    $('.p2').click(function(){
        $('.aumenu').show()
        $('.platdujour').css({'display':'none'})
        $('.platdujour').hide()
        $('.p2').css({'color':'red','font-size': 'xx-large'})
        $('.p1').css({'color':'blue','font-size': 'x-large'})
    })
    $('.tlp2').click(function(){
        $('.tlaumenu').show()
        $('.platdujour').css({'display':'none'})
        $('.platdujour').hide()
        $('.tlp2').css({'color':'red','font-size': 'xx-large'})
        $('.p1').css({'color':'blue','font-size': 'x-large'})
    })
            //couleur du menu au passage de la souris
            $('#1 ,#2 ,#3 ,#4 ,#5').hover(function(){
                $(this).css({'font-size': 'large'}).siblings("a").css({'font-size': 'medium'})
            })
            //sélection du menu avec le click
    $('#1').click(function(){

        $('.aumenu').css({'background-image': 'url(../médias/HKEU3740.JPG)'})
        $('#1').css({'font-size': 'large','color':'red'})
        $('#2').css({'font-size': 'medium','color':'blue'})
        $('#3').css({'font-size': 'medium','color':'blue'})
        $('#4').css({'font-size': 'medium','color':'blue'})
        $('#5').css({'font-size': 'medium','color':'blue'})
        $('.recette2').css({'margin-left': '1000px','transition': '1s'})
        $('.recette3').css({'margin-left': '1000px','transition': '1s'})
        $('.recette4').css({'margin-left': '1000px','transition': '1s'})
        $('.recette5').css({'margin-left': '1000px','transition': '1s'})
        $('.recette1').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})

    })
    $('#2').click(function(){
        $('#2').css({'font-size': 'large','color':'red'})
        $('#1').css({'font-size': 'medium','color':'blue'})
        $('#3').css({'font-size': 'medium','color':'blue'})
        $('#4').css({'font-size': 'medium','color':'blue'})
        $('#5').css({'font-size': 'medium','color':'blue'})
        $('.recette1').css({'margin-left': '1000px','transition': '1s'})
        $('.recette3').css({'margin-left': '1000px','transition': '1s'})
        $('.recette4').css({'margin-left': '1000px','transition': '1s'})
        $('.recette5').css({'margin-left': '1000px','transition': '1s'})
        $('.recette2').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})
    })
    $('#3').click(function(){
        $('#3').css({'font-size': 'large','color':'red'})
        $('#2').css({'font-size': 'medium','color':'blue'})
        $('#1').css({'font-size': 'medium','color':'blue'})
        $('#4').css({'font-size': 'medium','color':'blue'})
        $('#5').css({'font-size': 'medium','color':'blue'})
        $('.recette1').css({'margin-left': '1000px','transition': '1s'})
        $('.recette2').css({'margin-left': '1000px','transition': '1s'})
        $('.recette4').css({'margin-left': '1000px','transition': '1s'})
        $('.recette5').css({'margin-left': '1000px','transition': '1s'})
        $('.recette3').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})
    })

    $('#4').click(function(){
        $('#4').css({'font-size': 'large','color':'red'})
        $('#1').css({'font-size': 'medium','color':'blue'})
        $('#2').css({'font-size': 'medium','color':'blue'})
        $('#3').css({'font-size': 'medium','color':'blue'})
        $('#5').css({'font-size': 'medium','color':'blue'})
        $('.recette1').css({'margin-left': '1000px','transition': '1s'})
        $('.recette3').css({'margin-left': '1000px','transition': '1s'})
        $('.recette2').css({'margin-left': '1000px','transition': '1s'})
        $('.recette5').css({'margin-left': '1000px','transition': '1s'})
        $('.recette4').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})
    })

    $('#5').click(function(){
        $('#5').css({'font-size': 'large','color':'red'})
        $('#2').css({'font-size': 'medium','color':'blue'})
        $('#1').css({'font-size': 'medium','color':'blue'})
        $('#4').css({'font-size': 'medium','color':'blue'})
        $('#3').css({'font-size': 'medium','color':'blue'})
        $('.recette1').css({'margin-left': '1000px','transition': '1s'})
        $('.recette3').css({'margin-left': '1000px','transition': '1s'})
        $('.recette4').css({'margin-left': '1000px','transition': '1s'})
        $('.recette2').css({'margin-left': '1000px','transition': '1s'})
        $('.recette5').css({'margin': 'auto 5','transition': '1s','transition-delay': '0.2s','padding-left':'10px'})
    })

    //menu pour les petits écrants
    $(".tlh2").click(function(){
        $(this).next("p").slideToggle("slow").siblings("p:visible").slideUp("slow")
    })

})