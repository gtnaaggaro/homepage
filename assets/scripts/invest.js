//Begin: 08/04/2021 investment strategy - piechart configuration
var ctx = document.getElementById("equityChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['EQUITY', 'DEBT',],
    datasets: [{
      data: [1911707,  819303 ],
      backgroundColor: [
        '#F37E20',
        '#074A86',
      ],
      datalabels: {
        formatter: function (value, context) {
          return '';
        },
      }
    }]
  },
  options: {
    responsive: true,
    legend: { display: false},
    tooltips: { enabled: false},
    legendCallback: function (chart) {             
      // Return the HTML string here.
      var text = [];
      text.push('<ul class="' + chart.id + '-legend legends">');
      for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          text.push('<li><span id="circle-' + i + '-item" class="dots" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
          if (chart.data.labels[i]) {
              text.push('<span id="label-' + i + '-item" class="label" >'+chart.data.labels[i]+'</span>');
          }
          text.push('<span id="value-' + i + '-item" class="value">&#x20b9;'+Number((chart.data.datasets[0].data[i]).toFixed(1)).toLocaleString()+'</span>');
          text.push('</li>');
      }
      text.push('</ul>');
      return text.join("");
    },
  }
});
document.getElementById('chart-legends').innerHTML = myChart.generateLegend();
//End: 08/04/2021 investment strategy - piechart configuration

function calculate() {
    addCommas("invest-amt-input_cl");
    addCommas("goal-amt-input_cl");
}
//Begin: 08/04/2021 - c22 form wizard steps navigation
function startFlowByPurpose(purpose) {
  if(purpose){
    $('.investment-content').addClass('hide');
    $('.ftri-steps-top, .ftri-steps-bottom').removeClass('hide');
    navigateWrtCurrentStep('next', 0);
  }
}
function navigateWrtCurrentStep(direction, event){
  if(event){
    event.preventDefault();
  }
  var newIndex = 0;
  var totalSteps = $('.ftri-steps-top .progress-bar .indicator').length;
  if(!$('.ftri-steps-top .progress-bar .current').length){
    $('.ftri-steps-top .progress-bar .indicator').eq(0).addClass('current');
    $('.ftri-steps-content').addClass('hide');
    $('.ftri-steps-content').eq(0).removeClass('hide');
    $('.ftri-steps-bottom .back-link').addClass('disable-el');
  }else{
    $('.ftri-steps-top .progress-bar .indicator').each(function(index) {
      $(this).addClass('active');
      if($(this).hasClass('current')){
        if(direction === 'next'){
          if(index<totalSteps-1){
            newIndex = index + 1;
          }else{
            newIndex = totalSteps-1;
          }
        }else if(direction === 'back'){
          if(index>0){
            newIndex = index - 1;
          }else{
            newIndex = 0;
          }
        }
        $('.ftri-steps-top .progress-bar .indicator').removeClass('current');
        $('.ftri-steps-top .progress-bar .indicator').eq(newIndex).addClass('current').removeClass('active');
        $('.ftri-steps-content').addClass('hide');
        $('.ftri-steps-content').eq(newIndex).removeClass('hide');

        if(newIndex <= 0){
          $('.ftri-steps-bottom .back-link').addClass('disable-el');
        }else if(newIndex >= totalSteps-1){
          $('.ftri-steps-bottom').addClass('hide');
        }else{
          $('.ftri-steps-bottom .back-link').removeClass('disable-el');
          $('.ftri-steps-bottom .next-link').removeClass('disable-el');
        }
        return false;
      }
    });
  }
}
//End: 08/04/2021 - c22 form wizard steps navigation

$(document).ready(function () {
    setOnRangeChange(
        "age-input_cl",
        "age_cl",  
        calculate      
    );

    setOnRangeChange(
        "invest-amt-input_cl",
        "invest-amt_cl",
        calculate        
    );
    setOnRangeChange(
      "goal-amt-input_cl",
      "goal-amt_cl",  
      calculate    
    );
  
    calculate();
});