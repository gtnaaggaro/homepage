/*  06/01/2021  */
$(".scrolltop-btn").click((function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1
})), 

$(window).on("scroll", function () {
    $(window).scrollTop() > 1900 ? $(".scrolltop").show() : $(".scrolltop").hide()
 });


$(window).resize(function () {
    WhatsappShow();
})

function WhatsappShow(){
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 1900 && $(document).width() < 991) {
            $(".whatsapp-link").hide();
        } else {
            $(".whatsapp-link").show();
        }
    });
}