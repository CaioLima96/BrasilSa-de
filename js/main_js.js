//-----------------------------OWL CAROUSEL---------------------------//


$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        nav: true,
        navText: ["Anterior", "Próximo"],
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            520:{
                items: 2
            },
            768:{
                items: 3
            },
            1024: {
                items: 4
            }
            
        }
        
    });

});

/**********************************************FORM DE CONTATO*****************************************/

function Enviar() {
 
    var nome = document.getElementById("nome");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var menssagem = document.getElementById("menssagem");

    if (nome,fone,email,menssagem.value != "") {
        alert(`Obrigado sr(a) ${nome.value} sua menssagem foi encaminhada com sucesso`);
    }
 
}

$(document).ready(function(){

    $('input[name="fone"]').mask('(00) 00000 0000');
})