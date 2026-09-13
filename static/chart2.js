const ctx2 = document.getElementById('doughnut');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Доход', 'Расход'],
    datasets: [{
      label: 'Работал',
      data: [window.income, window.expenses],
      backgroundColor: [
        'rgba(145, 245, 64, 0.8)',
        'rgba(255, 99, 132, 0.8)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});