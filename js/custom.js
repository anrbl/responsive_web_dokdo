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
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });
    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });



    //media 768
    $('.mobile_btn').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.header').toggleClass('mobile_on');
    });

    $('.gnb .main_menu>li>a').on('click', function (e) {
        //width를 잡기보다는 .gnb hasClass on으로 찾는게 좋다
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.sub_menu').stop().slideUp();
            //나의 부모의 > 형제들(삼촌고모)를 찾는다 > stop+slideUp (삼촌들 치워버림)
        }

    });
    //사이즈 조절될때 gnb에 on을 뺀다
    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
    })
    //휠을 써도 움직이지 않게 고정시키는 함수
    $('.gnb').on('wheel', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    })
});