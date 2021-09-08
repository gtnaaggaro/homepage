$(document).ready(function () {
    $(".leadform-popup .video-thumb img").click(function () {
        $(this).addClass("hide");
        $(".leadform-popup .iframe-video").removeClass("hide")
    })

    $(".leadform-popup .popup-close").click(function () {
        $(".leadform-popup").hide();
    });

    $("select[multiple]").multiselect({
        columns: 1,
        search: false,
        texts: {
            placeholder: "Select product type",
        },
    });

    $(".callback-form .input-group").click(function () {
        $(".input-group").removeClass("active");
        $(this).addClass("active");
    })

    $(document).on("click", function (e) {
        if (!$(".callback-form .input-group").is(e.target) && $(".callback-form .input-group").has(e.target).length === 0) {
            $(".input-group").removeClass("active");
        }
    });


    $("#lead-form-1").on("submit", (e) => {
        e.preventDefault();
        var fname = document.forms["lead-form-1"]["fname"].value;
        var lname = document.forms["lead-form-1"]["lname"].value;
        var mobNum = document.forms["lead-form-1"]["mob-num"].value;
        var email = document.forms["lead-form-1"]["email"].value;
        var productType = document.forms["lead-form-1"]["product-type"].value;
        var pincode = document.forms["lead-form-1"]["pincode"].value;
        var isValid = true;
        $("#lead-form-1 .error").removeClass('error');
        $("#lead-form-1 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-1 #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #fname-err").show();
            isValid = false;
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-1 #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #fname-num-err").show();
            isValid = false;
        }

        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-1 #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #lname-err").show();
            isValid = false;
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-1 #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #lname-num-err").show();
            isValid = false;
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !(/^[0-9]*$/.test(mobNum))) {//update 29/07/2021
            var $mobNumEl = $("#lead-form-1 #mob-num");
            $mobNumEl.addClass('error');
            $mobNumEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #mob-err").show();
            isValid = false;
        }
        if (email == null || email == "" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
            var $emailEl = $("#lead-form-1 #email");
            $emailEl.addClass('error');
            $emailEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #email-err").show();
            isValid = false;
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-1 #product-type");
            $prodTypeEl.addClass('error');
            $prodTypeEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #product-type-err").show();
            isValid = false;
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !(/^[0-9]*$/.test(pincode))) {//update 29/07/2021
            var $pincodeEl = $("#lead-form-1 #pincode");
            $pincodeEl.addClass('error');
            $pincodeEl.closest('.input-group').addClass('error');
            $("#lead-form-1 #pincode-err").show();
            isValid = false;
        }

        if (isValid) {
            console.log("form submitted", $("#lead-form-1").serializeArray());
            $("#success-txt").addClass("show");
            $(".leadform-popup .popup-heading").addClass("hide");
            $(".leadform-popup .lead-capture-form").addClass("success");
            $("#lead-form-1")[0].reset();
            $("#lead-form-1 #product-type").multiselect('reload');
            setTimeout(() => {
                $("#success-txt").removeClass("show");
                $(".leadform-popup .popup-heading").removeClass("hide");
                $(".leadform-popup .lead-capture-form").removeClass("success");
            }, 15000);
        }
    });
});

