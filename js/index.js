var ctx = document.getElementById("impact-bar").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Have one fewer child", 
      "Living car free", 
      "Avoid one transatlantic flight", 
      "Buy green energy", 
      "Switch electric car to car free", 
      "Plant based diet"],
    datasets: [{
      label: 'Tons of CO₂ saved',
      data: [58, 2.4, 1.6, 1.5, 1.15, 0.8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Personal choices to reduce contribution to climate change',
      fontSize: 24
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Lifestyle choices'
        }
      }],
      yAxes: [{
        type: 'logarithmic',
        ticks: {
          autoSkip: true,
          beginAtZero:true,
          callback: function (value) {
            if(value == 0.5 || value == 1 || value == 5 || value == 60) return value;
          }
        },
        scaleLabel: {
          display: true,
          labelString: 'Tons of CO₂'
        }
      }]
    }
  }
});