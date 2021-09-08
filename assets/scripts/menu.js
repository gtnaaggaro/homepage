function contactUsSlider() {
  !$(".contact-slider").hasClass("slick-initialized") &&
    $(".contact-slider").slick({
      dots: !0,
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 2e3,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
}
$(function ($) {
  navigator.userAgent.match(/iPad/i) ||
  null != navigator.userAgent.match(/iPad/i)
    ? $("ul.primary-menu").on(
        "touchstart",
        function () {
          $(".body-overlay").show().addClass("is-active");
        },
        function () {
          $(".body-overlay").hide().removeClass("is-active");
        }
      )
    : $("ul.primary-menu").hover(
        function () {
          //$(".body-overlay").show().addClass("is-active"),
          closeRightProduct();
          closeNotifications(), closePersonalBanking(), closeSerach();
        },
        function () {
          $(".body-overlay").hide().removeClass("is-active");
        }
      ),
    navigator.userAgent.match(/iPad/i) ||
    null != navigator.userAgent.match(/iPad/i)
      ? $("ul.primary-menu > li").on("click", function () {
          $(".menu-level-1-child .menu-leaf").removeClass("is-active"),
            $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active"),
            $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active"),
            $(".menu-close-btn").trigger("click"),
            $(this).hasClass("is-active")
              ? ($(".secondary-menu-wrapper").removeClass("is-active"),
                $(".secondary-menu-wrapper").hide())
              : ($(".secondary-menu-wrapper").removeClass("is-active"),
                $(".secondary-menu-wrapper").hide(),
                $(this).find(".secondary-menu-wrapper").addClass("is-active"),
                $(this).find(".secondary-menu-wrapper").show());
        })
      : $("ul.primary-menu > li").hover(
          function () {
            $(this).hasClass("is-active") ||
              ($(".secondary-menu-wrapper")
                .stop(!0, !0)
                .slideUp()
                .removeClass("is-active"),
              $(".primary-menu > li").stop(!0, !0).removeClass("is-active")),
              $(".body-overlay").hasClass("is-active")
                ? $(this)
                    .find(".secondary-menu-wrapper")
                    .stop(!0, !0)
                    .toggle()
                    .toggleClass("is-active")
                : $(this)
                    .find(".secondary-menu-wrapper")
                    .stop(!0, !0)
                    .slideToggle(1e3)
                    .toggleClass("is-active"),
              $(this).stop(!0, !0).toggleClass("is-active");

            if ($(this).find(".secondary-menu-wrapper").length > 0) {
              $(".body-overlay").show().addClass("is-active");
            } else {
              $(".body-overlay").hide().removeClass("is-active");
            }
          },
          function () {
            $(".secondary-menu-wrapper")
              .stop(!0, !0)
              .slideUp()
              .removeClass("is-active"),
              $(".primary-menu > li").stop(!0, !0).removeClass("is-active");
          }
        ),
    $(document).click(function (e) {
        var $target = $(e.target);
        if(!$target.closest(".menu-level-2 .right-side-menu .menu-leaf").length) {
            $(".menu-level-2 .right-side-menu .menu-leaf").removeClass("is-active");
            $(".menu-level-2 .right-side-menu .menu-leaf").find(".sub-menu-wrapper").removeClass("is-active");
            if($(".contact-slider").hasClass("slick-initialized"))
              $(".contact-slider").slick("unslick");
        }
      var $menu1 = $(".main-menu .primary-menu");
      navigator.userAgent.match(/iPad/i) ||
      null != navigator.userAgent.match(/iPad/i)
        ? $menu1.is(e.target) ||
          0 !== $menu1.has(e.target).length ||
          ($(".secondary-menu-wrapper").hide(), $(".body-overlay").hide())
        : !$menu1.is(e.target) &&
          0 === $menu1.has(e.target).length &&
          $(".body-overlay").hasClass("is-active") &&
          ($(".secondary-menu-wrapper").hide(), $(".body-overlay").hide());

      if (
        !$(e.target).closest(".find-product-menu").length &&
        !$(e.target).closest(".fp-selectmenu").length &&
        $(".find-product-dropdown").hasClass("is-active") &&
        !$target.hasClass('ui-selectmenu-text')
      ) {
        closeRightProduct();
      }
    }),
    navigator.userAgent.match(/iPad/i) ||
    null != navigator.userAgent.match(/iPad/i)
      ? $(".secondary-menu > li").on("click", function () {
          var listItem = $(this).index();
          ($parent = $(this).closest(".menu-container")),
            $parent.find(".secondary-menu > li").removeClass("active"),
            $(this).addClass("active"),
            $parent.find(".second-menu-tab-item").each(function (i) {
              i == listItem
                ? ($(this).show(),
                  $(this)
                    .parent(".secondary-menu-wrapper")
                    .addClass("is-active"),
                  $(this).parent(".secondary-menu-wrapper").show())
                : $(this).hide();
            });
        })
      : $(".secondary-menu > li").hover(function () {
          var listItem = $(this).index();
          ($parent = $(this).closest(".menu-container")),
            $parent.find(".secondary-menu > li").removeClass("active"),
            $(this).addClass("active"),
            $parent.find(".second-menu-tab-item").each(function (i) {
              i == listItem ? $(this).show() : $(this).hide();
            });
        }),
    navigator.userAgent.match(/iPad/i) ||
    null != navigator.userAgent.match(/iPad/i)
      ? $(".menu-level-1 .menu-leaf").on("click", function () {
          closeNotifications(),
            closePersonalBanking(),
            closeRightProduct(),
            $(
              ".notification-list-container, .notification-menu-overlay, .search-overlay"
            ).hide(),
            (clickIndex = $(".menu-level-1 .menu-leaf").index($(this))),
            $(this).hasClass("is-active") &&
            $(".menu-level-1 .menu-leaf.is-active").index(
              $(".menu-level-1 .menu-leaf") == clickIndex
            )
              ? ($(this).removeClass("is-active"),
                $(this).find(".sub-menu-wrapper").removeClass("is-active"))
              : ($(".menu-level-1 .menu-leaf").removeClass("is-active"),
                $(".menu-level-1 .menu-leaf")
                  .find(".sub-menu-wrapper")
                  .removeClass("is-active"),
                $(this).addClass("is-active"),
                $(this).find(".sub-menu-wrapper").addClass("is-active")),
            contactUsSlider();
        })
      : $(
          ".menu-level-1 .menu-leaf, .menu-level-2 .right-side-menu .menu-leaf"
        ).hover(
          function () {
            closeNotifications(),
              closePersonalBanking(),
              closeRightProduct(),
              closeSerach(),
              $(this).addClass("is-active"),
              $(this).find(".sub-menu-wrapper").addClass("is-active"),
              contactUsSlider();
          },
          function () {
            $(this).removeClass("is-active"),
            $(this).find(".sub-menu-wrapper").removeClass("is-active");
            $(".contact-slider").slick("unslick");
          }
        ),
    $(".body-overlay").hover(function () {
      $(this).fadeOut();
    }),
    $(".menu-level-1 .other-menu").hover(function (e) {
      e.preventDefault();
    }),

    //code change 30/12/2020
    $(".menu-level-1 .personal-menu").hover(function (){}, function (){
      if($(".personal-menu").hasClass("active")){
        $(".menu-close-btn").trigger("click")
      }
    }),
    $(".menu-level-1 .business-menu").hover(function (){}, function (){
      if($(".business-menu").hasClass("active")){
        $(".menu-close-btn").trigger("click")
      }
    }),
    $(".menu-level-1 .personal-menu .link-area a").hover(function (e) {
      e.preventDefault();
      $(".menu-level-1-child .menu-leaf").removeClass("is-active")
      $(".other-menu").removeClass("active current")
      $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active")
      $(".other-dropdown").removeClass("active")
      $(".personal-menu").addClass("active")
      $(".personal-menu").find(".other-dropdown").addClass("active")
      $(".menu-level-1").addClass("active");
    }),
    $(".menu-level-1 .business-menu .link-area a").hover(function (e) {
      e.preventDefault();
      $(".menu-level-1-child .menu-leaf").removeClass("is-active")
      $(".other-menu").removeClass("active current")
      $(".menu-level-1-child .sub-menu-wrapper").removeClass("is-active")
      $(".other-dropdown").removeClass("active")
      $(".business-menu").addClass("active")
      $(".menu-level-1").addClass("active")
      $(".business-menu").find(".other-dropdown").addClass("active")
    }),
    //end code change 30/12/2020
    $(".menu-close-btn").click(function (e) {
      $(".other-dropdown").removeClass("active"),
        $('.menu-inner .left-side-menu li.active').addClass('current'),
        $(".personal-menu").removeClass("active"),
        //$(".personal-menu").addClass("current"),
        $(".business-menu").removeClass("active"),
        $(".menu-level-1").removeClass("active");
    }),
    $(".menu-level-1-child li").click(function (e) {
      if($(e.target).closest('.contact-slider').length)
        return true;
      $(this).hasClass("other-menu") || $(".menu-close-btn").trigger("click");
    }),
    $(".menu-btn").on("click", function () {
      $(
        ".menu-btn, .right-block, .lang-icon-mob, .languageselect-mob"
      ).toggleClass("hide"),
      $(".countryselect-mob").toggleClass("active"),
        $(".main-menu-wrapper").toggleClass("is-active"),
        $(".menu-list-item .menu-fold").removeClass("is-active"),
        $(".menu-tab-content .menu-tab-item").hide(),
        $(".menu-tab-content .menu-tab-item:eq(0)").show();
    }),
    $(".menu-tab").on("click", function () {
      $(".menu-tab-ul").hide(),
        $(".menu-tab").removeClass("active"),
        $(this).addClass("active"),
        $(this).siblings("ul").toggle();
    }),
    $(".menu-tab-list li").on("click", function () {
      $(".menu-tab-list ul li").removeClass("is-active"),
        (clickIndex = $(this).parent("ul").find("li").index($(this))),
        (showDiv = $(this).parent("ul").attr("data-tab")),
        null != showDiv &&
          "" != showDiv &&
          ($(".menu-tab-item").hide(),
          $("#" + showDiv)
            .find(".menu-tab-item")
            .hide(),
          $("#" + showDiv + " .menu-tab-item:eq(" + clickIndex + ")").show()),
        $(".menu-tab-list ul").hide(),
        $(this).addClass("is-active"),
        "business-tab" == showDiv
          ? $(".business-tab .menuitem-active").html($(this).find("a").html())
          : "personal-tab" == showDiv &&
            $(".personal-tab .menuitem-active").html($(this).find("a").html());
    }),
    $(".menu-list-item ul li p").on("click", function () {
      $(".menu-tab-list .menu-tab").removeClass("active"),
        $(".menu-tab-list .menu-tab-ul").hide(),
        $(this).siblings(".menu-fold").toggleClass("is-active");
    }),
    $(".menu-back-link").on("click", function () {
      $(this).closest(".menu-fold").toggleClass("is-active");
    });

  $(".menu-level-3 .find-product-menu .title").click(function (event) {
    if (event.target !== this) return; // Do nothing
    closeNotifications();
    closePersonalBanking();
    closeSerach();
    $(this).toggleClass("is-active");
    $(this).siblings(".find-product-dropdown").toggleClass("is-active");
    $(this).parent().siblings(".menu-overlay").toggle();
  });
  $(".menu-level-2 .right-side-menu .menu-leaf").click(function (event) {
    if ($(document).width() >= 960) {
        $(".sub-menu-wrapper").removeClass("is-active");
        $('.menu-level-2 .right-side-menu .menu-leaf').removeClass("is-active");
        $(this).addClass("is-active");
        $(this).find(".sub-menu-wrapper").addClass("is-active");
        closePersonalBanking();
        contactUsSlider();
    }
  });

  $(".menu-level-3  .find-pro-select").selectmenu({
    classes: {
      "ui-selectmenu-menu": "fp-selectmenu",
    },
  });
});
