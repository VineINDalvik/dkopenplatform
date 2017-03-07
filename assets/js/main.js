"use strict";
jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#bs-example-navbar-collapse-1').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();



    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_home_slider').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.single_features_slide').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.main_teastimonial_slider').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });


// magnificPopup

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

//mytabs

//    $('ul.service_tabe_menu li a').click(function (e) {
//        e.preventDefault()
//        $(this).tab('show')
//    });

//skillbar section

    // var skillBarTopPos = jQuery('.skillbar').position().top;
    // jQuery(document).scroll(function () {
    //     var scrolled_val = $(document).scrollTop().valueOf();
    //     if (scrolled_val > skillBarTopPos - 250)
    //         startAnimation();
    // });

    function startAnimation() {
        jQuery('.skillbar').each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    }
    ;


//---------------------------------------------
// Counter 
//---------------------------------------------

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

// main-menu-scroll

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 300;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

//    $('#menu').slicknav();
    jQuery('#portfoliowork').mixItUp({
        selectors: {
            target: '.tile',
            filter: '.filter',
            sort: '.sort-btn'
        },
        animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
        }

    });



    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });

    //End

});



$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});

$(".thing-service1").hover(function(){
$(".thing-service1>.thing-hover-title,.thing-service1>.thing-hover-des").css("color","#0eb493");
},function(){
$(".thing-service1>.thing-hover-title,.thing-service1>.thing-hover-des").css("color","#000");
});

$(".thing-service2").hover(function(){
$(".thing-service2>.thing-hover-title,.thing-service2>.thing-hover-des").css("color","#0eb493");
},function(){
$(".thing-service2>.thing-hover-title,.thing-service2>.thing-hover-des").css("color","#000");
});

$(".thing-service3").hover(function(){
$(".thing-service3>.thing-hover-title,.thing-service3>.thing-hover-des").css("color","#0eb493");
},function(){
$(".thing-service3>.thing-hover-title,.thing-service3>.thing-hover-des").css("color","#000");
});

$(".thing-service4").hover(function(){
$(".thing-service4>.thing-hover-title,.thing-service4>.thing-hover-des").css("color","#0eb493");
},function(){
$(".thing-service4>.thing-hover-title,.thing-service4>.thing-hover-des").css("color","#000");
});

$(".thing-service5").hover(function(){
$(".thing-service5>.thing-hover-title,.thing-service5>.thing-hover-des").css("color","#0eb493");
},function(){
$(".thing-service5>.thing-hover-title,.thing-service5>.thing-hover-des").css("color","#000");
});

$(".thing-service6").hover(function(){
$(".thing-service6>.thing-hover-title,.thing-service6>.thing-hover-des").css("color","#0eb493");
},function(){
$(".thing-service6>.thing-hover-title,.thing-service6>.thing-hover-des").css("color","#000");
});

function mouseover(a)
{
    //console.log(a.parentNode.querySelector(".src_name").querySelector("a"));
    a.parentNode.querySelector(".src_name").querySelector("a").style.color="#0eb493";
}
function mouseout(a)
{
    a.parentNode.querySelector(".src_name").querySelector("a").style.color="#797979";
}
function zhankai_1(a)
{
    $('#txt_10').css('display','none');
    $('#txt_11').css('display', 'block');
}

function bihe_1(a){
    $('#txt_10').css('display','block');
    $('#txt_11').css('display', 'none');
}
function zhankai_2(a)
{
    $('#txt_20').css('display','none');
    $('#txt_21').css('display', 'block');
}

function bihe_2(a){
    $('#txt_20').css('display','block');
    $('#txt_21').css('display', 'none');
}
function zhankai_3(a)
{
    $('#txt_30').css('display','none');
    $('#txt_31').css('display', 'block');
}

function bihe_3(a){
    $('#txt_30').css('display','block');
    $('#txt_31').css('display', 'none');
}
function zhankai_4(a)
{
    $('#txt_40').css('display','none');
    $('#txt_41').css('display', 'block');
}

function bihe_4(a){
    $('#txt_40').css('display','block');
    $('#txt_41').css('display', 'none');
}

function ecosphere(a){
    $('#content_1').css('display','block');
    $('#content_2').css('display','none');
    //a.css('border-left','2 solid red');
}
function cooperate(a){
    $('#content_1').css('display','none');
    $('#content_2').css('display','block');
    //a.css('border-left','2 solid red');
}