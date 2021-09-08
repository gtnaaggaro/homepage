$(document).ready(function () {
  /* looking-for-slider */
  if ($(".looking-for-slider").length > 0) {
    $(".looking-for-slider")
      .not(".slick-initialized")
      .slick({
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        variableWidth: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              infinite: true,
            },
          },
        ],
      });
  }

  $(".read-more-less").hide();
  $(".bottom-content .ic-more").click(function () {
    $(".read-more-less").slideToggle();
    var text = $(this).text();
    $(this).text(text == "Read more" ? "Read less" : "Read more");
  });
});
