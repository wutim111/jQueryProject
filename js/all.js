$(document).ready(function () {
    $('.menu_ask').click(function (e) { 
        e.preventDefault();
        $(this).find('ul').slideToggle();
    });

    $('body').on('click','.top a', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop :0
        },1000);
    });


    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    delay: 5000,
    autoplay:{
        disableOnInteraction:false,
    },
    });
});