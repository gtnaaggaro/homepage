const rangeHome = [];

function validateFormAndCalculateHome() {
    addCommas("loan-amt-home-input");
    const loan_amt_input = removeComma(document.getElementById("loan-amt-home-input").value),
        loan_amt = document.getElementById("loan-amt-home"),
        tenure_years_input = document.getElementById("tenure-years-home-input").value,
        tenure_years = document.getElementById("tenure-years-home"),
        interest_rate_input = document.getElementById("interest-rate-home-input").value,
        interest_rate = rangeHome[document.getElementById("interest-rate-home").value],
        err_loan_amt = validateRangeInput(loan_amt_input, loan_amt.max, loan_amt.min, "error-loan-amt-home"),
        err_tenure_years = validateRangeInput(tenure_years_input, tenure_years.max, tenure_years.min, "error-tenure-years-home"),
        err_interest_rate = validateRangeInput(interest_rate_input, rangeHome[rangeHome.length - 1], rangeHome[0], "error-interest-rate-home");

    if (!err_loan_amt) {
        document.querySelector(".error-loan-amt-home").innerHTML = "Please enter a valid number between 100,000 and 100,000,000.";
    }

    err_tenure_years || (document.querySelector(".error-tenure-years-home").innerHTML = "Please enter a valid number between 12 and 360."), err_interest_rate || (document.querySelector(".error-interest-rate-home").innerHTML = "Please enter valid number between 7.00% and 15.00%");
    const tenure_months = parseInt(tenure_years.value);
    if (err_interest_rate) {
        const roi_per_month = interest_rate / 1200,
            roi_1 = 1 + roi_per_month,
            emi_amt = loan_amt.value * roi_per_month * (Math.pow(roi_1, tenure_months) / (Math.pow(roi_1, tenure_months) - 1));

        let totalAmountPayable = emi_amt * tenure_months;
        let interest_payable = totalAmountPayable - loan_amt.value;
        document.getElementById("emi_amt_home").innerHTML = "&#8377; " + numWithCommas(Math.round(emi_amt));
        document.getElementById("interest_payable_home").innerHTML = "&#8377; " + numWithCommas(Math.round(interest_payable));
        document.getElementById("loan_amt_home").innerHTML = "&#8377; " + numWithCommas(Math.round(loan_amt.value));
        document.getElementById("total_amt_home").innerHTML = "&#8377; " + numWithCommas(Math.round(totalAmountPayable));
    }
}
$(document).ready((function () {
    for (i = 6; i < 15; i += .01) {
        const val = parseFloat(i.toFixed(2)).toString();
        rangeHome.push(val)
    }
    document.getElementById("interest-rate-home").max = rangeHome.length - 1, document.getElementById("interest-rate-home").value = rangeHome.indexOf("9.4"), setOnRangeChange("loan-amt-home-input", "loan-amt-home", validateFormAndCalculateHome), setOnRangeChange("tenure-years-home-input", "tenure-years-home", validateFormAndCalculateHome), setOnRangeChange("interest-rate-home-input", "interest-rate-home", validateFormAndCalculateHome, rangeHome), validateFormAndCalculateHome()
}));
