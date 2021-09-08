$(document).ready(function () {
    initBrandListSlick();
    initCategoriesListSlick();
    timerInit();
    $(".sort-dropdown li:nth-child(3)").addClass("active");
    {
      $(".filter-top .filter-icon").click(function () {
        $(".announcement-section").hide();
        $(".feature-offer-section").hide();
        $(".filter-inner-container").addClass("active");
        //$(".filter-content .filter-cat").show();
        if (!$(".filter-top").hasClass("filter-sticky")) {
          $(".filter-top").addClass("filter-sticky");
        }
        $(".filter-top").addClass("filter-selected");
        $(".sidebar-content").addClass("active");
        $("body").addClass("no-scroll");
        //$(".filter-content .filter-cat").addClass("active");
      });
      $(".sort-tools .title").click(function () {
        $(".sort-dropdown .dropdown-wrapper").toggle("show");
      });
      $(document).on("click", ".filter-content .filter-cat .filter-clear", function () {
        $(".feature-offer-section").show();
        $(".announcement-section").show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
        $(".filter-content .filter-cat").hide();
      });
    }
  
    /* sidebar close mobile */
    $(".sidebar-header .close").click(function () {
      $(".sidebar-content").removeClass("active");
      $(".sb-brands").removeClass("active");
      $("body").removeClass("no-scroll");
      if ($(window).width() < 991) {
        window.scrollTo(0, 0);
      }
      else {
        $('html, body').animate({
          scrollTop: $('.filter-section').offset().top
        });
      }
    });
  
    /* looking-for-slider */
    if ($(".offer-slider").length > 0) {
      $(".offer-slider")
        .not(".slick-initialized")
        .slick({
          dots: true,
          arrows: true,
          infinite: false,
          autoplay: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 640,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "45px",
              },
            },
          ],
        });
    }
  
     /* offer-nav-tabs */
     $(".offer-nav-tabs li").click(function () {
      $(".offer-slider").slick("refresh")
    });
  
    //Equal Height for cards
    $(".offer-card .card-inner .card-title").equalHeights();
  
    /**
     * Show 200 Popup brand-poupup
     */
    $(".sb-brands .more-link").click(function () {
      $(this).addClass("active");
      $(".sb-brands .brand-poupup").show();
      if ($(window).width() < 991) {
        $(".sb-brands").addClass("active");
      }
      //$(".sb-brands .filter-cat").show();
      //$(".sb-brands .filter-cat").addClass("active");
    });
    if ($(window).width() < 991) {
      $(".sb-brands .heading h5").click(function () {
        $(".sb-brands").removeClass("active");
        $(".sb-brands .more-link").removeClass("active");
      });
    }
    $(".brand-poupup .close").click(function () {
      $(".sb-brands .brand-poupup").hide();
      $(".sb-brands").removeClass("active");
      $(".sb-brands .more-link").removeClass("active");
      $('.sidebar-content .sb-brands .search-box-area input').val("");
    });
    $('.brand-poupup-bottom .clear-all').click(function () {
      $.each($(".sidebar-content .brand-poupup .brand-poupup-middle input:checked"), function () {
        $(this).prop("checked", false);
      });
    });
    $('.brand-poupup-bottom .apply').click(function () {
      $(".brand-poupup .close").click();
      $('.sidebar-content .sb-brands .search-box-area input').val("");
    });
  
    $(".sb-brands .filter-clear").click(function () {
      $(".sb-brands .filter-cat").hide();
      $(".sb-brands .filter-cat").removeClass("active");
    });
  
    /**
     * sb-payment slideToggle
     */
    $(".sb-payment .read-more-less").hide();
    $(".sb-payment .more-link").click(function () {
      $(".read-more-less").slideToggle();
      $("#loadMore").toggleClass("active");
      var text = $(this).text();
      $(this).text(text == "show 3 more" ? "show less" : "show 3 more");
    });
  
    /**
     * Outside click of Element
     */
    $(document).click(function (event) {
      var $target = $(event.target);
  
      // Most View Popup
      if (
        !$target.closest(".sort-tools").length &&
        $(".dropdown-wrapper").is(":visible")
      ) {
        $(".sort-dropdown span").removeClass("active");
        $(".dropdown-wrapper").hide();
      }
    });
  
    /**
     * Most View
     */
    $(".sort-dropdown span").click(function () {
      $(this).addClass("active");
      $(".sort-dropdown .dropdown-wrapper").toggle();
    });
    $(".sort-tools .sort-dropdown li").click(function () {
      $(".sort-tools .sort-dropdown li").removeClass("active");
      $(this).addClass("active");
      $(".sort-dropdown span").removeClass("active");
      $(".sort-tools .sort-dropdown span").text($(this).text());
      $(".sort-dropdown .dropdown-wrapper").hide();
    });
  
    /**
     * Scroll Sticky
     */
    $(window).bind("scroll", function () {
      if ($(".filter-top").hasClass("filter-selected")) {
        return;
      }
      var topPosition = 0;
      if ($(".feature-offer-section").length > 0)
        topPosition += $(".feature-offer-section").height();
      if ($(".announcement-section:visible").length > 0)
        topPosition += $(".announcement-section").height();
  
      if (topPosition <= 0)
        topPosition = 100;
  
      if ($(window).width() < 991) {
        if ($(window).scrollTop() > topPosition) {
          $(".filter-top").addClass("filter-sticky");
        } else {
          $(".filter-top").removeClass("filter-sticky");
        }
      } else if ($(window).width() > 991) {
        $(".filter-top").removeClass("filter-sticky");
      }
  
      //Desktop Sticky
      if ($(window).width() > 991) {
        if ($(window).scrollTop() > topPosition) {
          $(".sidebar-content").addClass("sticky-sidebar").mCustomScrollbar();
          $(".filter-inner-container").addClass("sticky-enable");
        } else {
          $(".sidebar-content").removeClass("sticky-sidebar");
          $(".filter-inner-container").removeClass("sticky-enable");
        }
  
        $(".sidebar-content").removeClass("disable-sticky");
        removeStickyOfferSidebar('.footer');
      }
  
      //Lazy Loading Effect
      $(".offer-lists .offer-list").each(function (index) {
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
  
    function removeStickyOfferSidebar(elementVar) {
      if ($(elementVar).length > 0) {
        if ($(elementVar).isOnScreen() && $(".card-loading").length <= 0 && $(".sidebar-content").hasClass('sticky-sidebar')) {
          $(".sidebar-content").addClass("disable-sticky");
        }
      }
    }
  
    /**
     * filter Code Active element
     */
    $(".sidebar-content .sb-categories li div").click(function (event) {
      if (event.target !== this) return; // Do nothing
      if (
        $(this).parent().hasClass("active") &&
        $(this).parent().hasClass("dropdown")
      ) {
        $(this).parent().find(".dropdown-list").slideToggle();
        $(this).parent().removeClass("active");
        return;
      } else {
        $(".dropdown-list").hide();
        $(this).parent().find(".dropdown-list").slideDown();
      }
      $(".sidebar-content li div").parent().removeClass("active");
      $(this).parent().addClass("active");
      if (!$(this).parent().hasClass("dropdown")) {
        if ($(window).width() < 991) $(".sidebar-header .close").click();
      }
    });
  
    $(".sidebar-content .sb-categories .dropdown-list li").click(function (
      event
    ) {
      if ($(window).width() < 991) $(".sidebar-header .close").click();
    });
  
    $(".sb-categories .checkbox-list input").change(function () {
      $(this).prop("checked")
        ? $(this).closest("li").addClass("active")
        : $(this).closest("li").removeClass("active");
    });
  
    $(window).resize(function () {
      initBrandListSlick();
      initCategoriesListSlick();
      $(".offer-card .card-inner .card-title").equalHeights();
    });
  });
  
  function initBrandListSlick() {
    if ($(window).width() > 991) {
      if ($(".feature-offer-card .brand-list").hasClass("slick-initialized")) {
        $(".feature-offer-card .brand-list").slick("unslick");
      }
      return true;
    }
  
    $(".feature-offer-card .brand-list").not(".slick-initialized").slick({
      dots: true,
      arrows: false,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  }
  
  function initCategoriesListSlick() {
    if ($(window).width() > 991) {
      if (
        $(".feature-offer-card .categories-list").hasClass("slick-initialized")
      ) {
        $(".feature-offer-card .categories-list").slick("unslick");
      }
      return true;
    }
  
    $(".feature-offer-card .categories-list").not(".slick-initialized").slick({
      dots: true,
      arrows: false,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
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
  