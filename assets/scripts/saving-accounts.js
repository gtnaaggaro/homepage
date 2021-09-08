(function() {

$(".benefit-short-card .cards-list-carousel").slick({
	dots: !0,
	arrows: !0,
	infinite: !0,
	autoplay: !0,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
		{ breakpoint: 767, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
		{ breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
	],
});
/* 26/02/2021 start */
$(".benefit-card-section .benefit-itsa-carousel").slick({
	dots: !1,
	arrows: !0,
	infinite: !0,
	autoplay: !1,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
		{ breakpoint: 767, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
		{ breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
	],
});

/* 26/02/2021 end */
$(".benefit-short-card .card-list-item-carousel").slick({
	dots: !0,
	arrows: !0,
	infinite: !0,
	autoplay: !0,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 3, dots: !1 } },
		{ breakpoint: 767, settings: { slidesToShow: 2, dots: !0, arrows: !1 } },
		{ breakpoint: 560, settings: { slidesToShow: 1, dots: !0, arrows: !1 } },
	],
});

$(".banner-component .banner-slider .banner-slide .media-list").slick({
	dots: !0,
	arrows: !1,
	infinite: !1,
	autoplay: !1,
	autoplaySpeed: 5000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
});

/* 16/06/2021 */
$(".banner-component .banner-slider .banner-slide.full-width-slider").slick({
	dots: !0,
	arrows: !1,
	infinite: !1,
	autoplay: !1,
	autoplaySpeed: 5000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{ breakpoint: 767, settings: { adaptiveHeight: !0 } },
	],
});

$(".banner-slider .banner-video .media-list").slick({
	dots: !0,
	arrows: !1,
	infinite: !0,
	autoplay: !0,
	autoplaySpeed: 5000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: { adaptiveHeight: !1 },
		},
	],
});
$(".banner-slider .banner-multiple-video .video-right").slick({
	dots: !0,
	arrows: !1,
	infinite: !0,
	autoplay: !0,
	autoplaySpeed: 5000,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 640,
			settings: {
				arrows: !1,
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: !1,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

$(".banner-slider .img-description").slick({
	dots: !0,
	arrows: !1,
	infinite: !1,
	autoplay: !1,
	autoplaySpeed: 1000,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: { arrows: !1 },
		},
	],
});

$(".customer-review-slider.single-slide").slick({
	dots: !1,
	arrows: !0,
	infinite: !0,
	autoplay: !1,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
});
$(".customer-review-slider.double-slide").slick({
	dots: !1,
	arrows: !0,
	infinite: !0,
	autoplay: !1,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

$(".to-apply-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !0,
	autoplay: !0,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
$(".how-it-works-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !0,
	autoplay: !0,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: !1,
			},
		},
	],
});
$(".additional-content-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !0,
	autoplay: !0,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{ breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
		{ breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } },
	],
});

if ($(".special-discounts .short-card-slider").length > 0) {
	$(".short-card-slider")
		.not(".slick-initialized")
		.slick({
			dots: !0,
			arrows: !0,
			infinite: !1,
			autoplay: !1,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						arrows: !1,
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 640,
					settings: {
						arrows: !1,
						centerMode: !0,
						slidesToShow: 1,
						slidesToScroll: 1,
						centerPadding: "45px",
					},
				},
			],
		});
}

//Recomeded debit cards slider
$(".recomeded-cards-section .cards-list").slick({
	dots: !0,
	arrows: !0,
	infinite: !1,
	autoplay: !1,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: !1,
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 640,
			settings: {
				arrows: !1,
				centerMode: !0,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: "45px",
			},
		},
	],
});
/* Update 18/02/2021 */
$(document).ready(function () {
	$("#product-type-button").remove();
	$("#product-type2-button").remove();
	$("select[multiple]").multiselect({
		columns: 1,
		search: false,
		texts: {
			placeholder: "Select product type",
		},
	});
	/* 15-03-2021 start */
	$(".review-btn").click(function () {
		$(".review-popup-section").show();
		$("body").addClass("no-scroll");
	});
	$(".review-popup-section .close").click(function () {
		$(".review-popup-section").hide();
		$("body").removeClass("no-scroll");
	});
	/* 15-03-2021 end */
});
/* Update end 18/02/2021 */

$(window).on("load resize orientationchange", function () {
	if ($(window).width() > 991) {
		$(".related-products .row, .how-it-works-slider").each(function () {
			$(this)
				.find(".related-card-inner, .how-it-works-card-inner")
				.equalHeights();
		});
	}
	$(".comparing-cards-section .comparing-cards").each(function () {
		$(this).find(".comparing-column .cards").equalHeights();
		$(this).find(".comparing-column .content").equalHeights();
		$(this).find(".comparing-column .rating").equalHeights();
		$(this).find(".comparing-column .apply-btn").equalHeights();
		$(this).find(".comparing-column").equalHeights();
		
	});
	
	$(".cards-categories-section .trending-deals-slider .deal-card").equalHeights();
	$(".discount-offer-inner .trending-deals-slider .deal-card").equalHeights();
	$(".benefit-short-card .card-list-item-carousel .card-list").equalHeights();
	$(".debit-cards-section .trending-deals-slider .description").equalHeights();
});

$(window).on("load", function () {
	$(".accordion--scroll").mCustomScrollbar();
	/* 15-03-2021 start */
	$(".reviews--scroll").mCustomScrollbar();
	/* 15-03-2021 end */
});

$(".additional-content-tab .nav-tabs li a").on("click", function () {
	$(".additional-content-wrapper .slick-slider").slick("refresh");
});

