import Chart from 'chart.js';

export const renderLine  = (ref , data)=>{
    new Chart(ref, {
        type: "line",
        data: {
            labels: data.dates,
            datasets: [
                {
                    label: "Active",
                    data: data.cases,
                    fill: false,
                    borderColor: "#55bae7",
                    borderDash: [5, 5],
                    backgroundColor: "#bae755",
                    pointBackgroundColor: "#bae755",
                    pointBorderColor: "#55bae7",
                    pointHoverBackgroundColor: "#bae755",
                    pointHoverBorderColor: "#bae755",
                }
            ]
        },
        options: {
            //Customize chart options
        }
    });
}

export const renderBar = (ref,data)=>{
    const colors = ['#007bff','#28a745','#444444','#c3e6cb','#dc3545','#6c757d'];
    var chartData = {
        labels: data.dates,
        datasets : [{data:data.cases ,backgroundColor: colors[0] }]
      };

    new Chart(ref, {
        type: 'bar',
        data:chartData,
        options: {
          scales: {
            xAxes: [{
                barPercentage: 0.4,
                barPercentage: 0.5
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend: {
            display: false
          }
        }
        });
}
