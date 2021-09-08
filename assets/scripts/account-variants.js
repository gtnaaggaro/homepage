/* 26/02/2021 start */
$(".pointer-carousel-with-link .varaints-pointer-cards").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1, } },
        { breakpoint: 991, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
        { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
    ],
});

/* 28/06/2021 start */
$(".product-slider").slick({
    dots: !0,
    arrows: !0,
    infinite: !1,
    autoplay: !1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, dots: !1, } },
        { breakpoint: 991, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
        { breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
    ],
});
/* 28/06/2021 End */