const ctx3 = document.getElementById('line');

new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
      label: 'Спал',
      data: [8, 9, 7, 7, 8, 9, 10],
      borderWidth: 1,                         // Толщина линии
      borderColor: 'red',                     // Цвет линии
      pointBackgroundColor: 'blue',           // Цвет точек
      pointBorderColor: 'white',              // Обводка точек
      fill: true,                             // Включить заливку
      backgroundColor: 'rgba(255, 88, 88, 0.1)' // Полупрозрачная заливка
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