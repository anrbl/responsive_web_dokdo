$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });


    let snum = 1;
    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        //액션클래스명변경방식변경후css뜯어고침
        slideActiveClass: 'on',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        //도트넣는법
        on: {
            init: function () {
                // console.log('엥', this.realIndex, this.slides.length, this)
                $('.num span').text(this.realIndex + 1);
                $('.num strong').text(this.slides.length);
            },
            slideChangeTransitionEnd: function () {
                $('.num span').text(this.realIndex + 1);
                $('.circle span:nth-child(1)').css({
                    transform: 'translate(-50%, 0) rotate(' + snum * 45 + 'deg)'
                });
                snum = snum + 1;
            },
        },
    });
    //늘하던대로 화살표연동
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });
    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    //이건도트
    $('.main_visual .slide_dots li').on('click', function () {
        let idx = $(this).index();
        mainSlide.slideTo(idx);
        $(this).addClass('on').siblings().removeClass('on');
    });
});