const ctx4 = document.getElementById('bb');

new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', "Сентябрь", "Октябрь", "Ноябрь", "Декабри"],
    datasets: [{
      label: 'Доход',
      data: window.incomeData,
      borderWidth: 1,                         // Толщина линии
      borderColor: 'green',                    // Цвет линии
      pointBackgroundColor: 'green',          // Цвет точек
      pointBorderColor: 'white',              // Обводка точек
      fill: true,                             // Включить заливку
      backgroundColor: 'rgba(127, 255, 88, 0.1)' // Полупрозрачная заливка
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