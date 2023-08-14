$(document).ready(function() {

    $('.banner_bg-silder').slick({
       dots: true,
       focusOnSelect: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       speed: 2000,
       autoplay: true,
       autoplaySpeed: 3000,
       arrows: false,
       fade: true,
       asNavFor: '.banner_text_slider',
       responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: false,
                // adaptiveHeight: true
              }
            }
        ]
     });

    $('.banner_text_slider').slick({
        // dots: true,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.banner_bg-silder',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
              }
            }
        ]
    });

    

        $('.bt-name-slider').slick({
           dots: false,
           slidesToShow: 1,
           slidesToScroll: 1,
           speed: 1500,
           autoplay: false,
           arrows: false,
           fade: true,
           asNavFor: '.b-testimonial-slider'
         });
        $('.b-testimonial-slider').slick({
            dots: false,
            arrows: false,
            fade: false,
            pauseOnHover: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.bt-name-slider',
            focusOnSelect: true
            
        });

    $('.develps-slider-img').slick({
        dots: false,
        arrows: false,
        fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.develps-slider-text'
    });

    $('.develps-slider-text').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.develps-slider-img'
    });

    $('.offer_row').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }]
        })
        .on('setPosition', function(event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
        
    // client feedback section slider
    $('.client-slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });



    // scroll hide and show


    // header tab Hover 

        jQuery(document).ready(function($) {
            $('#tabs .nav-item span').hover(function() {
                $(this).tab('show');
            });
            $('#tabs .nav-item span').on('shown.bs.tab', function(e) {
                var target = $(e.relatedTarget).attr('data-bs-target');
                $(target).removeClass('active');
            })
        });

        jQuery(document).ready(function($) {
            $('#innertabs .nav-item span').hover(function() {
                $(this).tab('show');
            });
            $('#innertabs .nav-item span').on('shown.bs.tab', function(e) {
                var target = $(e.relatedTarget).attr('data-bs-target');
                $(target).removeClass('active');
            })
        });



    // header tab Hover End


    $(".navbar-toggler").click(function() {
        $("body").toggleClass("no-scroll");
    });

    $(".header-menu ul li a").click(function() {
        $("body").removeClass("no-scroll");
    });


    // top nav header scroll active class add start

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-main").addClass("active");
        } else {
            $(".header-main").removeClass("active");
        }
    });
    // top nav header scroll active class add end

    !function(d){var c="portfilter";var b=function(e){this.$element=d(e);this.stuff=d("[data-tag]");this.target=this.$element.data("target")||""};b.prototype.filter=function(g){var e=[],f=this.target;this.stuff.fadeOut("fast").promise().done(function(){d(this).each(function(){if(d(this).data("tag")==f||f=="all"){e.push(this)}});d(e).show()})};var a=d.fn[c];d.fn[c]=function(e){return this.each(function(){var g=d(this),f=g.data(c);if(!f){g.data(c,(f=new b(this)))}if(e=="filter"){f.filter()}})};d.fn[c].defaults={};d.fn[c].Constructor=b;d.fn[c].noConflict=function(){d.fn[c]=a;return this};d(document).on("click.portfilter.data-api","[data-toggle^=portfilter]",function(f){d(this).portfilter("filter")})}(window.jQuery);

});


$(window).on('load',function(){
    setTimeout(function(){ 
    $('.page-loader').fadeOut('slow');
    });
});



