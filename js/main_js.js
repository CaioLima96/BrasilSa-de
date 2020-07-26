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
                items: 3
            },
            1000: {
                items: 4
            }
            
        }
        
    });

});

/*$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
   
        autoPlay: 3000, //Set AutoPlay to 3 seconds
   
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
   
    });
   
});*/