$(".did-you-know-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !1,
	autoplay: !1,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 640,
			settings: {
				arrows: false,
				slidesToShow: 1,
				dots: true,
				centerMode: true,
				centerPadding: "20px",
				infinite: true,
			},
		},
	],
});
$(".related-video-slider .related-video-slider-inner").slick({
	dots: !0,
	arrows: !0,
	infinite: !1,
	autoplay: !1,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 640,
			settings: {
				arrows: false,
				slidesToShow: 1,
				dots: true,
				centerMode: true,
				centerPadding: "20px",
				infinite: true,
			},
		},
	],
});

/* 28/06/2021 start */
$(".infographics-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !1,
	autoplay: !1,
	slidesToShow: 1,
	slidesToScroll: 1,
});

$(".merchants-slider").slick({
	dots: !0,
	arrows: !0,
	infinite: !1,
	autoplay: !1,
	slidesToShow: 4,
	slidesToScroll: 4,

	responsive: [
		{
			breakpoint: 1025,
			settings: {
				arrows: false,
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 640,
			settings: {
				arrows: false,
				slidesToShow: 1,
			},
		},
	],
});
/* 28/06/2021 End */

initDatePickers();

function initDatePickers() {
	$(".starting_date").flatpickr({
		dateFormat: "d/m/Y",
		defaultDate: moment("01/01/1990").format("DD/MM/YYYY"),
		minDate: moment().subtract(60, "y").format("DD/MM/YYYY"),
		maxDate: moment().format("DD/MM/YYYY"),
	});

	$(".end_date").flatpickr({
		dateFormat: "d/m/Y",
		defaultDate: moment("01/01/1990").format("DD/MM/YYYY"),
		minDate: moment().subtract(60, "y").format("DD/MM/YYYY"),
		maxDate: moment().format("DD/MM/YYYY"),
	});
}

/* popup */

$(".popup-section .close").click(function () {
	$(".popup-section").hide();
});
/* 15-03-2021 start */
/* lazy */
var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy",
});
/* 15-03-2021 end */

/*24/3/2021: Customer review steps form*/
$(document).ready(function () {
	var a = 51;
	var b = 91;
	var queryText = a + " + " + b + "?";
	document.getElementById("queryString").innerHTML = queryText;
	var result = parseInt(a) + parseInt(b);
	document.getElementById("actualResult").value = result;
});
/* Star rating code */
$("#customerreviewForm")
	.find(".star-rating span")
	.on("click", function () {
		$(this).siblings().removeClass("checked");
		$(this).prevAll().addClass("checked");
		/* 08/04/2021 update */
		$(this).hasClass("checked")
			? $(this).addClass("checked")
			: $(this).addClass("checked");
		$(this)
			.parent()
			.next('input[name="rating"]')
			.val($(this).parent().find(".checked").length);
	});
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == x.length - 1) {
		document.getElementById("nextBtn").innerHTML = "Post A review";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	fixStepIndicator(n);
}

function nextPrev(n) {
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab >= x.length) {
		/* document.getElementById("customerreviewForm").submit();*/
		//$("#sucess-message1").show();
		$("#customerreviewForm").hide();
		$("#customerreviewForm #rating") &&
			$("#customerreviewForm #rating").val() <= 3
			? $("#sucess-message1").show()
			: $("#sucess-message2").show();

		return false;
	}
	showTab(currentTab);
}

function validateForm() {
	var x,
		y,
		i,
		valid = true;
	x = document.getElementsByClassName("tab");
	var currTab = $(".tab.active");
	currTab.find("input").each(function (index, ele) {
		$(ele).removeClass("invalid");
		if ($(ele).val() == "") {
			$(ele).addClass("invalid");
			$(ele).parent().next(".error").show();
			valid = false;
			return false;
		} else {
			$(ele).parent().next(".error").hide();
			if ($(ele).attr("id") == "email") {
				var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if (!regEmail.test($(ele).val())) {
					valid = false;
					$(ele).parent().next(".error").show();
					return false;
				}
			} else if ($(ele).attr("id") == "result") {
			} else {
				if (
					$(ele).attr("id") !== "rating" &&
					!/^[a-zA-Z\s]*$/.test($(ele).val())
				) {
					valid = false;
					$(ele).parent().next(".error").show();
					return false;
				}
			}
		}
	});
	var text_area = currTab.find("textarea");
	if (text_area.length > 0) {
		if (text_area.val() == "") {
			text_area.siblings(".error").show();
			valid = false;
		} else {
			if (text_area.val().length > 100) {
				text_area.siblings(".error").html("Please enter 100 characters only");
				valid = false;
			}
		}
	}
	/*     y = x[currentTab].getElementsByTagName("input");
		for (i = 0; i < y.length; i++) {
			if (y[i].value == "") {
				y[i].className += " invalid";
				
				valid = false;
			}
			else {
				if (y[i].id == "email") {
					
					var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					if (!regEmail.test(y[i].value)) {
						
						valid = false;
						
						y[i].nextElementSibling.style.display = "block";
    
					}
				}
				else {
    
				}
    
			}
		} */
	// If the valid status is true, mark the step as finished and valid:
	if (valid) {
		document.getElementsByClassName("tab")[currentTab].className += " finish";
	}
	return valid; // return the valid status
}

function fixStepIndicator(n) {
	var i,
		x = document.getElementsByClassName("tab");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
}
//24/3/2021: ENd customer review steps form

/* 19/04/2021 */
$(".iMobile-slider").slick({
	dots: !0,
	arrows: !1,
	infinite: !0,
	autoplay: !0,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
});


/*  02/07/2021 */
$( window ).unload(function() {
	$(".review-btn").off("click");
	$(".review-popup-section .close").off("click");
	$(".popup-section .close").off("click");	
});

})();
