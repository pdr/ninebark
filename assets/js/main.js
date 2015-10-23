$(document).ready(function() {

    $('body').scrollspy({
        target: '#myNav'
    });

    $('#events .col-md-6:only-child').addClass('col-md-offset-3 text-center');
    $('#menu .menu-content:first-child').addClass('active');
    $('#menu .menu-nav > li:first-child').addClass('active');
    $('#menu .menu-nav > li:first-child').children('.sub').slideToggle();

    $('.menu-toggle-btn').click(function() {
        var _this = $(this);
        
        if (_this.hasClass('toggled')) {
            $(this).children('.bar').fadeOut(100, function() {
           _this.removeClass('toggled');
           _this.children('.bar').fadeIn(100);    
        });
        }
        else {
            $(this).children('.bar').fadeOut(100, function() {
           _this.addClass('toggled');
           _this.children('.bar').fadeIn(100);    
        });
        }        
    $('header .header-content nav').fadeToggle();
    });



    $('nav ul li a:not(a.nonav)').click(function(event) {
        event.preventDefault();
        $(this).parent('li').addClass('active');

        var thisTarget = $(this).attr('href');
        
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

    $('#menu .menu-nav > li > a').click(function(event) {
        

        event.preventDefault();
        $('#menu .menu-nav > li').removeClass('active');
        $(this).parent('li').addClass('active');
        var thisSubhead = $(this).next('.sub');
        $('#menu .menu-nav .sub').slideUp('fast');
         thisSubhead.slideDown('fast');



        // if ($(this).has('.sub')) {
        //      var thisSubhead = $(this).next('.sub');

        
        // $('#menu .menu-nav .sub').slideUp('fast');
        // thisSubhead.slideDown('fast');
        // }
       
        // else {
        //     $('#menu .menu-nav > li').removeClass('active');
        // $(this).parent('li').addClass('active');
        // var target = $(this).text();
        // $('#menu .menu-content.active').fadeOut(500, function() {
        //     $(this).removeClass('active');
            
        // });      
        
        // $('#menu .menu-content[data-index="' + target + '"]').fadeIn(500, function() {
           
        //     // $('#menu .menu-content[data-index="' + target + '"]').trigger('loaded-cont');

        //  $('#menu .menu-content[data-index="' + target + '"]').addClass('active');
         
        // }); 
        // }
        
       
        
    });

$('#menu .menu-nav > li .sub li a').click(function(event) {
    $('#menu .menu-nav > li').removeClass('active');
    $('#menu .menu-nav > li .sub li').removeClass('active');
    $(this).parent('li').addClass('active');
    $(this).parent('li').parent('ul').parent('li').addClass('active');

        var target = $(this).text();
        $('#menu .menu-content.active').fadeOut(500, function() {
            $(this).removeClass('active');
            
        });      
        
        $('#menu .menu-content[data-index="' + target + '"]').fadeIn(500, function() {
           
            // $('#menu .menu-content[data-index="' + target + '"]').trigger('loaded-cont');

         $('#menu .menu-content[data-index="' + target + '"]').addClass('active');
         
        }); 
    event.preventDefault();
    event.stopPropagation();


});

    // $('#menu .menu-content').on('loaded-cont', function() {
    //     $(this).children('.slider-gall').slick({
    //     autoplay: true,
    //     fade: true,
    //     infinite: true,
    //     dots: false,
    //     arrows: false,
    //     slidesToShow: 1

    //     });
    // });

   


});


$(document).ready(function() {
    var slideInit =  $('.menu-content .slider-gall').flexslider({
        directionNav: false,
        controlNav: false
    });
});


