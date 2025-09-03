import Chart from 'chart.js/auto';


export function renderChart(data) {
  const chartCanvas = document.getElementById('myChart');

  // Destroy previous chart instance if it exists
  const existingChart = Chart.getChart(chartCanvas);
  if (existingChart) {
    existingChart.destroy();
  }

  const forecastDays = data.forecast.forecastday;
  // Get data for the next 13 days (excluding the current day)
  const next13Days = forecastDays.slice(1, 14);

  const labels = next13Days.map(day => new Date(day.date).toLocaleDateString('en-US', {
    weekday: 'short'
  }));
  const avgTempsC = next13Days.map(day => day.day.avgtemp_c);
  const avgTempsF = next13Days.map(day => day.day.avgtemp_f);

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