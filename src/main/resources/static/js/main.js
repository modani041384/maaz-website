function configSwiper(params) {
    const thumbSwiper = new Swiper('.thumb-swiper', {
        slidesPerView: 5,        
        freeMode: false,
        watchSlidesProgress: true
    });

    const _ = new Swiper('.main-swiper', {
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 400,
        spaceBetween: 24,
        thumbs: {
            swiper: thumbSwiper
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    const recognitionSwiper = new Swiper('.recognitions-swiper', {
        autoplay: { delay: 5000 },
        loop: true, 
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 16
    })
}
function configHover() {
    $('[data-action="hover"]').hover(function () {
        var target = $(this).data('target');
        console.log(target);
        $(target).addClass('active-hover');
    }, function () {
        var target = $(this).data('target');
        console.log(target);
        $(target).removeClass('active-hover');
    });
}


function contactUs() {
    $('.button-contact-us').on('click', function (e) {
        e.preventDefault();
        $('.contact-us-modal').show();
        $('body').css('overflow-y', 'hidden');
    });
    $('.contact-us-modal .close-button').on('click', function (e) {
        e.preventDefault();
        $('.contact-us-modal').hide();
        $('body').css('overflow-y', '');
    });
    $('.contact-us-modal .overlay').on('click', function (e) {
        e.preventDefault();
        $('.contact-us-modal').hide();
        $('body').css('overflow-y', '');
    });
}

$(() => {
    configSwiper();
    configHover();
    contactUs();
});