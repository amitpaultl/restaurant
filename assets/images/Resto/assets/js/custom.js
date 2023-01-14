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
        if (scroll >= 300) {
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
    
    
    //   slider 2

    $('.slider').owlCarousel({
        loop: true,
        autoplay: false,
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
                nav: true,
                dots: false,
            },

            1000: {
                items: 1,
                nav: true,
                dots: false,
            }
        }
    })






    // Menu Smooth-scroll

    $(document).ready(function() {
        $('.nave-menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();

            var target = $(this).attr("href");
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top - 85
            }, 1000, function() {
                    location.hash = target;
            });

            return false;
        });
    });


    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
    
        $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.nave-menu a.active').removeClass('active');
                    $('.nave-menu a').eq(i).addClass('active');
            }
        });
    }).scroll();



























// web site end




    // Menu Resume
    $(document).ready(function () {
        $('.Resume-class li a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').animate({
                'scrollTop': $target.offset().top - 85
            }, 1000, 'swing');
        });
    });


    

    // add class


    $(function() {
        $(".Resume-class li a").click(function () {

            $('.Resume-class li a').removeClass("logo-fixed");
            $(this).addClass('logo-fixed');
        });
    });





    // isotop
    $(document).ready(function () {
        $('.project-item-menu li').on('click', function () {

            $('.project-item-menu li').removeClass("active");
            $(this).addClass('active');
            
        });
    });
 

    $(document).ready(function () {
        $('.project-item-menu li').on('click', function () {

            var selector = $(this).attr('data-filter');
            $(".progec").isotope({
                filter:selector
            });
            
        });
    });
 
    jQuery(".progec").isotope();

        // Scroll Top Icon Show & Hide
        $(function () {
            var myWindowScroll = 200;
            $(window).scroll(function () {
                if ($(window).scrollTop() > myWindowScroll) {
                    $(".top-icon ").fadeIn("slow");
                } else {
                    $(".top-icon").fadeOut("slow");
                }
            });
        });


        // Back To Top
        $(".top-icon").on("click", function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
            return false;
        });
    

  
    //   type js jave




})(jQuery);














