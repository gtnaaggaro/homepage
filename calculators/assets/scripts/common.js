let rangedefaultColor = "#4B4B4B";

function numWithCommas(num) {
	return num.toLocaleString("en-IN");
}

function removeComma(number) {
	return number.replace(/,/g, "");
}

function populateSelectBox(selectBox, from, to, suffix, defaultValue) {
	for (var i = from; i <= to; i++) {
		$("#" + selectBox).append(
			$("<option>", {
				value: i,
				text: i + " " + suffix,
			})
		);
	}
	$("#" + selectBox).val(defaultValue);
	$("#" + selectBox).selectmenu("refresh");
}

function setOnRangeChange(input, range, callback, data, rangeColor) {
	var range = document.getElementById(range);
	var input = document.getElementById(input);
	rangedefaultColor = rangeColor ? rangeColor : rangedefaultColor;
	if (isOlderEdgeOrIE()) {
		range.style.height = "20px";
		setRangeEvent(range, input, "input", data, callback);
		setRangeInputEvent(range, input, "input", data, callback);
		setRangeEvent(range, input, "change", data, callback);
		setRangeInputEvent(range, input, "change", data, callback);
	} else {
		updateRangeEl(range);
		setRangeEvent(range, input, "input", data, callback, updateRangeEl);
		setRangeInputEvent(range, input, "input", data, callback, updateRangeEl);
	}
}

function setRangeEvent(range, input, type, data, callback, updateCallback) {
	range.addEventListener(type, function (e) {
		if (!data) {
			if (input.value) input.value = removeComma(e.target.value);
			else input.innerHTML = removeComma(e.target.value);
		} else {
			let val = removeComma(e.target.value);
			val = data[val] ? val : data.indexOf(val);
			if (input.value) input.value = data.length > 0 ? data[val] : val;
			else input.innerHTML = data.length > 0 ? data[val] : val;
		}
		if (callback) {
			callback();
		}
		if (updateCallback) {
			updateCallback(range);
		}
	});
}

function setRangeInputEvent(
	range,
	input,
	type,
	data,
	callback,
	updateCallback
) {
	input.addEventListener(type, function (e) {
		if (!data) {
			range.value = removeComma(e.target.value);
		} else {
			let val = removeComma(e.target.value);
			if (isFloatNumber(val)) {
				val = val.toString();
			} else {
				val = parseFloat(val).toString();
			}
			range.value = data.indexOf(val);
		}

		if (callback) {
			callback();
		}
		if (updateCallback) {
			updateCallback(range);
		}
	});
}

function updateRangeEl(rangeEl) {
	var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
	rangeEl.style.backgroundImage = getLinearGradientCSS(
		ratio,
		"#F37E20",
		rangedefaultColor
	);
}

function isOlderEdgeOrIE() {
	return (
		window.navigator.userAgent.indexOf("MSIE ") > -1 ||
		!!navigator.userAgent.match(/Trident.*rv\:11\./) ||
		window.navigator.userAgent.indexOf("Edge") > -1
	);
}

function isFloatNumber(val) {
	return Number(val).toString() == val && val % 1 !== 0;
}

function valueTotalRatio(value, min, max) {
	const diff = max / 2 < value ? 0 : 0.01;
	return (value - min) / (max - min) + diff;
}

function getLinearGradientCSS(ratio, leftColor, rightColor) {
	return [
		"-webkit-gradient(",
		"linear, ",
		"left top, ",
		"right top, ",
		"color-stop(" + ratio + ", " + leftColor + "), ",
		"color-stop(" + ratio + ", " + rightColor + ")",
		")",
	].join("");
}

function validateNumberOnly(val, element) {
	let validated = true;
	if (val == "") {
		validated = false;
		document.querySelector("." + element).innerHTML = "Please enter Amount";
	} else if (isNaN(Number(val))) {
		document.querySelector("." + element).innerHTML =
			"Amount must be in numbers only.";
	} else {
		document.querySelector("." + element).innerHTML = "";
	}
	return validated;
}

