//retirement planner calc function
!(function () {
    const $calcSlickEl = $(".calculator-container .calculator-slider");
    const curListElArr = $calcSlickEl.find(".calculator-list");

    const $navEl = $("#calc-form-next, #calc-form-back, #calc-result-back");

    //Selectors for Dynamic Nudge, Nudge Icon, Question, Option
    const $retNudgeImg = $("#ret-nudge-img");
    const $retNudgeText = $("#ret-nudge");

    // const $retAgeQ = $("#rp-age-ques");
    // const $retAnnualQ = $("#rp-annual-ques");
    // const $retExpenseQ = $("#rp-expense-ques");
    // const $retAnnualSaveQ = $("#rp-annual-save-ques");
    // const $retMonthQ = $("#rp-month-ques");
    // const $retTypeQ = $("#retire-type-ques");
    // const $retInvProfQ = $("#invest-profile-ques");


    function validateFormAndCalculatePl() {
        addCommas("rp-annual-input");
        addCommas("rp-annual-save-input");
        addCommas("rp-month-input");
        addCommas("rp-expense-input");
    }

    function globalizeAmt(x) {
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }

    function initScoreChart() {
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [65, 15, 15, 5],
                    backgroundColor: [
                        '#FF4A42',
                        '#FFB74A',
                        '#BAD22F',
                        '#58951D'
                    ],
                    borderWidth: 0
                }],
                // labels: [
                //     'Red',
                //     'Yellow',
                //     'Blue'
                // ]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                responsive: true,
                maintainAspectRatio: true,
                legend: false,
                cutoutPercentage: 70,
                borderWidth: 0,
                tooltips: {
                    enabled: false
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    $(document).ready(function () {
        $calcSlickEl
            .not(".slick-initialized")
            .slick({
                dots: true,
                arrows: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 2000,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                accessibility: false,
                draggable: false,
                adaptiveHeight: true
            });

        setOnRangeChange("rp-age-input", "rp-age");
        setOnRangeChange("rp-annual-input", "rp-annual", validateFormAndCalculatePl);
        setOnRangeChange("rp-annual-save-input", "rp-annual-save", validateFormAndCalculatePl);
        setOnRangeChange("rp-month-input", "rp-month", validateFormAndCalculatePl);
        setOnRangeChange("rp-expense-input", "rp-expense", validateFormAndCalculatePl);

        initScoreChart(); //initiating score doughnut

        $("input[name=retire-type], input[name=invest-profile]").change((e) => {
            $(e.target).closest(".radio-list-group").find(".radio-list.active").removeClass("active");
            $(e.target).closest(".radio-list").addClass("active");
        });


        //form navigation and validation: begin
        let curSlickIndex = 0;
        let $curListEl = $(curListElArr[0]);

        let curAgeVal, rpMobileVal, rpEmailVal, rpAnnualVal, rpExpenseVal, rpRetSavedVal, rpMonthlySaveVal, rpRetireType, rpInvestType;
        const ageArr = [45, 55, 60, 100];
        const dynamicInfoArr = [
            [{ nudgeIcon: 'nudge-icon.png', nudgeText: 'Have you planned your retirement right? Let’s find out your readiness in just a few minutes! ', question: 'What is your current Age?', optionsArray: [] },
            { nudgeIcon: 'nudge-icon.png', nudgeText: 'Your income is rising, so are your expenses! Have you saved enough for your future?', question: 'What is your current or most recent annual income?', optionsArray: [] },
            { nudgeIcon: 'nudge-icon.png', nudgeText: 'Your income is rising, so are your expenses! Have you saved enough for your future?', question: 'What is your monthly expense?', optionsArray: [] },
            { nudgeIcon: 'nudge-icon.png', nudgeText: 'Many start retirement planning early on. It’s the smart thing to do.', question: 'How much have you saved for retirement so far?', optionsArray: [] },
            { nudgeIcon: 'nudge-icon.png', nudgeText: 'Start retirement planning early so you can enjoy the power of compounding returns on your investments.', question: 'How much do you save each month for retirement? ', optionsArray: [] },
            { nudgeIcon: 'nudge-icon.png', nudgeText: 'The lifestyle you enjoy now can be yours in your golden years too. Only if you plan for it!', question: 'How will your standard of living change when you retire? ', optionsArray: ["I'll Spend Less", "I'll Spend More", "I'll Spend The Same"] },
            { nudgeIcon: 'nudge-icon.png', nudgeText: 'For achieving your retirement goals, plan investments as per your risk appetite.', question: 'How would you describe your investment profile?', optionsArray: ["Risk Averse", "Conservative", "Balanced", "Growth", "Aggressive"] }],

            [{ nudgeIcon: '', nudgeText: '', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'The regular income you enjoy now will eventually stop, but your dreams won’t. Start planning for retirement today!', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'The regular income you enjoy now will eventually stop, but your dreams won’t. Start planning for retirement today!', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'You may have many goals and responsibilities, but don’t let retirement planning take a backseat.', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'It’s never too late to start planning for retirement. If you want to enjoy a good life in the golden years, gear yourself for it!', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'One of the most common mistakes people make is not considering inflation during retirement planning. It’s an important factor.', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'To stay financially healthy during your retirement years, investing as per your risk appetite is important. ', question: '', optionsArray: [] }],

            [{ nudgeIcon: '', nudgeText: '', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'To ensure regular income post your retirement, start planning today.', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'To ensure regular income post your retirement, start planning today.', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'You need to assess your current investments and the lifestyle you want when you retire.', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'It’s important to allocate maximum of your savings towards retirement goals', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'With financial independence you can lead the life you desire in golden years', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'Based on your investment profile and approach to wealth creation, you can customize a solution that’s best for your retirement years.', question: '', optionsArray: [] }],

            [{ nudgeIcon: '', nudgeText: '', question: '', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'The income you enjoyed in working years may have stopped, but you can re-live life on own terms with the right investments.', question: 'What is your current annual income from various sources?', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'The income you enjoyed in working years may have stopped, but you can re-live life on own terms with the right investments.', question: 'What is your monthly expense?', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'Your retirement corpus will define how comfortably you live in your golden years. You can still put a plan in place for it.', question: 'How much have you saved for retirement?', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'It’s never too late to start structuring your finances for the years ahead. A retirement specialist can help you plan better.', question: 'How much do you save each month for the years ahead, now that you are retired?', optionsArray: [] },
            { nudgeIcon: '', nudgeText: 'Financial planning during retirement can ensure that you maintain the lifestyle you’ve always enjoyed.', question: 'How has your standard of living changed since you retired?', optionsArray: ["I Spend Less", "I Spend More", "I Spend The Same"] },
            { nudgeIcon: '', nudgeText: 'Based on your investing profile and the kind of returns you seek; you can customize the right portfolio for your golden years.', question: '', optionsArray: [] }]
        ];
        let ageArrIndex = 0;

        function fetchValues() {
            curSlickIndex = $calcSlickEl.slick("slickCurrentSlide");
            $curListEl = $(curListElArr[curSlickIndex]);

            curAgeVal = +($("#rp-age").val());
            rpMobileVal = $("#rp-mobile").val();
            rpEmailVal = $("#rp-email").val();

            rpAnnualVal = +($("#rp-annual").val());
            rpExpenseVal = +($("#rp-expense").val());
            rpRetSavedVal = +($("#rp-annual-save").val());
            rpMonthlySaveVal = +($("#rp-month").val());

            rpRetireType = $("input[name=retire-type]:checked").val();
            rpInvestType = $("input[name=invest-profile]:checked").val();
        }

        function validateCalcEl() {
            var isValid = true;
            $calcSlickEl.find(".error").addClass('hide');
            switch (curSlickIndex) {
                case 0:
                    if (rpMobileVal == null || rpMobileVal == "" || rpMobileVal.length < 10 || !(/^[0-9]*$/.test(rpMobileVal))) {
                        $curListEl.find(".error-rp-mobile").removeClass("hide");
                        isValid = false;
                    }
                    if (isNaN(curAgeVal) || (curAgeVal < 18) || (curAgeVal > 80)) {
                        $curListEl.find(".error-rp-age").removeClass("hide");
                        isValid = false;
                    }
                    if (rpEmailVal == null || rpEmailVal == "" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(rpEmailVal))) {
                        $curListEl.find(".error-rp-email").removeClass("hide");
                        isValid = false;
                    }
                    break;

                case 1:
                    if (isNaN(rpAnnualVal) || (rpAnnualVal < 5000) || (rpAnnualVal > 5000000)) {
                        $curListEl.find(".error-rp-annual").removeClass("hide");
                        isValid = false;
                    }
                    break;

                case 2:
                    if (isNaN(rpExpenseVal) || (rpExpenseVal < 5000) || (rpExpenseVal > 5000000)) {
                        $curListEl.find(".error-rp-expense").removeClass("hide");
                        isValid = false;
                    }
                    break;

                case 3:
                    if (isNaN(rpRetSavedVal) || (rpRetSavedVal < 5000) || (rpRetSavedVal > 5000000)) {
                        $curListEl.find(".error-rp-annual-save").removeClass("hide");
                        isValid = false;
                    }
                    break;

                case 4:
                    if (isNaN(rpMonthlySaveVal) || (rpMonthlySaveVal < 5000) || (rpMonthlySaveVal > 5000000)) {
                        $curListEl.find(".error-rp-month").removeClass("hide");
                        isValid = false;
                    }
                    break;

                case 5:
                    if (!rpRetireType) {
                        $curListEl.find(".error-rp-retire-type").removeClass("hide");
                        isValid = false;
                    }
                    break;

                case 6:
                    if (!rpInvestType) {
                        $curListEl.find(".error-rp-invest-type").removeClass("hide");
                        isValid = false;
                    }
                    break;

                default:
                    break;
            }
            return isValid;
        }


        function initNavigation(isForward) {
            const isCalcFormValid = validateCalcEl();
            if (isCalcFormValid && isForward) {
                if ((curListElArr.length - 1) > curSlickIndex) {
                    if (curSlickIndex === 0) {
                        $("#calc-form-back").removeClass("hide");
                        ageArr.some((item, index) => {
                            if (curAgeVal <= item) {
                                ageArrIndex = index;
                                return true;
                            }
                        });
                    }
                    $calcSlickEl.slick("slickNext");
                } else {
                    resultPageCalc();
                    $(".calculator-container").addClass("hide");
                    $(".calculator-result").removeClass("hide");
                }
            } else if (isCalcFormValid && !isForward) {
                if (!$(".calculator-result").hasClass("hide")) {
                    $(".calculator-container").removeClass("hide");
                    $(".calculator-result").addClass("hide");
                    $calcSlickEl.slick('slickGoTo', (curListElArr.length - 1));
                } else if (0 < curSlickIndex) {
                    (curSlickIndex === 1) && $("#calc-form-back").addClass("hide");
                    $calcSlickEl.slick("slickPrev");
                }
            }
            setTimeout(() => {
                enableNewNav(true);
            }, 200);
        }

        function enableNewNav(bEnableNav) {
            bEnableNav ? $navEl.css("pointer-events", "all") : $navEl.css("pointer-events", "none");
        }

        function dynamicNudgeQueOpt(slickIndex) {
            $retNudgeImg.attr("src", `assets/images/retirement-planner/${dynamicInfoArr[ageArrIndex][slickIndex]["nudgeIcon"] || dynamicInfoArr[0][slickIndex]["nudgeIcon"]}`);
            $retNudgeText.html(dynamicInfoArr[ageArrIndex][slickIndex]["nudgeText"] || dynamicInfoArr[0][slickIndex]["nudgeText"]);
            $(curListElArr[slickIndex]).find(".rp-ques").html(dynamicInfoArr[ageArrIndex][slickIndex]["question"] || dynamicInfoArr[0][slickIndex]["question"]);

            let defaultSpendTypeArr = dynamicInfoArr[0][slickIndex]["optionsArray"];
            let ageWiseSpendTypeArr = dynamicInfoArr[ageArrIndex][slickIndex]["optionsArray"];
            let spendTypeArr = (ageWiseSpendTypeArr.length ? ageWiseSpendTypeArr : defaultSpendTypeArr);
            $(curListElArr[slickIndex]).find(".radio-opt-text").each((index, item) => {
                item.innerHTML = (spendTypeArr[index]);
            });
        }

        $navEl.click((e) => {
            enableNewNav(false);
            e.preventDefault();
            fetchValues();
            let isForward = (e.target.id === 'calc-form-next');
            initNavigation(isForward);
            dynamicNudgeQueOpt($calcSlickEl.slick("slickCurrentSlide"));
        });

        //form navigation and validation: end

        function resultPageCalc() {
            const retAge = 58;
            const lifeExpectAge = 90;
            const inflationRate = 0.045;
            const expReturnsRate = 0.055;

            let yearsTillRet = retAge - curAgeVal;
            let postRetAge = lifeExpectAge - retAge;
            let expMultiAfterRet = 1;
            switch (rpRetireType) {
                case 'spending_more':
                    expMultiAfterRet = (1 + 0.2); //expense increased by 20%
                    break;
                case 'spending_less':
                    expMultiAfterRet = (1 - 0.2); //expense decreased by 20%
                    break;
                case 'spend_same':
                    expMultiAfterRet = 1;
                    break;
                default:
                    break;
            }
            let postAnnualExp = rpExpenseVal * expMultiAfterRet * 12;
            let postAnnualExpPlusInfl = postAnnualExp * (Math.pow((1 + inflationRate), yearsTillRet));

            let reqCorpus = 0;
            //calculating net present value of customers post retirement expense
            for (i = 0; i < postRetAge; i++) {
                let thisYrAnnExp = ((i === 0) ? postAnnualExpPlusInfl : (postAnnualExpPlusInfl * (1 + inflationRate)));
                let presValPostRetExp = presentValue(expReturnsRate, i, thisYrAnnExp);
                reqCorpus += presValPostRetExp;
            }

            const percVsInvProf = { risk_averse: 0.06, conservative_type: 0.066, balanced_type: 0.076, growth_type: 0.088, aggressive_type: 0.096 };

            let totalInvest = (rpRetSavedVal + (rpMonthlySaveVal * 12 * yearsTillRet)) * (Math.pow((1 + percVsInvProf[rpInvestType]), yearsTillRet));

            let gapAmtPendingToSave = reqCorpus - totalInvest;

            let score = Math.round(((gapAmtPendingToSave <= 0) ? 1 : (totalInvest / reqCorpus)) * 100);

            let monthInvNeed = ((gapAmtPendingToSave <= 0) ? 0 : (PMT((percVsInvProf[rpInvestType] / 12), (yearsTillRet * 12), (gapAmtPendingToSave * (-1)))));

            const scoreArr = [65, 80, 95, 100];

            const statArr = [
                { heading: "Your retirement score <strong>Needs Your Attention</strong>", body: "You are falling behind in planning your retirement. In order to relive life without any worries, we can make your wealth do the hard work." },
                { heading: "Your retirement score is <strong>Fair</strong>", body: "While you are on the right track, you still need help in planning your retirement better! With our help, you can make your wealth do the hard work and relive life on your own terms." },
                { heading: "Your retirement score is <strong>Good</strong>", body: "While you are saving enough for your retirement, you can still make your wealth do the hard work and relive life on your own terms." },
                { heading: "Your retirement score is <strong>On Target</strong>", body: "Congratulations! You have planned your retirement right. But there is always scope for improvement! With our help, you can make your wealth do the hard work and relive life on your own terms." }
            ];
            const ageMsgArr = [
                { heading: "", body: "iRe-Live Program is tailor made just for your retirement needs. You can meet your aspirations with our curated investment portfolios, customized as per your investment behavior and get a lot more benefits." },
                { heading: "", body: "iRe-Live Program is tailor made just for your retirement needs. You can do goal based investments, consolidate and optimize investments, get a single view for easy investment tracking and enjoy a lot more benefits." },
                { heading: "", body: "iRe-Live Program is tailor made just for your retirement needs. You can manage your corpus efficiently, ensure a smooth transition from employer benefits, avail pension management services and get a lot more." },
                { heading: "", body: "iRe-Live Program is tailor made just for your retirement needs. You can rebalance your investments, do legacy planning, enjoy retirement benefits across lifestyle, healthy living and a lot more." }
            ];
            const colorArr = ['#FF4A42', '#FFB74A', '#BAD22F', '#58951D'];
            let scoreArrIndex = 0;

            scoreArr.some((item, index) => {
                if (score <= item) {
                    scoreArrIndex = index;
                    return true;
                }
            });

            $("#rp-score").html(score);
            $("#rp-score").css("color", colorArr[scoreArrIndex]);
            // $("#rp-score-place").css("left", score + "%");
            $("#rp-score-place").css("transform", `rotate(${(score * 3.6) - 16}deg)`);

            $("#score-heading").html(statArr[scoreArrIndex]["heading"]);
            $("#score-body").html(statArr[scoreArrIndex]["body"]);

            $("#age-msg-body").html(ageMsgArr[ageArrIndex]["body"]);

            $("#rp-corpus").html(`₹ ${globalizeAmt(Math.round(reqCorpus))}`);
            $("#rp-invest-ret").html(`₹ ${globalizeAmt(Math.round(totalInvest))}`);
            // $("#rp-pending-corpus").html(`₹ ${globalizeAmt(Math.round(reqCorpus - totalInvest))}`);
            // $("#rp-month-invest").html(`₹ ${globalizeAmt(Math.round(monthInvNeed))}`);
        }

    });

    $(".orangebook-download .orangebook-cards-slider")
        .not(".slick-initialized")
        .slick({
            dots: false,
            arrows: true,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },

                {
                    breakpoint: 557,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

    $(".customer-review-slider.single-slide").slick({
        dots: !0,
        arrows: !0,
        infinite: !0,
        autoplay: !1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(window).on("load", function () {
        $(".accordion--scroll").mCustomScrollbar();
        $(".reviews--scroll").mCustomScrollbar();
    });

    $('a.jf__link').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - $('header').height() - 10
        }, 600, function () {
            // location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });


        return false;
    });


    $('.jf-navigation-btn').hide();

    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        /*
                if ($('.retirement-outer').visible(true)) {
                    $('.jf-navigation').show();
                } else {
                    $('.jf-navigation').hide();
                }
                */


        // > 100px from top - show div
        var scrollDistanceNEW = scrollDistance + 150;
        if (scrollDistanceNEW >= $('.retirement-outer').offset().top) {

            $('.jf-navigation').show();
        } else {
            $('.jf-navigation').hide();
        }

        if (scrollDistanceNEW >= $('.retirement-outer').offset().top + $('.retirement-outer').outerHeight() - (window.innerHeight - 450)) {
            $('.jf-navigation').hide();
        }



        // Assign active class to nav links while scolling
        $('.float-retirement').each(function (i) {

            scrollDistance = scrollDistance + 100;
            if ($(this).position().top <= scrollDistance) {

                $('.jf-navigation a.active').removeClass('active');
                $('.jf-navigation a').eq(i).addClass('active');
            }
        });
    }).scroll();


}());

