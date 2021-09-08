const range_pl = [];

function validateFormAndCalculatePl() {
  addCommas("loan-amt-input_pl");
  const loan_amt_input_pl = removeComma(
    document.getElementById("loan-amt-input_pl").value
  );
  //const loan_amt_input_pl = document.getElementById("loan-amt-input_pl").value;
  const loan_amt_pl = document.getElementById("loan-amt_pl");
  const tenure_months_input_pl = document.getElementById(
    "tenure-months-input_pl"
  ).value;
  const tenure_months_pl = document.getElementById("tenure-months_pl");
  const interest_rate_input_pl = document.getElementById(
    "interest-rate-input_pl"
  ).value;
  const interest_rate_pl =
    range_pl[document.getElementById("interest-rate_pl").value];

  const err_loan_amt_pl = validateRangeInput(
    loan_amt_input_pl,
    loan_amt_pl.max,
    loan_amt_pl.min,
    "error-loan-amt_pl"
  );
  const err_tenure_months_pl = validateRangeInput(
    tenure_months_input_pl,
    tenure_months_pl.max,
    tenure_months_pl.min,
    "error-tenure-months_pl"
  );
  const err_interest_rate_pl_pl = validateRangeInput(
    interest_rate_input_pl,
    range_pl[range_pl.length - 1],
    range_pl[0],
    "error-interest-rate_pl"
  );
  if ((err_loan_amt_pl, err_tenure_months_pl, err_interest_rate_pl_pl)) {
    const roi_per_month_pl = interest_rate_pl / (12 * 100);
    const roi_1_pl = 1 + roi_per_month_pl;
    const emi_amt_pl =
      loan_amt_pl.value *
      roi_per_month_pl *
      (Math.pow(roi_1_pl, tenure_months_pl.value) /
        (Math.pow(roi_1_pl, tenure_months_pl.value) - 1));
    const interest_payable_pl =
      emi_amt_pl * tenure_months_pl.value - loan_amt_pl.value;

    document.getElementById("emi_amt_pl").innerHTML =
      "&#8377; " + numWithCommas(Math.round(emi_amt_pl));
    document.getElementById("interest_payable_pl").innerHTML =
      "&#8377; " + numWithCommas(Math.round(interest_payable_pl));
  }
}

$(document).ready(function () {
  for (i = 9; i < 19.51; i = i + 0.01) {
    const val = parseFloat(i.toFixed(2)).toString();
    range_pl.push(val);
  }
  document.getElementById("interest-rate_pl").max = range_pl.length - 1;
  document.getElementById("interest-rate_pl").value = range_pl.indexOf("9.4");
  setOnRangeChange(
    "loan-amt-input_pl",
    "loan-amt_pl",
    validateFormAndCalculatePl
  );
  setOnRangeChange(
    "tenure-months-input_pl",
    "tenure-months_pl",
    validateFormAndCalculatePl
  );
  setOnRangeChange(
    "interest-rate-input_pl",
    "interest-rate_pl",
    validateFormAndCalculatePl,
    range_pl
  );

  validateFormAndCalculatePl();
});
