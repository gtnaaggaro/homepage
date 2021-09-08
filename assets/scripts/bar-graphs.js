var myGraphs = [];
var config;

$(document).ready(function () {

    $('.custom-graph-container').each(function (item) {
        var ele = $(this);
        createBarGraph(ele, 0, 0, false);
    })
    $('input[name="investment_duration"]').on('change', function () {
        createBarGraph($(this).closest('.custom-graph-container'), 0, $(this).val(), true)
    })
    $('input[id="loan-amt-home-input"]').on('change', function () {
        var val = $(this).val().replace(/,/g, '');
        createBarGraph($(this).closest('.custom-graph-container'), val, 0, true)
    })
    $('input[name="loan-amt-home"]').on('change', function () {
        createBarGraph($(this).closest('.custom-graph-container'), $(this).val(), 0, true)
    })
});

function createBarGraph(ele, baseValue, year, updateGraph) {
    year = year || parseInt($(ele).find('input[name="investment_duration"]:checked').val());
    baseValue = baseValue || parseInt($(ele).find('input[name="loan-amt-home"]').val());
    var chart_area = $(ele).find('canvas');

    var dataset1 = [baseValue, baseValue, baseValue, baseValue];

    var dataset2 = [(year * 12) * 50000, (year * 24) * 50000, (year * 36) * 50000, (year * 60) * 50000];
    renderGraph(chart_area, dataset1, dataset2, updateGraph);
}

function renderGraph(chart_area, dataset1, dataset2, updateGraph) {
    var _stepSize = 1000000;
    if (dataset1[0] >= 5000000) {
        _stepSize = 5000000;
    }
    if (dataset1[0] >= 10000000) {
        _stepSize = 10000000;
    }
    if (dataset1[0] >= 50000000) {
        _stepSize = 50000000;
    }
    /*  console.log(dataset1[0])
     console.log(_stepSize) */
    var _baseValue = dataset1[0];
    if (updateGraph) {
        var curr_graph = myGraphs[$(chart_area).data('id')];
        curr_graph.data.datasets[0].data = dataset1;
        curr_graph.data.datasets[1].data = dataset2;
        curr_graph.options.scales.yAxes[0].ticks.stepSize = _stepSize;
        curr_graph.options.baseValue = _baseValue;
        curr_graph.update();
    }
    if (chart_area && !myGraphs[$(chart_area).data('id')]) {
        var graphDataSet = {
            labels: ['Saving Account', 'Deposit', 'Money Multiplier', 'Mutual Funds'],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: '#074A86',
                data: dataset1
            }, {
                label: 'Dataset 2',
                backgroundColor: '#F37E20',
                data: dataset2
            }]

        };
        config = {
            type: 'bar',
            data: graphDataSet,
            options: {
                cornerRadius: 10,
                fullCornerRadius: false,
                stackedRounded: false,
                tooltips: false,
                baseValue: _baseValue,
                legend: {
                    display: false,
                },
                layout: {
                    padding: 30,
                },
                responsive: true,
                plugins: {
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        color: '#F37E20',
                        display: function (context) {
                            return context.datasetIndex;
                        },
                        font: {
                            weight: 'bold'
                        },
                        formatter: function (value, context) {
                            var index = context.dataIndex;
                            var value = context.dataset.data[index];
                            var base = parseInt(context.chart.options.baseValue);

                            var formated_number = Number(
                                (base + value)
                            )
                                .toLocaleString('en-IN', {
                                    maximumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'INR'
                                });
                            return formated_number;
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        },
                        barThickness: 60,
                        stacked: true,
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: false,
                            borderDash: [2, 2],
                        },
                        ticks: {
                            display: true,
                            stepSize: _stepSize,
                            /*  max: 1000000, */
                            callback: function (value, index, values) {
                                return ' ';
                            }
                        },
                        stacked: true
                    }]
                },
            },
        };
        var ctx = chart_area[0].getContext('2d');
        myGraphs[$(chart_area).data('id')] = new Chart(ctx, config);
    }
}
