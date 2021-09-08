$(document).ready(function () {
  initBrandSlick();
  timerInit();
  $(".az-icon-close").hide();
  $(".az-icon ").click(function () {
    $(this).hide();
    $(".brand-nav").show();
    $(".az-icon-close").show();
  });
  $(".az-icon-close").click(function () {
    $(this).hide();
    $(".brand-nav").hide();
    $(".az-icon").show();
  });

  $(window).bind("scroll", function () {
    //Lazy Loading Effect
    $(".brand-lists .brand-list").each(function (index) {
      if ($(".card-loading").length > 0) return;

      if ($(this).isOnScreen() && $(this).hasClass("hidden-card")) {
        var thisElement = $(this);
        thisElement.removeClass("hidden-card");
        thisElement.addClass("card-loading");
        setTimeout(function () {
          thisElement.removeClass("card-loading");
          thisElement.addClass("auto-height");
        }, 2000);
      }
    });
  });
});

$(window).resize(function () {
  initBrandSlick();
});

function initBrandSlick() {
  if ($(window).width() > 560) {
    if ($(".brand-section .offer-cards").hasClass("slick-initialized")) {
      $(".brand-section .offer-cards").slick("unslick");
    }
    return true;
  }

  $(".brand-section .offer-cards").not(".slick-initialized").slick({
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "15px",
  });
}

function timerInit() {
  // Set the date we're counting down to
  var countDownDate = new Date("22 Aug 2020 18:22:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var timeRemains = "";
    if (days > 0) timeRemains += days + "d ";
    if (hours.toString().length == 1) hours = 0 + hours.toString();
    if (minutes.toString().length == 1) minutes = 0 + minutes.toString();
    if (seconds.toString().length == 1) seconds = 0 + seconds.toString();

    timeRemains += hours + "." + minutes + "." + seconds;
    $("span.remaining-time").text(timeRemains);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      $("span.remaining-time").text("EXPIRED");
    }
  }, 1000);
}
