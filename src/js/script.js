$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_sl.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_sl.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
            
        ]
    });
  }); 

