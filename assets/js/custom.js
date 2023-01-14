(function ($) {
    "use strict";

    //Run function when document ready
    $(document).ready(function () {
        init_menu_toggle();
    });

    //Run function when window on scroll
    $(window).on("scroll", function () {
        init_menu_scroll();
    });

    function init_menu_scroll() {
        var header = $(".header");
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.addClass("header-fixed");
        } else {
            header.removeClass("header-fixed");
        }
    }

    function init_menu_toggle() {
        $(".menu-icon").click(function () {
            $(this).toggleClass("menu-icon-design");
            $(".main-menu").toggleClass("main-menu-open");
        });

        $(".main-menu ul li").click(function () {
            $(".main-menu").removeClass("main-menu-open");
            $(".menu-icon").removeClass("menu-icon-design");

        });
    }



    //   slider hero

    $('.slider-area').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: true,
                navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']

            },

            575: {
                items: 1,
                nav: true,
                dots: true,
                navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
            },

            768: {
                items: 1,
                nav: true,
                dots: true,
                navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
            },

            1000: {
                items: 1,
                nav: true,
                dots: true,
                navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
            }
        }
    })  




    $('.parallax-window').parallax(

        {imageSrc: 'assets/images/hero_bg_1.jpg'}

      

    );
    
    $('.parallax').parallax(

        { imageSrc: 'assets/images/hero_bg_5.jpg'}

      

    );

    $('.parallax-3').parallax(

        { imageSrc: 'assets/images/hero_bg_3.jpg'}

      

    );



    $('.parallax-4').parallax(

        { imageSrc: 'assets/images/hero_bg_5.jpg'}

      

    );


























    //   slider

    $('.all-client').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },

            575: {
                items: 1,
            },

            768: {
                items: 1,
                nav: false,
                dots: true,
            },

            1000: {
                items: 1,
                nav: false,
                dots: true,
            }
        }
    })   
    
    



})(jQuery);



















