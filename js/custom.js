$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });
    //스크롤반응.on붙이기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        });
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


    const noticeSlide = new Swiper('.notice_slide', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
    });
    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });
    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });


});