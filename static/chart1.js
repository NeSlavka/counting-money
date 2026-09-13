  const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar', // line, doughnut
    data: {
      labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      datasets: [{
        label: 'Работал',
        data: [5, 4, 6, 8, 4, 3, 2],
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