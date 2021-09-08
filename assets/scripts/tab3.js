var current = 1;
var interval;
/* way-to-bank-slider */
$(".way-to-bank-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(function ($) {
  $("#way-to-bank a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
  $(".nudge-for-way-to-bank").hide();
  $("#ways-to-bank-tabs ul li a").on("click", function (e) {
    $(".way-to-bank-slider").slick("refresh");
    var dataSrc = $(this).attr("data-src");
    $(this)
      .closest(".ways-to-bank-section")
      .find(".tab-sync-img")
      .attr("src", dataSrc);
    let nudgeContent = $(this).data("nudge-content");
    let nudgeElement = $(this)
      .closest(".ways-to-bank-section")
      .find(".nudge-for-way-to-bank");
    if (nudgeContent != undefined) {
      nudgeElement.show();
      nudgeElement.html("<p>" + nudgeContent + "</p>");
    } else {
      nudgeElement.hide();
    }
  });

  function waystobank() {
    document.getElementById("myImg").src = "hackanm.gif";
    document.getElementById("myImg2").src = "hackanm.gif";
  }
  $(".clickme a").click(function () {
    $tabParent = $(this).closest(".tabs-container");
    $tabParent.find(".clickme a").removeClass("activelink");
    $(this).addClass("activelink");
    var tagid = $(this).data("tag");
    $tabParent.find(".list").removeClass("active").addClass("hide");
    $tabParent
      .find("#" + tagid)
      .addClass("active")
      .removeClass("hide");
  });

  $("#whatsapp input#mobile").keyup(function () {
    whatsappNoValidate();
  });
  $("#whatsapp .checkbox-list input").change(function () {
    whatsappNoValidate();
  });
  $("#whatsapp .arrow").click(function () {
    $("#whatsapp .form-groups").hide();
    $("#whatsapp .sucess-msg").show();
    $("#whatsapp .sucess-msg strong").html(
      "'" + $("#whatsapp input#mobile").val() + "'"
    );
  });
  $("#whatsapp .sucess-msg .edit").click(function () {
    $("#whatsapp .form-groups").show();
    $("#whatsapp .sucess-msg").hide();
  });

  function whatsappNoValidate() {
    $("#whatsapp .sucess-msg").hide();
    var moileNo = $("#whatsapp input#mobile").val();
    var checkboxValue = $("#whatsapp .checkbox-list input").prop("checked");
    if (checkboxValue && moileNo.match(/^[0-9]{10}$/) != null)
      $("#whatsapp .arrow").removeClass("arrow-disable");
    else $("#whatsapp .arrow").addClass("arrow-disable");
  }
});

/* digitalbanking */
$(".digitalbanking-ul li").on("click", function (e) {
  var dataSrc = $(this).attr("id");
  $(this).closest(".digitalbanking").find(".digital-img").attr("src", dataSrc);
});

$(".digitalbanking-ul li").on("click", function () {
  $(".digitalbanking-ul li").removeClass("active");
  $(this).toggleClass("active");

  var index = this.getAttribute("index");
  current = parseInt(index);
  var divs = $(".digitalbanking-media .media-list").hide();
  divs.eq(current).fadeIn("normal");
  current++;
  startAnimation();
});

/* qrcode */
$(".qrcodebox .qrcode-icon").click(function () {
  $(this).next(".qrcode-popup").show();
  //code update: 30/06/2021
  clearInterval(interval);
  $(".digitalbanking-ul li").removeClass("active");
});
$(".qrcode-popup .close").click(function () {
  $(".qrcode-popup").hide();
  //code update: 30/06/2021
  startAnimation();
  $(".digitalbanking-ul li").eq(0).addClass("active");
});

/* digitalbanking  */
function startAnimation() {
  console.log("start animation==", current);
  clearInterval(interval);
  interval = setInterval(function () {
    var divs = $(".digitalbanking-media .media-list").hide();
    var ulList = $(".digitalbanking-ul li").removeClass("active");
    divs.eq(current).fadeIn("normal");
    ulList.eq(current).addClass("active");
    if (current < divs.length - 1) current++;
    else current = 0;
  }, 10000);
}
startAnimation();
