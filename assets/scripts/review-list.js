$(document).ready(function () {
    /**
     * Scroll Sticky
     */
    $(window).bind("scroll", function () {

        //Lazy Loading Effect
        $(".review-card-lists .card-list-wraper").each(function (index) {
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