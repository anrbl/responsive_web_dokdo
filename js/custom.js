$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });


    const mainSlide = new Swiper('.main_slide', {
        parallax: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        //액션클래스명변경방식변경후css뜯어고침
        slideActiveClass: 'on',
    });

    //늘하던대로 화살표연동
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });
    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
});