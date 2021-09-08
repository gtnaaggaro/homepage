var dataNPS = {},
  post_exp = {};
let validatedNPS = !0;

function validateFormAndCalculateNPS() {
  addCommas('retirementsaving');
  const retirementsaving = removeComma(document.getElementById('retirementsaving').value),
    retirementsavingAmt = document.getElementById('retirementsaving-amt'),
    monthlyincome = document.getElementById('monthlyincome').value;
  addCommas('monthlycontri');
  const monthlycontri = removeComma(document.getElementById('monthlycontri').value),
    monthlycontriAmt = document.getElementById('monthlycontri-amt');
  addCommas('monthlyexp');
  const monthlyexp = removeComma(document.getElementById('monthlyexp').value),
    monthlyexpAmt = document.getElementById('monthlyexp-amt');
  addCommas('exppostretirement');
  const exppostretirement = removeComma(document.getElementById('exppostretirement').value),
    exppostretirementAmt = document.getElementById('exppostretirement-amt'),
    annualbasic = document.getElementById('annualbasic').value;
  let incomeV = validateNumberOnly(monthlyincome, 'error-monthlyincome'),
    basicV = validateNumberOnly(annualbasic, 'error-annualbasic'),
    savingV = validateRangeInput(retirementsaving, retirementsavingAmt.max, retirementsavingAmt.min, 'error-retirementsaving'),
    contriV = validateRangeInput(monthlycontri, monthlycontriAmt.max, monthlycontriAmt.min, 'error-monthlycontri'),
    expV =
      validateRangeInput(monthlyexp, monthlyexpAmt.max, monthlyexpAmt.min, 'error-monthlyexp') &&
      validateRangeInput(monthlyexp, monthlyincome, monthlyexpAmt.min, 'error-monthlyexp'),
    postRetrV = validateRangeInput(exppostretirement, exppostretirementAmt.max, exppostretirementAmt.min, 'error-exppostretirement');
  (validatedNPS = incomeV && basicV && savingV && contriV && expV && postRetrV),
    validatedNPS && calculateShortFall(monthlyexp, exppostretirement, monthlycontri);

  if (validatedNPS) {
    const retirementsaving = removeComma(document.getElementById('retirementsaving').value),
      monthlyincome = document.getElementById('monthlyincome').value,
      annualbasic = document.getElementById('annualbasic').value;
    calculateRetirementPlan(retirementsaving, monthlyincome, annualbasic);
  }
}

function calculateShortFall(monthlyexp, exppostretirement, monthlycontri) {
  const currentage = document.getElementById('currentage').value,
    retirementage = document.getElementById('retirementage').value,
    postretirement_monexp = document.getElementById('postretirement_monexp'),
    postretirement_exp = parseInt(monthlyexp) - parseInt(exppostretirement);
  postretirement_monexp.innerHTML = '&#8377; ' + postretirement_exp;
  calculatePostRetirementExp(currentage, retirementage, postretirement_exp, monthlycontri);
}

function calculatePostRetirementExp(currentage, retirementage, postretirement_exp, monthlycontri) {
  const retirementsaving = removeComma(document.getElementById('retirementsaving').value);
  const postretirement_expectedmonexp = document.getElementById('postretirement_expectedmonexp'),
    life_extencey = dataNPS.life_extencey,
    growth_rate = dataNPS.funds_growth_rate / 100,
    inflation = dataNPS.inflation / 100;
  post_exp = {
    age: [parseInt(currentage)],
    expenses: [12 * parseInt(postretirement_exp)],
    presentval: [],
    futureVal: [retirementsaving > 0 ? futureValue(growth_rate, retirementage - currentage, 12 * parseInt(monthlycontri)) : 0],
  };
  for (let i = 1; i <= life_extencey - parseInt(currentage); i++) {
    const age = Math.round(post_exp.age[i - 1] + 1),
      expense = post_exp.expenses[i - 1] + post_exp.expenses[i - 1] * inflation;
    post_exp.age.push(age),
      post_exp.expenses.push(expense),
      age < parseInt(retirementage) || age > life_extencey || post_exp.presentval.push(presentValue(growth_rate, age - retirementage, expense)),
      age >= retirementage ||
        age > life_extencey ||
        // code change 03/09/2020
        post_exp.futureVal.push(retirementsaving > 0 ? futureValue(growth_rate, retirementage - age, 12 * parseInt(monthlycontri)) : 0);
    // code change end
  }
  const postretirement_expense = Math.round(post_exp.expenses[retirementage - currentage] / 12);
  postretirement_expectedmonexp.innerHTML = isNaN(postretirement_expense) ? '' : '&#8377; ' + postretirement_expense;
}

