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
//选择了物联网生态圈
function ecosphere(a){
    $('#content_1').css('display','block');
    $('#content_2').css('display','none');

    //a.css('border-left','2 solid red');
}
//选择了合作伙伴
function cooperate(a){
    $('#content_1').css('display','none');
    $('#content_2').css('display','block');
    //a.css('border-left','2 solid red');
}
//首页的选择介入设备的函数

function choose_device(a){
    $("#lightbox .device0").css("display","none");
    $("."+a).css("display","inline-block");
}
//////合作与生态选择
function clicked(a){
    $(".li_clicked").removeClass("li_clicked");
    $("#"+a).addClass("li_clicked");
}
///////底层显示隐藏的电话
function show_phone()
{
    $(".coll-son").css("display","none");
    $("#phone").css("display","block");
}
function hide()
{
    $(".coll-son").css("display","none");
    //$("#phone").css("display","block");
}
function show_envelope()
{
    $(".coll-son").css("display","none");
    $("#envelope").css("display","block");
}
function show_weixin()
{
    $(".coll-son").css("display","none");
    $("#weixin").css("display","block");
}
function show_qq()
{
    $(".coll-son").css("display","none");
    $("#qq").css("display","block");
}
// ----------产品页选择左列表
function product_choose(a){
    $(".panel-heading h4").removeClass("choose_active");
    $("#"+a+" h4").addClass("choose_active");
    //console.log("111");
    //$("#headingOne").css("background-color","#f8f8f8");
}
//
function doc_choose(a){
    $(".li_hover").removeClass("choose_active");
    $("#"+a).addClass("choose_active");
}

//-----------首页选择产品的第一个选项
function index_choose_procuct(a)
{
    location.href="products.html?targ="+a;
    //product_choose("headingOne");

}