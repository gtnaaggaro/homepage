var timeoutCounter;
$(window).on("load resize orientationchange", function () {
    clearTimeout(timeoutCounter);
    timeoutCounter = setTimeout(function(){
        if ($(window).width() < 1200) {
            $(".benefit-vertical-card-carousel").not(".slick-initialized").slick({
                dots: false,
                arrows: true,
                infinite: !0,
                autoplay: !0,
                speed: 500,
                slidesToShow: 7,
                slidesToScroll: 1,
                responsive: [
                    { breakpoint: 1200, settings: { slidesToShow: 5} },
                    { breakpoint: 1024, settings: { slidesToShow: 4} },
                    { breakpoint: 767, settings: { slidesToShow: 3 } },
                    { breakpoint: 560, settings: { slidesToShow: 2 } },
                ],
            });
        }else{
            $(".benefit-vertical-card-carousel").hasClass('slick-initialized') && $(".benefit-vertical-card-carousel").slick("unslick");
        }
        $(".account-variants-card").css('height','auto');
        $(".account-variants-card").equalHeights();
        $(".benefit-itsa-white-card .benefit-itsa-card").css('height','auto');
        $(".benefit-itsa-white-card .benefit-itsa-card").equalHeights();
    },250)
    $(".account-variants-card .scroll-content").mCustomScrollbar();
});

$(".benefit-card-section .benefit-itsa-white-card").not(".slick-initialized").slick({
    dots: !1,
    arrows: !0,
    infinite: !0,
    autoplay: !1,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1, } },
        { breakpoint: 991, settings: { slidesToShow: 2, dots: !0, arrows: !1, centerMode: true,
            centerPadding:'60px' } },
        { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1, centerMode: true,
            centerPadding:'60px' } },
    ],
});



