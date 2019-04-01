<template>
  <div>
      <b-container fluid>
        <h2>
          Hola! Blanca Romero
        </h2>
        <p>
          Conoce tus estadísticas y compárate con los mejores:
        </p>
        <canvas id="planet-chart"></canvas>
        <p style="{justify-content: left}">
          Puedes completar las siguientes encuentas para mejorar tus predicciones
          y/o actualizar tus objetivos:
          <br>
          <a href="/test">Qué tan comprometida eres?</a>
          <br>
          <a href="/test">Qué tan responsable eres?</a>
          <br>
          <a href="/test">Eres buena trabajando en equipo o mejor en solitario?</a>
          <br>
          <a href="/test">Te comportas mejor en un remoto opresencial?</a>
        </p>
      </b-container>
  </div>
</template>

<script>
import Chart from 'chart.js';
import { planetChartData } from '../chartData/chart-data';

export default {
  name: 'profile',
  data() {
    return {
      planetChartData,
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData);
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
