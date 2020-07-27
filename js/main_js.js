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
 
    var nome = document.getElementById("nomeid");
 
    if (nome.value != "") {
        alert(`Obrigado sr(a) ${nome.value} sua menssagem foi encaminhada com sucesso`);
    }
 
}