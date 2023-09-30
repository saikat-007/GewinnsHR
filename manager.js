var areaChartOptions = {
    series: [
      {
        name: 'Present',
        data: [146,162,205,135,200,205,67],
      },
      {
        name: 'Absent',
        data: [1,5,2,3,7,2,1],
      },
      {
        name: 'WFH',
        data: [3,10,8,4,3,2,1],
      },
      {
        name: 'Week Off',
        data: [1,7,2,3,4,3,1],
      },
      {
        name: 'Leave',
        data: [1,7,2,3,4,3,1],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 160,
      width:720,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#00ab57', '#d50000' , '#a00d60' , '#bd0000' , '#abc123'],
    labels: [ 'Mon', 'tue', 'Wed', 'Thrs' , 'Fri' , 'Sat' , 'Sun'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        
      },
      show: true,
      position: 'right',
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          
        },
      },
    },
    yaxis: [
      {
        title: {
          text:"",
          style: {
            
          },
        },
        labels: {
          style: {
            
          },
        },
      },
      {
        opposite: true,
        title: {
          text: '',
          style: {
           
          },
        },
        labels: {
          style: {
            
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  var areaChart = new ApexCharts(
    document.querySelector('#area-chart-2'),
    areaChartOptions
  );
  areaChart.render();


$('input[name="daterange"]').daterangepicker();
$(function () {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#reportrange4 span").html(
      start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
    );
  }

  $("#reportrange4").daterangepicker(
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    },
    cb
  );

  cb(start, end);
});

$('input[name="daterange"]').daterangepicker();
$(function () {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#reportrange5 span").html(
      start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
    );
  }

  $("#reportrange5").daterangepicker(
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    },
    cb
  );

  cb(start, end);
});


var xValues = ["Idle Hours", "Overtime Hours"];
var yValues = [69,31];
var barColors = [
    "#FFA500",
  "#FFFF00"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Overtime vs Idle Hours"
    }
  }
});

var xValues = ["Prediction Hours", "Overtime Hours"];
var yValues = [76,24];
var barColors = [
  
  "#0000FF",
  "#FFA500",
  
];

new Chart("myPieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Payable Hours"
    }
  }
});
