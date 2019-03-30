export const planetChartData = {
  type: 'radar',
  data: {
    labels: ['typescript',
      'node',
      'rest',
      'html',
      'javascript',
      'git',
      'creatividad',
      'mejorar',
      'adaptabilidad',
      'pensamiento',
      'trabajo',
      'empatia'],
    datasets: [
      { // one line graph
        label: 'Blanca Romero',
        data: [60, 80, 90, 70, 50, 80, 100, 80, 100, 90, 100],
        backgroundColor: ['rgba(54,73,93,.5)'],
        borderColor: ['#36495d'],
        borderWidth: 3,
      },
      { // another line graph
        label: 'Team leader',
        data: [90, 60, 80, 90, 90, 90, 50, 90, 100, 90, 50],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: [
          '#47b784',
        ],
        borderWidth: 3,
      },
      { // another line graph
        label: 'Project Manager',
        data: [25, 30, 30, 50, 60, 90, 100, 100, 100, 90, 100, 100],
        backgroundColor: [
          'rgba(250,100,250,.5)', // Green
        ],
        borderColor: [
          '#467290',
        ],
        borderWidth: 3,
      },
      { // another line graph
        label: 'CTO',
        data: [10, 10, 10, 40, 30, 100, 100, 100, 100, 100, 100, 100],
        backgroundColor: [
          'rgba(0,0,250,.5)', // Green
        ],
        borderColor: [
          '#1390ad',
        ],
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        },
      }],
    },
  },
};

export default planetChartData;
