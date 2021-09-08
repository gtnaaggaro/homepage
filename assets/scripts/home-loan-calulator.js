(function() {
    // Your code here
    // Expose to global
    // window['varName'] = varName;
	var roi = 8.5;
	var defaultMaxTenureYr = 20;
	var salariedTopAge = 58;
	var selfEmpTopAge = 65;
	var salariedFoirMult = 60;
	var selfEmpFoirMult = 85;
	var currAge, lookingFor, requiredHL;
	var currProfile, monthlyIC, monthlyEmi;
	$(document).ready(function () {
		function globalizeAmt(x){
			x=x.toString();
			var lastThree = x.substring(x.length-3);
			var otherNumbers = x.substring(0,x.length-3);
			if(otherNumbers != '')
				lastThree = ',' + lastThree;
			var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
			return res;
		}
		$(".loan-finder #btn-proceed").click(function(){
			currAge = $(".loan-finder #currentage").val();
			lookingFor = $(".loan-finder #lookingfor").val();
			requiredHL = removeComma($(".loan-finder #loan-amount").val());
			if(!(currAge && +currAge > 20) ){
				$(".loan-finder .error").html('');
				$(".loan-finder .error-cage").html("Age is not valid");
				return;
			}else if(requiredHL && isNaN(requiredHL)){
				$(".loan-finder .error").html('');
				$(".loan-finder .error-loan-amt").html("Loan amount is not valid");
				return;
			}else if(requiredHL && ((+requiredHL < 500000) || (+requiredHL > 50000000)) && (+requiredHL != 0)){
				$(".loan-finder .error").html('');
				$(".loan-finder .error-loan-amt").html("Loan amount should not be lesser than 5 lacs or greater than 5 crores");
				return;
			}else{
				$(".loan-finder .section-one").addClass('hide');
				$(".loan-finder .error").html('');
				$(".loan-finder .section-two").removeClass('hide');
				$(".loan-finder-result.result-div").addClass('hide');
			}
		});
		$(".loan-finder #btn-submit").click(function(){
			currProfile = $(".loan-finder #currentprofile").val();
			monthlyIC = $(".loan-finder #grossmonthlyincome").val();
			monthlyEmi = removeComma($(".loan-finder #curr-emi-amount").val());
			if(!(monthlyIC && +monthlyIC >= 20000) ){
				$(".loan-finder .error").html('');
				$(".loan-finder .error-monthlyincome").html("Minimum Gross Salary to be 20,000");
				return;
			}else if(!monthlyEmi || (monthlyEmi && isNaN(monthlyEmi))){
				$(".loan-finder .error").html('');
				$(".loan-finder .error-monthly-emi").html("Monthly EMI amount is not valid");
				return;
			}else{

				// Max permissable tenure (in years)------------------(1)
				var maxTenureYr;
				if(currProfile === 'salaried'){
					maxTenureYr = Math.min((salariedTopAge-currAge), 20);
				}else if(currProfile === 'self-emp'){
					maxTenureYr = Math.min((selfEmpTopAge-currAge), 20);
				}

				//EMI Per Lakh 
				var emiPerLac = PMT(roi/1200, maxTenureYr*12, -100000);

				//FOIR multiplier
				var foirMult;
				if(currProfile === 'salaried'){
					foirMult = salariedFoirMult/100;
				}else if(currProfile === 'self-emp'){
					foirMult = selfEmpFoirMult/100;
				}

				//Eligible EMI-------------------------------(2)
				var eligibleEmi = (foirMult * monthlyIC) - monthlyEmi;

				//Eligible Loan--------------------------------(3)
				var eligibleLoanAmt = (eligibleEmi/emiPerLac) * 100000;

				$(".loan-finder-result #loanPayableRes").html(`₹ ${globalizeAmt(Math.round(eligibleLoanAmt))}`);
				$(".loan-finder-result #monthlyEmiRes").html(`₹ ${globalizeAmt(Math.round(eligibleEmi))}`);
				$(".loan-finder-result #tenureRes").html(`${maxTenureYr} Years`);

				$(".loan-finder .error").html('');
				$(".loan-finder .section-one").addClass('hide');
				$(".loan-finder .section-two").addClass('hide');
				$(".loan-finder-result.result-div").removeClass('hide');
			}
		});
		$(".loan-finder #btn-back").click(function(){
			$(".loan-finder .section-one").removeClass('hide');
			$(".loan-finder .section-two").addClass('hide');
			$(".loan-finder-result.result-div").addClass('hide');
		});
		$(".loan-finder-result #btn-recal").click(function(){
			const selectMenuEl = $(`.loan-finder #currentage, .loan-finder #lookingfor, 
			.loan-finder #currentprofile, .loan-finder #grossmonthlyincome`);
			selectMenuEl.val('');
			$(".loan-finder #lookingfor").val('home');
			$(".loan-finder #currentprofile").val('salaried');
			selectMenuEl.selectmenu("refresh");
			$(".loan-finder #curr-emi-amount, .loan-finder #loan-amount").val('0');

			$(".loan-finder .section-one").removeClass('hide');
			$(".loan-finder .section-two").addClass('hide');
			$(".loan-finder-result.result-div").addClass('hide');
		});
		$("#loan-amount, #curr-emi-amount").on("input", function(e){
			addCommas(e.target.id);
		});
	});

})();