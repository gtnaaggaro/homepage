$(document).ready(function () {
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

    // $("#lead-form-1 #mob-num, #lead-form-1 #pincode, #lead-form-2 #mob-num, #lead-form-2 #pincode, #lead-form-3 #mob-num, #lead-form-3 #pincode").ForceNumericOnly(); //update 29/07/2021

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
            $("#lead-form-1")[0].reset();
            $("#lead-form-1 #product-type").multiselect('reload');
            setTimeout(() => {
                $("#success-txt").removeClass("show");
            }, 15000);
        }
    });

    $("#lead-form-2").on("submit", (e) => {
        e.preventDefault();
        var fname = document.forms["lead-form-2"]["fname"].value;
        var lname = document.forms["lead-form-2"]["lname"].value;
        var mobNum = document.forms["lead-form-2"]["mob-num"].value;
        var email = document.forms["lead-form-2"]["email"].value;
        var productType = document.forms["lead-form-2"]["product-type"].value;
        var pincode = document.forms["lead-form-2"]["pincode"].value;
        var isValid = true;
        $("#lead-form-2 .error").removeClass('error');
        $("#lead-form-2 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-2 #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #fname-err").show();
            isValid = false;
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-2 #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #fname-num-err").show();
            isValid = false;
        }
        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-2 #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');

            $("#lead-form-2 #lname-err").show();
            isValid = false;
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-2 #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #lname-num-err").show();
            isValid = false;
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !(/^[0-9]*$/.test(mobNum))) {//update 29/07/2021
            var $mobNumEl = $("#lead-form-2 #mob-num");
            $mobNumEl.addClass('error');
            $mobNumEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #mob-err").show();
            isValid = false;
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-2 #product-type");
            $prodTypeEl.addClass('error');
            $prodTypeEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #product-type-err").show();
            isValid = false;
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !(/^[0-9]*$/.test(pincode))) {//update 29/07/2021
            var $pincodeEl = $("#lead-form-2 #pincode");
            $pincodeEl.addClass('error');
            $pincodeEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #pincode-err").show();
            isValid = false;
        }
        if (email == null || email == "" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
            var $emailEl = $("#lead-form-2 #email");
            $emailEl.addClass('error');
            $emailEl.closest('.input-group').addClass('error');
            $("#lead-form-2 #email-err").show();
            isValid = false;
        }
        if (isValid) {
            console.log("form submitted", $("#lead-form-2").serializeArray());
            $("#success-txt").addClass("show");
            $("#lead-form-2")[0].reset();
            $("#lead-form-2 #product-type").multiselect('reload');
            setTimeout(() => {
                $("#success-txt").removeClass("show");
            }, 15000);
        }
    });

    $("#lead-form-3").on("submit", (e) => {
        e.preventDefault();
        var fname = document.forms["lead-form-3"]["fname"].value;
        var lname = document.forms["lead-form-3"]["lname"].value;
        var mobNum = document.forms["lead-form-3"]["mob-num"].value;
        var email = document.forms["lead-form-3"]["email"].value;
        var productType = document.forms["lead-form-3"]["product-type"].value;
        var pincode = document.forms["lead-form-3"]["pincode"].value;
        var isValid = true;
        $("#lead-form-3 .error").removeClass('error');
        $("#lead-form-3 .error-txt").hide();
        var fnameInvalid = !/^[a-zA-Z ]*$/g.test(fname);
        var lnameInvalid = !/^[a-zA-Z ]*$/g.test(lname);
        if (fname == null || fname == "") {
            var $fnameEl = $("#lead-form-3 #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #fname-err").show();
            isValid = false;
        }
        if (fnameInvalid) {
            var $fnameEl = $("#lead-form-3 #fname");
            $fnameEl.addClass('error');
            $fnameEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #fname-num-err").show();
            isValid = false;
        }
        if (lname == null || lname == "") {
            var $lnameEl = $("#lead-form-3 #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');

            $("#lead-form-3 #lname-err").show();
            isValid = false;
        }
        if (lnameInvalid) {
            var $lnameEl = $("#lead-form-3 #lname");
            $lnameEl.addClass('error');
            $lnameEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #lname-num-err").show();
            isValid = false;
        }
        if (mobNum == null || mobNum == "" || mobNum.length < 10 || !(/^[0-9]*$/.test(mobNum))) {//update 29/07/2021
            var $mobNumEl = $("#lead-form-3 #mob-num");
            $mobNumEl.addClass('error');
            $mobNumEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #mob-err").show();
            isValid = false;
        }
        if (email == null || email == "" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
            var $emailEl = $("#lead-form-3 #email");
            $emailEl.addClass('error');
            $emailEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #email-err").show();
            isValid = false;
        }
        if (productType == null || productType == "") {
            var $prodTypeEl = $("#lead-form-3 #product-type");
            $prodTypeEl.addClass('error');
            $prodTypeEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #product-type-err").show();
            isValid = false;
        }
        if (pincode == null || pincode == "" || pincode.length < 6 || !(/^[0-9]*$/.test(pincode))) {//update 29/07/2021
            var $pincodeEl = $("#lead-form-3 #pincode");
            $pincodeEl.addClass('error');
            $pincodeEl.closest('.input-group').addClass('error');
            $("#lead-form-3 #pincode-err").show();
            isValid = false;
        }
        if (isValid) {
            console.log("form submitted", $("#lead-form-3").serializeArray());
            $("#success-txt").addClass("show");
            $("#lead-form-3")[0].reset();
            $("#lead-form-3 #product-type").multiselect('reload');
            setTimeout(() => {
                $("#success-txt").removeClass("show");
            }, 15000);
        }
    });
});

//update 29/07/2021
// jQuery.fn.ForceNumericOnly = function () {
//     return this.each(function () {
//         $(this).keydown(function (e) {
//             var key = e.charCode || e.keyCode || 0;
//             return (
//                 key == 8 ||
//                 key == 9 ||
//                 key == 13 ||
//                 key == 46 ||
//                 key == 110 ||
//                 // key == 190 ||
//                 (key >= 35 && key <= 40) ||
//                 (key >= 48 && key <= 57) ||
//                 (key >= 96 && key <= 105)
//             );
//         });
//     });
// };