function calculateRetirementPlan(retirementsaving, monthlyincome, annualbasic) {
  const growth_rate = dataNPS.funds_growth_rate / 100,
    currentage = document.getElementById('currentage').value,
    retirementage = document.getElementById('retirementage').value,
    expected_saving = document.getElementsByClassName('expected_saving'),
    saving_grow = document.getElementsByClassName('saving_grow'),
    saving_shortof = document.getElementsByClassName('saving_shortof'),
    additional_saving = document.getElementsByClassName('additional_saving'),
    additional_saving_period = document.getElementsByClassName('additional_saving_period'),
    individualcontri = document.getElementsByClassName('individualcontri'),
    corpcontri = document.getElementsByClassName('corpcontri'),
    npsinvestment = document.getElementsByClassName('npsinvestment'),
    taxsaved = document.getElementsByClassName('taxsaved'),
    expected_saving_amt = post_exp.presentval.reduce(function (a, b) {
      return a + b;
    }),
    futureval_yearlycontri = post_exp.futureVal.reduce(function (a, b) {
      return a + b;
    }),
    futureval_current_saving = futureValue(growth_rate, retirementage - currentage, retirementsaving),
    shortfall = Math.round(-(futureval_current_saving + futureval_yearlycontri - expected_saving_amt)),
    perYearContriAmt = Math.round(paymentAmount(growth_rate, retirementage - currentage, shortfall, 1)),
    contriAmt = perYearContriAmt / 12,
    additionMonthlyContri = (contriAmt <= 0 ? 0 : contriAmt) > monthlyincome ? 'Expenses exceeding monthly income' : contriAmt <= 0 ? 0 : contriAmt,
    individualcontriAmt = Math.min(50000, 12 * parseInt(additionMonthlyContri)),
    amountAfterNPST1 = 12 * additionMonthlyContri - individualcontriAmt,
    corpcontriAmt = amountAfterNPST1 > 0 ? Math.min(amountAfterNPST1, annualbasic * 0.1) : 0,
    npsInvestment = 12 * additionMonthlyContri - individualcontriAmt - corpcontriAmt;
  (expected_saving[0].innerHTML = '&#8377; ' + numWithCommas(Math.round(expected_saving_amt))),
    (saving_grow[0].innerHTML = '&#8377; ' + numWithCommas(Math.round(futureval_yearlycontri + futureval_current_saving))),
    (saving_shortof[0].innerHTML = shortfall <= 0 ? 'No Shortfall' : '&#8377; ' + numWithCommas(shortfall)),
    (additional_saving[0].innerHTML =
      '&#8377; ' + (isNaN(Math.round(additionMonthlyContri)) ? 'NA' : numWithCommas(Math.round(additionMonthlyContri))) + ' / Mo'),
    (additional_saving_period[0].innerHTML = retirementage - currentage + ' Yrs'),
    (individualcontri[0].innerHTML = '&#8377; ' + numWithCommas(individualcontriAmt)),
    (corpcontri[0].innerHTML = '&#8377; ' + numWithCommas(corpcontriAmt)),
    (npsinvestment[0].innerHTML = '&#8377; ' + numWithCommas(npsInvestment)),
    (taxsaved[0].innerHTML = '&#8377; ' + numWithCommas(totalTaxSavingCalculator(individualcontriAmt, monthlyincome, corpcontriAmt, npsInvestment)));
}

