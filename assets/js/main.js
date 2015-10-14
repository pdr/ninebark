$(document).ready(function() {

    $('body').scrollspy({
        target: '#myNav'
    });


    $('.menu-toggle-btn').click(function() {
        $(this).toggleClass('toggled');
        $('header .header-content nav').fadeToggle();
    });



    $('nav ul li a:not(a.social-a)').click(function(event) {
        event.preventDefault();
        $(this).parent('li').addClass('active');

        var thisTarget = $(this).attr('href');
        console.log(thisTarget);
        $('html,body').animate({
            scrollTop: $(thisTarget).offset().top
        }, 'slow');

        if (thisTarget == window.location.hash) {
            window.location.hash = thisTarget;
        } else {
            setTimeout(function() {
                window.location.hash = thisTarget;
            }, 700);
        }
        if ($(window).innerWidth() < 768) {
            $('nav').fadeOut();
            $('.menu-toggle-btn').removeClass('toggled');
        }


    });

    $('.press-slider').slick({
        rows: 2,
        slidesToShow: 4,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,


                    rows: 1
                }
            }, {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    rows: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('#menu .menu-nav li a').click(function(event) {

        event.preventDefault();
        $('#menu .menu-nav li').removeClass('active');
        $(this).parent('li').addClass('active');


        $('#menu .menu-content').fadeOut(300);
        var target = $(this).text();


        $('#menu .menu-content[data-index="' + target + '"]').fadeIn(300);
    });


});
