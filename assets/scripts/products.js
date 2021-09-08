function productSlider() {
  if ($(window).width() < 991) {
    $(".product-list-cards").hasClass("slick-initialized") &&
      $(".product-list-cards").slick("unslick"),
      $(".product-list-cards").slick({
        arrows: false,
        dots: !0,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2e3,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 556,
            settings: {
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
  }
}
$(document).ready(function () {
  productSlider();
  if ($(window).width() < 991) {
    $(".cta-title").on("click", function () {
      $(".announcement-section").hide();
      $(".product-list-cards").addClass("active");
      $(".cta-link").removeClass("active");
      $(this).siblings(".cta-link").addClass("active");
    });

    $(".cta-dropdown .close").on("click", function () {
      $(".product-list-cards").removeClass("active");
      $(".cta-link").removeClass("active");
    });
  }
});
$(window).resize(function () {
  productSlider();
});
