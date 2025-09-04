import Chart from 'chart.js/auto';


export function renderChart(data) {
const chartCanvas = document.getElementById('myChart');

  const existingChart = Chart.getChart(chartCanvas);
  if (existingChart) {
    existingChart.destroy();
  }

  const forecastDays = data.forecast.forecastday;
const for13Days = forecastDays.slice(1, 14);

const labels = for13Days.map(day => new Date(day.date).toLocaleDateString('en-US', {
weekday: 'short'
  }));
const avgTempsC = for13Days.map(day => day.day.avgtemp_c);
const avgTempsF = for13Days.map(day => day.day.avgtemp_f);

new Chart(chartCanvas, {
      type: 'line',
    data: {
    labels: labels,
      datasets: [{
         label: 'Average Temperature (°C)',
        data: avgTempsC,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      }, {
        label: 'Average Temperature (°F)',
          data: avgTempsF,
        borderColor: 'rgb(255, 99, 132)',
      tension: 0.1,
        fill: false,
      }]
    },
 options: {
      responsive: true,
scales: {
        y: {
      beginAtZero: false,
          title: {
           display: true,
          text: 'Temperature'
          }
        },
        x: {
          title: {
           display: true,
          text: 'Day'
          }
        }
      }
    }
  });
}