function totalTaxSavingCalculator(individualcontriAmt, monthlyincome, corpcontriAmt, npsInvestment) {
  const lowerlimit = dataNPS.tax_brackets.lowerlimit,
    upperlimit = dataNPS.tax_brackets.upperlimit,
    tax = dataNPS.tax_brackets.tax,
    additional = dataNPS.tax_brackets.additional,
    tax_deduction = dataNPS.tax_deduction,
    surcharge = dataNPS.surcharge,
    healtheducation_cess = dataNPS.healtheducation_cess / 100,
    annualincome = 12 * monthlyincome,
    taxEligibal = individualcontriAmt,
    taxEligibalInvestment = Math.min(tax_deduction, corpcontriAmt + npsInvestment),
    taxBracket =
      annualincome <= upperlimit[0]
        ? 0
        : annualincome >= lowerlimit[1] && annualincome <= upperlimit[1]
        ? 1
        : annualincome >= lowerlimit[2] && annualincome <= upperlimit[2]
        ? 2
        : 3,
    totalAmtDeduction = taxEligibal + taxEligibalInvestment,
    amtExceeding = annualincome - upperlimit[taxBracket - 1],
    greaterThanZero = totalAmtDeduction - amtExceeding > 0 ? amtExceeding : totalAmtDeduction,
    remainingAmt = totalAmtDeduction - amtExceeding > 0 ? totalAmtDeduction - amtExceeding : 0,
    taxPercent = tax[taxBracket] / 100,
    taxPercentGreater = tax[remainingAmt > 0 ? taxBracket - 1 : 0] / 100,
    taxSaved = greaterThanZero * taxPercent + remainingAmt * taxPercentGreater,
    surchargeAmount =
      annualincome > surcharge[0].amount && annualincome <= surcharge[1].amount
        ? surcharge[0].percent / 100
        : annualincome > surcharge[1].amount && annualincome <= surcharge[2].amount
        ? surcharge[1].percent / 100
        : annualincome > surcharge[2].amount && annualincome <= surcharge[3].amount
        ? surcharge[2].percent / 100
        : annualincome > surcharge[3].amount
        ? surcharge[2].percent / 100
        : 0,
    cess = (taxSaved + surchargeAmount) * healtheducation_cess,
    totalTaxSaved = Math.round(taxSaved + surchargeAmount + cess);
  return totalTaxSaved;
}
$(document).ready(function () {
  var submit, recalculate;
  $('select').selectmenu(),
    (dataNPS = {
      life_extencey: 80,
      funds_growth_rate: 8,
      inflation: 4,
      tax_brackets: {
        lowerlimit: [0, 250001, 500001, 1000001],
        upperlimit: [25e4, 5e5, 1e6],
        tax: [0, 5, 20, 30],
        additional: [0, 0, 12500, 112500],
      },
      tax_deduction: 15e4,
      surcharge: [
        {
          amount: 5e6,
          percent: 10,
        },
        {
          amount: 1e7,
          percent: 15,
        },
        {
          amount: 2e7,
          percent: 20,
        },
        {
          amount: 5e7,
          percent: 37,
        },
      ],
      healtheducation_cess: 4,
    }),
    populateSelectBox('currentage', 18, 65, 'Yrs', 40),
    populateSelectBox('retirementage', 18, 80, 'Yrs', 60),
    $('#currentage').selectmenu({
      change: function (event, ui) {
        validateFormAndCalculateNPS();
      },
    }),
    $('#retirementage').selectmenu({
      change: function (event, ui) {
        validateFormAndCalculateNPS();
      },
    }),
    setOnRangeChange('retirementsaving', 'retirementsaving-amt', validateFormAndCalculateNPS),
    setOnRangeChange('monthlycontri', 'monthlycontri-amt', validateFormAndCalculateNPS),
    setOnRangeChange('monthlyexp', 'monthlyexp-amt', validateFormAndCalculateNPS),
    setOnRangeChange('exppostretirement', 'exppostretirement-amt', validateFormAndCalculateNPS),
    setTimeout(function () {
      validateFormAndCalculateNPS();
    }, 1e3);
});
