$(document).ready(function () {
    /* like */
    $(".date-readtime .like").click(function () {
        $(this).toggleClass("active");
    })

    /* ic-comment-section */
    $(".ic-comment-section .comment-box .link").click(function () {
        $(this).hide();
        $(this).next(".more-comment").show();
    })



    $(".openvideopopup").click(function () {
        var iframe = $("#blogvideoiFrame");
        var anchorEl = $(this);
        iframe.attr("src", anchorEl.data("iframe-src") ? anchorEl.data("iframe-src") : iframe.data("iframe-src"));
        $(".blogvideo-popup").show();
        $("body").addClass("no-scroll");
    });
    $(".blogvideo-popup .popup-close").click(function () {
        $(".blogvideo-popup").hide(),
            $("body").removeClass("no-scroll");
        $(this).parent().find("iframe").attr("src", "about:blank");
    });
    $(".blogvideo-popup .btn-control").on("click", function () {
        $(".blogvideo-popup .play-btn, .pause-btn").toggle();
    });
});