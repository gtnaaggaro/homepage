$(document).ready(function () {
    initCardSlick();

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

    $(".sort-tools .title").click(function () {
        $(".sort-dropdown .dropdown-wrapper").toggle("show");
    });


    $(".orangebook-download .orangebook-cards-slider")
        .not(".slick-initialized")
        .slick({
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },

                {
                    breakpoint: 557,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: "15px"
                    },
                },
            ],
        });

    /* filter */
    $(".sidebar-content li div").click(function (event) {
        if (event.target !== this) return;
        if ($(event.target).closest('.mCSB_draggerContainer').length > 0) return;
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

    /* scrollbar */
    $('.orangebook-dropdown .dropdown-list').mCustomScrollbar();
    $('.orangebook-ul ul').mCustomScrollbar();

    /**
   * Scroll Sticky
   */
    $(window).bind("scroll", function () {
        if ($(window).width() < 991) {
            let filterSectionEl = $(".filter-section");
            let headerEl1 = $(".new-header.mobile.sticky-enable .device-menu-top");
            let headerEl2 = $(".new-header.mobile.sticky-enable .search");
            let headerHeight = headerEl1.length ? (headerEl1.get(0).offsetHeight + (headerEl2.length ? headerEl2.get(0).offsetHeight : 0)) : 0;
            if (filterSectionEl.length) {
                let filterSectionOffTop = (filterSectionEl.get(0).offsetTop - headerHeight);
                if ((window.pageYOffset) > filterSectionOffTop) {
                    $(".filter-top").addClass("filter-sticky");
                    // $(".search-container").addClass("filter-sticky");
                } else {
                    $(".filter-top").removeClass("filter-sticky");
                    // $(".search-container").removeClass("filter-sticky");
                }
            }
        } else if ($(window).width() > 991) {
            $(".filter-top").removeClass("filter-sticky");
            $(".search-container").removeClass("filter-sticky");
        }

        //Lazy Loading Effect
        $(".orangebook-lists .orangebook-list").each(function (index) {
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



$(window).on("load orientationchange", function () {
    initCardSlick();
});


function initCardSlick() {
    if ($(window).width() > 560) {
        if ($(".orangebook-card-m-slider").hasClass("slick-initialized")) {
            $(".orangebook-card-m-slider").slick("unslick");
        }
        return true;
    }

    $(".orangebook-card-m-slider").not(".slick-initialized").slick({
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


/* podcast */
$(function () {

    // $('.podcast-play-btn').click(function (e) {
    //     $(".podcast-popup").show();
    //     audio.play();
    // });

    $(document).on('click', '.podcast-play-btn', function (e) {
        e.preventDefault();
        $(".podcast-popup").show();
        audio.src = e.target.getAttribute('data-value');
        audio.play();
    });

    $('.podcast-popup .close-icon').click(function (e) {
        $(".podcast-popup").hide();
        audio.pause();
    });

    const audio = $('audio')[0];
    let durUpdated = false;

    $('.audioPlayer .play-icon').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('pause-icon');

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.onplay = function() {
        durUpdated = false;
    };

    audio.ontimeupdate = function () {
        $('.progress').css('width', audio.currentTime / audio.duration * 100 + '%');
        $('.start-time').text(formatTime(audio.currentTime));
        (!durUpdated && audio.duration) && ($('.total').text(formatTime(audio.duration)) && (durUpdated=true));
    };


    audio.onended = function () {
        $(this).toggleClass('play-icon');
    };


    $('.progress-bar').click(function (e) {
        e.preventDefault();
        audio.currentTime = e.offsetX / $(this).width() * audio.duration;
    });

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : '0' + seconds;
        return minutes + ':' + seconds;
    }
});

/*filter*/
$(".toggle-checkbox-ul-more").click(function () {
    $(this).hide();
    $(".checkbox-ul-more").show();
})

function resetFilter() {
    if ($('.filter-top.filter-sticky').length > 0) {
        $(".feature-video-inner").show();
        $(".announcement-section").show();
        $(".filter-inner-container").removeClass("active");
        $(".filter-top").removeClass("filter-selected");
        $(".filter-top").removeClass("filter-sticky");
        $(".filter-cat").hide();
    }
}

$(".sidebar-header .close, .sidebar-footer .apply").click(function () {
    closeSidebarFilter();
});
function closeSidebarFilter(){
    $(".sidebar-content").removeClass("active");
    $(".filter-top").removeClass("filter-selected");
    $(".filter-top").removeClass("filter-sticky");
    resetFilter();
    $("body").removeClass("no-scroll");
    if ($(window).width() < 991) {
        $("html, body").animate({
            scrollTop:
                $(".filter-section").offset().top -
                ($(".new-header.mobile").height() +
                    $(".new-header.mobile .search").height() +
                    10),
        });
    } else {
        $("html, body").animate({
            scrollTop: $(".filter-section").offset().top,
        });
    }
}
$(".sidebar-footer .clear-all").click(function () {
    $(".sidebar-content .checkbox-list input").prop("checked", false);
    $(".sidebar-content .checkbox-list input")
        .closest("li")
        .removeClass("active");
    closeSidebarFilter();
});


$(".filter-top .filter-icon").click(function () {
    // $(".filter-inner-container").addClass("active");
    $(".filter-cat").show();
    if (!$(".filter-top").hasClass("filter-sticky")) {
        $(".filter-top").addClass("filter-sticky");
    }
    $(".filter-top").addClass("filter-selected");
    $(".sidebar-content").addClass("active");
    $("body").addClass("no-scroll");
    $(".filter-cat").addClass("active");

    $(".orangebook-ul ul").mCustomScrollbar('destroy');
});

$(document).on("click", ".filter-cat .filter-clear", function () {
    $(".filter-inner-container").removeClass("active");
    $(".filter-top").removeClass("filter-selected");
    $(".filter-top").removeClass("filter-sticky");
    $(".search-container").removeClass("filter-sticky");
    $(".filter-cat").hide();
});

$("#subcribe-form").on("submit", (e) => {
    e.preventDefault();
    var fname = document.forms["subcribe-form"]["name"].value;
    var email = document.forms["subcribe-form"]["email"].value;
    var isValid = true;
    $("#subcribe-form .error").removeClass('error');
    $("#subcribe-form .error-txt").hide();
    var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
    if (fname == null || fname == "") {
        var $fnameEl = $("#subcribe-form #name");
        $fnameEl.addClass('error');
        // $fnameEl.closest('.input-group').addClass('error');
        $("#subcribe-form #fname-err").show();
        isValid = false;
    }
    if (fnameInvalid) {
        var $fnameEl = $("#subcribe-form #name");
        $fnameEl.addClass('error');
        // $fnameEl.closest('.input-group').addClass('error');
        $("#subcribe-form #fname-num-err").show();
        isValid = false;
    }
    if (email == null || email == "" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
        var $emailEl = $("#subcribe-form #email");
        $emailEl.addClass('error');
        // $emailEl.closest('.input-group').addClass('error');
        $("#subcribe-form #email-err").show();
        isValid = false;
    }
    if (isValid) {
        console.log("form submitted", $("#subcribe-form").serializeArray());
        // $("#success-txt").addClass("show");
        $("#subcribe-form")[0].reset();
    }

});
