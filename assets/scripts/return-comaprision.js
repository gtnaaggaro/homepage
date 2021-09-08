function updateRangeEl(rangeEl) {
    var ratio = valueTotalRatio(rangeEl.value, rangeEl.min, rangeEl.max);
    rangeEl.style.backgroundImage = getLinearGradientCSS(
        ratio,
        "#f37e20",
        "#4B4B4B"
    );
}
/* 08/04/2021 code update */
function calculateLoanAmt() {
    addCommas("loan-amt-home-input");
}
$(document).ready(function(){
    /* 08/04/2021 code update */
    setOnRangeChange(
        "loan-amt-home-input",
        "loan-amt-home",  
        calculateLoanAmt    
    );
    calculateLoanAmt();
    $('.radio-wrapper').find('[name="category-type"]').on('click',function(){
        $(this).closest('.radio-list').siblings().removeClass('checked');
        $(this).closest('.radio-list').addClass('checked');
        var img_url = $(this).data('url');
        img_url && $('.target-img-change img').attr('src',img_url);
    })
})