<template>
  <div>
    <canvas ref="myChart" :width="chartWidth" :height="chartHeight"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  props: {
    //Cabeceras del componente
    headers: {
      default: ["Prueba"],
      required: true,
    },
    //Tipo del componente
    type: {
      default: "doughnut",
      required: true,
    },
    //Data del componente
    data: {
      default: null,
      required: true,
    },
    //Animaciones
    animation: {
      default: {
        duration: 2000, // Duración de la animación en milisegundos
        easing: "easeOutBounce", // Tipo de easing (opcional)
      },
    },

    //Ancho del grafico
    chartWidth: {
      default: null,
    },

    //Altura
    chartHeight: {
      default: null,
    },

    //Color de texto de las graficas
    textColor: {
      default: "#111111",
    },

    //Color de las lineas de las graficas
    lineColor: {
      default: "",
    },

    //Activa o desactiva los labels
    showLabel:{
      default: true,
    },

    //Porcentaje de las lineas de las graficas
    percentageLine:{
      default: 50,
    },
  },
  methods: {
    renderChart() {
      // Gráfico de Barras : type: 'bar'
      // Gráfico de barras horizontal : horizontalBar
      // Gráfico de Línea : type: 'line'
      // Gráfico Radar : type: 'radar'
      // Gráfico de Rosquilla (Doughnut) :  type: 'doughnut'
      // Gráfico de Tarta (Pie) : type: 'pie'
      // Gráfico de Área Polar : type: 'polarArea'
      // Gráfico de Burbujas :type: 'scatter'
      // Gráfico de Dispersión (Scatter Plot) : type: 'scatter'
      // Gráfico de Barras Horizontal :type: 'horizontalBar'

      const ctx = this.$refs.myChart.getContext("2d");
      this.chart = new Chart(ctx, {
        type: this.type,
        data: {
          labels: this.headers,
          datasets: this.data,
        },
        options: {
          cutoutPercentage: this.percentageLine, // Ajusta este valor según tus necesidades
          animation: {
            duration: 0, // Desactiva las animaciones estableciendo la duración en 0
          },
          legend: {
            display: this.showLabel,
            labels: {
              fontColor: this.textColor, // Color del texto en la leyenda
            },
          },
        },
       
      });
    },
  },
};
</script>

<style scoped>
</style>
