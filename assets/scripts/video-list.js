$(document).ready(function () {
  initVideoSlick();
  $(".sort-dropdown li:first").addClass("active");
  $(".sidebar-content ul li:first").addClass("active");

  $(".feature-video-inner .left-content .card-inner").click(function () {
    $(this).addClass("hide");
    $(".feature-video-inner .left-content .iframe-video").removeClass("hide");
    var symbol = $(".iframe-video iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
    $(".iframe-video iframe")[0].src += symbol + "autoplay=1";
  });

  {
    $(".filter-top .filter-icon").click(function () {
      $(".announcement-section").hide();
      $(".feature-video-inner").hide();
      $(".filter-inner-container").addClass("active");
      $(".filter-cat").show();
      if (!$(".filter-top").hasClass("filter-sticky")) {
        $(".search-container").addClass("filter-sticky");
        $(".filter-top").addClass("filter-sticky");
      }
      $(".filter-top").addClass("filter-selected");
      $(".sidebar-content").addClass("active");
      $("body").addClass("no-scroll");
      $(".filter-cat").addClass("active");
    });
    $(".sort-tools .title").click(function () {
      $(".sort-dropdown .dropdown-wrapper").toggle("show");
    });

    $(document).on("click", ".filter-cat .filter-clear", function () {
      $(".feature-video-inner").show();
      $(".announcement-section").show();
      $(".filter-inner-container").removeClass("active");
      $(".filter-top").removeClass("filter-selected");
      $(".filter-top").removeClass("filter-sticky");
      $(".search-container").removeClass("filter-sticky");
      $(".filter-cat").hide();
    });
    /** 23/02/2021 start **/
    $(".filter-video-section .dropdown-list").mCustomScrollbar();
     /** 23/02/2021 end **/
  }

  

  /**
   * Scroll Sticky
   */
  $(window).bind("scroll", function () {
    if ($(".filter-top").hasClass("filter-selected")) {
      return;
    }
    let filterSectionEl = $(".filter-section.filter-video-section");
    if (filterSectionEl.length) {
      if ($(window).width() <= 991) {
        //Mobile Sticky
        //code update 28/08/2021:begin
        let headerEl1 = $(".new-header.mobile.sticky-enable .device-menu-top");
        let headerEl2 = $(".new-header.mobile.sticky-enable .search");

        let headerHeight = headerEl1.length ? (headerEl1.get(0).offsetHeight + (headerEl2.length ? headerEl2.get(0).offsetHeight : 0)) : 0;
        let filterSectionOffTop = (filterSectionEl.get(0).offsetTop - headerHeight);
        if ((window.pageYOffset) > filterSectionOffTop) {
          $(".filter-top").addClass("filter-sticky");
          $(".search-container").addClass("filter-sticky");
        } else {
          $(".filter-top").removeClass("filter-sticky");
          $(".search-container").removeClass("filter-sticky");
        }
        //code update 28/08/2021:end
      } else {
        //Desktop Sticky
        //code update 24/08/2021:begin
        $(".filter-top").removeClass("filter-sticky");
        $(".search-container").removeClass("filter-sticky");
        let headerEl = $("header.sticky-enable");
        let headerHeight = headerEl.length ? headerEl.get(0).offsetHeight : 0;
        let filterSectionOffTop = (filterSectionEl.get(0).offsetTop - headerHeight);
        if ((window.pageYOffset) > filterSectionOffTop) {
          $(".sidebar-content").addClass("sticky-sidebar");
          $(".filter-inner-container").addClass("sticky-enable");
        } else {
          $(".sidebar-content").removeClass("sticky-sidebar");
          $(".filter-inner-container").removeClass("sticky-enable");
        }
        //code update 24/08/2021:end

        $(".sidebar-content").removeClass("disable-sticky");
        removeStickySidebar(".looking-for-section");
        removeStickySidebar(".smart-way-section");
        removeStickySidebar(".footer");
      }
    }

    //Lazy Loading Effect
    $(".video-lists .video-list").each(function (index) {
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

  function removeStickySidebar(elementVar) {
    if ($(elementVar).length > 0) {
      if (
        $(elementVar).isOnScreen() &&
        $(".card-loading").length <= 0 &&
        $(".sidebar-content").hasClass("sticky-sidebar")
      ) {
        $(".sidebar-content").addClass("disable-sticky");
      }
    }
  }

  $(".sidebar-content .sidebar-body li").click(function () {
    if ($(window).width() > 991) {
      $("body, html").animate({
        scrollTop:
          $(".filter-video-section").offset().top - $("header").height(),
      });
    }
  });

  $(window).resize(function () {
    initVideoSlick();
  });
  /**
   * filter Code Active element
   */
  $(".sidebar-content li div").click(function (event) {
    if (event.target !== this) return; // Do nothing
    /* code update 05/03/2021 */
    if($(event.target).closest('.mCSB_draggerContainer').length > 0) return;
    /* code update end 05/03/2021 */
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
    if ($(this).parent().hasClass("dropdown")) {
      $(this).parent().find(".dropdown-list li").removeClass("active");
      $(this).parent().find(".dropdown-list li").first().addClass("active");
    } else {
      if ($(window).width() < 991) $(".sidebar-header .close").click();
    }
  });

  $(".sidebar-content .dropdown-list li").click(function (event) {
    $(".sidebar-content .dropdown-list li").removeClass("active");
    $(this).addClass("active");
    if ($(window).width() < 991) $(".sidebar-header .close").click();
  });

  /**
   * Most View
   */
  $(".sort-tools .sort-dropdown span").click(function () {
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

  /* sidebar */
  $(".sidebar-header .close").click(function () {
    $(".sidebar-content").removeClass("active");
    $("body").removeClass("no-scroll");
    if ($(window).width() < 991) {
      setTimeout(() => { //update : 27-08-2021
        $(".filter-top").addClass("filter-sticky");
        $(".search-container").addClass("filter-sticky");
        $("html, body").animate({
          scrollTop: $(".filter-section").offset().top - $("header").height() -20
        });
      }, 800);
     /* update start 18/02/21 */
      resetFilter();
     /* update end 18/02/21 */
    } else {
      $("html, body").animate({
        scrollTop: $(".filter-section").offset().top,
      });
    }
  });

  /* looking-for-slider */
  $(".looking-for-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    variableWidth: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

  /**
   * hash link filter activate
   */
  $(window).on("load", function () {
    var urlHash = window.location.hash;
    if (urlHash.length > 0) {
      if ($(urlHash).hasClass("dropdown")) {
        $(".sidebar-content li").removeClass("active");
        $(".sidebar-content li" + urlHash).addClass("active");
        $(".sidebar-content li" + urlHash)
          .find(".dropdown-list")
          .slideDown();
        $(".sidebar-content li" + urlHash + " .dropdown-list li:first").click();
      } else {
        $(".sidebar-content li" + urlHash + " div").click();
      }
    }
  });
});

function initVideoSlick() {
  if ($(window).width() > 560) {
    if ($(".video-card-m-slider").hasClass("slick-initialized")) {
      $(".video-card-m-slider").slick("unslick");
    }
    return true;
  }

  $(".video-card-m-slider").not(".slick-initialized").slick({
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
/* update start 18/02/21 */
function resetFilter(){
    if($('.filter-top.filter-sticky').length > 0){
    $(".feature-video-inner").show();
      $(".announcement-section").show();
      $(".filter-inner-container").removeClass("active");
      $(".filter-top").removeClass("filter-selected");
      $(".filter-top").removeClass("filter-sticky");
      $(".search-container").removeClass("filter-sticky");
      $(".filter-cat").hide();
    }
}
/* update end 18/02/21 */

/*  02/07/2021 */
$(window).on("unload", function(e) {
	$(".feature-video-inner .left-content .card-inner").off("click");
	$(".filter-top .filter-icon").off("click");
	$(".sort-tools .title").off("click");
	$(".sidebar-content .sidebar-body li").off("click");
	$(".sidebar-content li div").off("click");
	$(".sidebar-header .close").off("click");	
	$(".sort-dropdown span").off("click");
	$(".sort-tools .sort-dropdown li").off("click");  
});