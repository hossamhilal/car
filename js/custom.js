/*global $*/

$(function () {

    "use strict";
    
/* ------------------------------------------------------------*/
/* --- 0. Section ---------------------------------------------*/
/* ------------------------------------------------------------*/
    
    $(".offers .slider").owlCarousel({
        rtl: true,
        loop: true,
        items: 3,
        dots: true,
        margin: 20,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        navSpeed: 600 / true,
        autoplaySpeed: 600 / true,
        responsive: {
            0: {
                items: 1,
                center: false
            },
            575: {
                items: 2,
                center: false
            },
            992: {
                items: 3
            }
        }
    });
    
    $(".offers .arrow.right").click(function () {
        $('.offers .slider').trigger('prev.owl.carousel');
    });
    $(".offers .arrow.left").click(function () {
        $('.offers .slider').trigger('next.owl.carousel');
    });
    
});