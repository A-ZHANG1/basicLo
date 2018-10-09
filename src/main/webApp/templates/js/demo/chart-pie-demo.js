// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ["Blue", "Red", "Yellow", "Green"],
//     datasets: [{
//       data: [12.21, 15.58, 11.25, 8.32],
//       backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
//     }],
//   },
// });

// console.info("这是info");

//new
// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
// Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example



let original;
    axios.get('./original.json').then(req=>{
        original = req.data;
        initGraph();     
    });

let myChart = echarts.init(document.getElementById('myPieChart'));

let option = {
    xAxis: {
        type: 'category',
        data: ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30', '30-35','35-40','40-45']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
        data: [],
        type: 'line'
    }],
    markLine:{
                    symbol:['none'],
                    data:[[
                        {coord:[0,500]},
                        {coord:[1500,500]}
                    ],[
                        {coord:[0,-500]},
                        {coord:[1500,-500]}
                    ]]
                }
};

function initGraph(){
	option.series[0].data=original.data;
    myChart.setOption(option, true);
}

console.info("这是info");