function validateNumberAndDecimals(evt) {
	var theEvent = evt || window.event;

	// Handle paste
	if (theEvent.type === "paste") {
		key = event.clipboardData.getData("text/plain");
	} else {
		// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}

function validateRangeInput(value, max, min, error_element) {
	value = parseFloat(value);
	max = parseFloat(max);
	min = parseFloat(min);
	let validated = true;
	const err_element = document.querySelector("." + error_element);
	if (value > max || isNaN(value)) {
		validated = false;
		err_element.innerHTML = "Please enter correct amount.";
	} else if (value < min || isNaN(value)) {
		validated = false;
		err_element.innerHTML = "Please enter correct amount.";
	} else {
		err_element.innerHTML = "";
	}
	return validated;
}

function toggleView(element1, element2, show) {
	const container1 = document.getElementsByClassName(element1);
	const container2 = element2
		? document.getElementsByClassName(element2)
		: null;

	if (show) {
		container1[0].style.display = "flex";
		if (container2 != null) {
			container2[0].style.display = "none";
		}
	} else {
		container1[0].style.display = "none";
		if (container2 != null) {
			container2[0].style.display = "flex";
		}
	}
}

/* Excel formulas  */
function presentValue(rate, period, future_value) {
	const pv = future_value / Math.pow(1 + rate, period);
	return pv;
}

function futureValue(rate, period, presentValue) {
	const fv = presentValue * Math.pow(1 + rate, period);
	return fv;
}

function FV(rate, nper, pmt, pv, type) {
	var pow = Math.pow(1 + rate, nper),
		fv;
	if (rate) {
		fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
	} else {
		fv = -1 * (pv + pmt * nper);
	}
	return fv.toFixed(2);
}

function paymentAmount(rate, period, fv, type) {
	let b = 0;
	if (type == 1) {
		b = rate;
	}
	let pmt = -(fv / (Math.pow(1 + rate, period) - 1)) * (-rate / (1 + b));
	return pmt;
}

function PMT(ir, np, pv, fv, type) {
	/*
	 * ir   - interest rate per month
	 * np   - number of periods (months)
	 * pv   - present value
	 * fv   - future value
	 * type - when the payments are due:
	 *        0: end of the period, e.g. end of month (default)
	 *        1: beginning of period
	 */
	var pmt, pvif;

	fv || (fv = 0);
	type || (type = 0);

	if (ir === 0) return -(pv + fv) / np;

	pvif = Math.pow(1 + ir, np);
	pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

	if (type === 1) pmt /= 1 + ir;

	return pmt;
}

function IRRCalc(CArray) {
	min = 0.0;
	max = 1.0;
	do {
		guest = (min + max) / 2;
		NPV = 0;
		for (var j = 0; j < CArray.length; j++) {
			NPV += CArray[j] / Math.pow(1 + guest, j);
		}
		if (NPV > 0) {
			min = guest;
		} else {
			max = guest;
		}
	} while (Math.abs(NPV) > 0.000001);
	return guest * 100;
}

function addCommas(element) {
	var loanAmount = document.getElementById(element).value;
	loanAmount = removeComma(loanAmount);
	document.getElementById(element).value = numWithCommas(Number(loanAmount));
}

function YEARFRAC(start_date, end_date, basis) {
	// Initialize parameters
	var basis = typeof basis === "undefined" ? 0 : basis;
	var sdate = moment(new Date(start_date));
	var edate = moment(new Date(end_date));

	// Return error if either date is invalid
	if (!sdate.isValid() || !edate.isValid()) return "#VALUE!";

	// Return error if basis is neither 0, 1, 2, 3, or 4
	if ([0, 1, 2, 3, 4].indexOf(basis) === -1) return "#NUM!";

	// Return zero if start_date and end_date are the same
	if (sdate === edate) return 0;

	// Swap dates if start_date is later than end_date
	if (sdate.diff(edate) > 0) {
		var edate = moment(new Date(start_date));
		var sdate = moment(new Date(end_date));
	}

	// Lookup years, months, and days
	var syear = sdate.year();
	var smonth = sdate.month();
	var sday = sdate.date();
	var eyear = edate.year();
	var emonth = edate.month();
	var eday = edate.date();

	switch (basis) {
		case 0:
			// US (NASD) 30/360
			// Note: if eday == 31, it stays 31 if sday < 30
			if (sday === 31 && eday === 31) {
				sday = 30;
				eday = 30;
			} else if (sday === 31) {
				sday = 30;
			} else if (sday === 30 && eday === 31) {
				eday = 30;
			} else if (
				smonth === 1 &&
				emonth === 1 &&
				sdate.daysInMonth() === sday &&
				edate.daysInMonth() === eday
			) {
				sday = 30;
				eday = 30;
			} else if (smonth === 1 && sdate.daysInMonth() === sday) {
				sday = 30;
			}
			return (
				(eday +
					emonth * 30 +
					eyear * 360 -
					(sday + smonth * 30 + syear * 360)) /
				360
			);
			break;

		case 1:
			// Actual/actual
			var feb29Between = function (date1, date2) {
				// Requires year2 == (year1 + 1) or year2 == year1
				// Returns TRUE if February 29 is between the two dates (date1 may be February 29), with two possibilities:
				// year1 is a leap year and date1 <= Februay 29 of year1
				// year2 is a leap year and date2 > Februay 29 of year2

				var mar1year1 = moment(new Date(date1.year(), 2, 1));
				if (
					moment([date1.year()]).isLeapYear() &&
					date1.diff(mar1year1) < 0 &&
					date2.diff(mar1year1) >= 0
				) {
					return true;
				}
				var mar1year2 = moment(new Date(date2.year(), 2, 1));
				if (
					moment([date2.year()]).isLeapYear() &&
					date2.diff(mar1year2) >= 0 &&
					date1.diff(mar1year2) < 0
				) {
					return true;
				}
				return false;
			};
			var ylength = 365;
			if (
				syear === eyear ||
				(syear + 1 === eyear &&
					(smonth > emonth || (smonth === emonth && sday >= eday)))
			) {
				if (syear === eyear && moment([syear]).isLeapYear()) {
					ylength = 366;
				} else if (
					feb29Between(sdate, edate) ||
					(emonth === 1 && eday === 29)
				) {
					ylength = 366;
				}
				return edate.diff(sdate, "days") / ylength;
			} else {
				var years = eyear - syear + 1;
				var days = moment(new Date(eyear + 1, 0, 1)).diff(
					moment(new Date(syear, 0, 1)),
					"days"
				);
				var average = days / years;
				return edate.diff(sdate, "days") / average;
			}
			break;

		case 2:
			// Actual/360
			return edate.diff(sdate, "days") / 360;
			break;

		case 3:
			// Actual/365
			return edate.diff(sdate, "days") / 365;
			break;

		case 4:
			// European 30/360
			if (sday === 31) sday = 30;
			if (eday === 31) eday = 30;
			// Remarkably, do NOT change February 28 or February 29 at ALL
			return (
				(eday +
					emonth * 30 +
					eyear * 360 -
					(sday + smonth * 30 + syear * 360)) /
				360
			);
			break;
	}
}
