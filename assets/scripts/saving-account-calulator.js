const range_cl = [];

function validateFormAndCalculateCl() {
	addCommas("loan-amt-input_cl");
	const loan_amt_input_cl = removeComma(
		document.getElementById("loan-amt-input_cl").value
	);

	//const loan_amt_input_cl = document.getElementById("loan-amt-input_cl").value;
	const loan_amt_cl = document.getElementById("loan-amt_cl");
	const tenure_months_input_cl = document.getElementById(
		"tenure-months-input_cl"
	).value;
	const tenure_months_cl = document.getElementById("tenure-months_cl");
	const interest_rate_input_cl = document.getElementById(
		"interest-rate-input_cl"
	).value;
	const interest_rate_cl =
		range_cl[document.getElementById("interest-rate_cl").value];

	const err_loan_amt_cl = validateRangeInput(
		loan_amt_input_cl,
		loan_amt_cl.max,
		loan_amt_cl.min,
		"error-loan-amt_cl"
	);
	const err_tenure_months_cl = validateRangeInput(
		tenure_months_input_cl,
		tenure_months_cl.max,
		tenure_months_cl.min,
		"error-tenure-months_cl"
	);
	const err_interest_rate_cl = validateRangeInput(
		interest_rate_input_cl,
		range_cl[range_cl.length - 1],
		range_cl[0],
		"error-interest-rate_cl"
	);
	if ((err_loan_amt_cl, err_tenure_months_cl, err_interest_rate_cl)) {
		const roi_per_month_cl = interest_rate_cl / (12 * 100);
		const roi_1 = 1 + roi_per_month_cl;
		const emi_amt_cl =
			loan_amt_cl.value *
			roi_per_month_cl *
			(Math.pow(roi_1, tenure_months_cl.value) /
				(Math.pow(roi_1, tenure_months_cl.value) - 1));
		const interest_payable =
			emi_amt_cl * tenure_months_cl.value - loan_amt_cl.value;

		document.getElementById("emi_amt_cl").innerHTML =
			"&#8377; " + numWithCommas(Math.round(emi_amt_cl));
		document.getElementById("interest_payable").innerHTML =
			"&#8377; " + numWithCommas(Math.round(interest_payable));
	}
}

$(document).ready(function () {
	for (i = 8.3; i < 9; i = i + 0.01) {
		const val = parseFloat(i.toFixed(2)).toString();
		range_cl.push(val);
	}
	document.getElementById("interest-rate_cl").max = range_cl.length - 1;
	document.getElementById("interest-rate_cl").value = range_cl.indexOf("8.7");
	setOnRangeChange(
		"loan-amt-input_cl",
		"loan-amt_cl",
		validateFormAndCalculateCl,
		null,
		"#FFFFFF"
	);
	setOnRangeChange(
		"tenure-months-input_cl",
		"tenure-months_cl",
		validateFormAndCalculateCl,
		null,
		"#FFFFFF"
	);
	setOnRangeChange(
		"interest-rate-input_cl",
		"interest-rate_cl",
		validateFormAndCalculateCl,
		range_cl,
		"#FFFFFF"
	);

	validateFormAndCalculateCl();
});

//16/4/2021

function calculate() {
	addCommas("amt_invest");
}
setOnRangeChange("amt_invest", "amt_invest_cover", calculate);

$(document).ready(function () {
	$(".dob-date-picker").flatpickr();
	calculate();
});
