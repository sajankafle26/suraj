$(document).ready(function(){
    $(".threee").owlCarousel({
        items:1,
        loop:true,
        
        navText: ["&#x27;next&#x27;,&#x27;prev&#x27;"],
        responsive:{
            0:{
                items:1,
                 
            },
            600:{
                items:1,
                
            },
            1000:{
                items:1,
                
        
            }
        }
    });
    $(".slider-box").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        margin:10,
    });
  });