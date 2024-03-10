<template>
  <div class="container-fluid">
    <div class="row px-5">
      <div class="col-8" style="border-right: 15px solid white;">
        <div class="row container-grafic-line">
          <div class="col-2 container-cards-chart" style="border-right: 1px solid white">
            <h6 class="mb-2 text-white">Tareas Ejecutadas2</h6>
            <h5 class="mb-2 text-container-cards-chart text-white">350</h5>
            <h6 class="text-white">Ejecutadas hoy</h6>
          </div>
          <div class="col-10">
            <div>
              <ChartsComponentDark
                :headers="chartHeaders2"
                :data="chartData2"
                chartWidth="800px"
                chartHeight="300px"
                textColor="#E1E3ED"
                lineColor="#8387A1"
                type="line"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="row container-grafic-line">
          <ChartsComponent
            :headers="chartHeaders3"
            :data="chartData3"
            textColor=""
            chartHeight="260px"
          />

          
        </div>
      </div>
    </div>


    <!-- Tarjeta de grafica lineas latareales -->
     <div class="row">
      <div v-for="item in 20" class="col-4  mt-2 px-4" >
        <div
          class="row container-card-child-task  bg-gray-chart" style="border-radius: 5px;"
        >
          <div
            class="col-12 "
          >
            <div class="d-flex">
              <div class="container-cards-chart w-50">
                <h6 class="mt-2">Tarea ejecuadas</h6>
                <h5 class="text-container-cards-chart">350</h5>
                <h6 class="">Deudores</h6>
              </div>
              
              <div class="container-text-team-chart mt-4 w-50">
                <h5 class="mb-0">Equipo Tierra</h5>
              </div>
            </div>
            <hr style="margin-top: -5px;">
          </div>
          <div class="col-6">
           
          </div>
          <div class="col-12">
           
          </div>
          <div class="col-12 p-2">
            <ChartsComponent
            :headers="chartLineHeaders"
            :data="chartLineData"
            type="horizontalBar"
            />
          </div>
        </div>
      </div>
    </div>



    <!-- <div class="row">
      <div class="col-4 bg-gray-chart">
        <div
          class="row container-card-child-task"
        >
          <div
            class="col-5 container-cards-chart"
            style="border-right: 1px solid #caccdb"
          >
            <h6 class="mb-0">Resultados</h6>
            <h5 class="mb-0 text-container-cards-chart">350</h5>
            <h6>Deudores</h6>

            <button class="view-overflow mt-5">Ver desbordados</button>
          </div>
          <div class="col-7 p-2">
            <ChartsComponent
              :headers="chartHeaders3"
              :data="chartData3"
              textColor="#d3d3d3"
              chartHeight="240px"
            />
          </div>
        </div>
      </div>


      <div class="col-4">
        <div class="col-12 container-card-child-task bg-gray-chart">
          <div
            class="card-center-child"
          >
            <h6 class="">Analistas activos</h6>
            <h5 class=" text-container-cards-chart">200</h5>
            <h6 class="">Área de COBRANZA</h6>
          </div>
        </div>
        <div class="col-12 container-card-child-task bg-gray-chart" style="margin-top: 20px;">
          <div
            class="card-center-child"
          >
            <h6 class="">Límite de tareas simultaneas</h6>
            <h5 class=" text-container-cards-chart">50</h5>
            <h6>Por analista</h6>
          </div>
        </div>
      </div>


      <div class="col-4 bg-gray-chart container-card-child-task">
        <div class="col-12 ">
          <div class="card-center-child">
            <h5 class="text-center">Define un tiempo para realizar esta tarea</h5>

            <div class="form-group mt-3 w-100 d-flex flex-column justify-content-center align-items-center">
              <label for="">Hora de inicio</label>
              <input type="date" class="form-control w-50">
              
            </div>

            <div class="form-group mt-3 w-100 d-flex flex-column justify-content-center align-items-center">
              <label for="">Hora de finalización</label>
              <input type="date" class="form-control w-50" >
              
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import ChartsComponent from "./ChartsComponent.vue";
import ChartsComponentDark from "./ChartsComponentDark.vue";

export default {
  data() {
    return {
      chartLineHeaders: ["Angie Muñoz", "Sol Rozo", "Mónica García", "Edgardo Mosquera", "Juan Gamba", "Rosa Martínez"],
      chartLineData: [
        {
          label: "Ejecutadas",
          backgroundColor: "#65F621", // Asigna colores según el orden de las etiquetas
          data: [38, 64, 110,45, 15, 20],
          barPercentage: 0.9, // Ajusta el ancho de las barras (0.5 significa la mitad del espacio disponible)
        },
        {
          label: "Canceladas",
          backgroundColor: "#EF0000", // Asigna colores según el orden de las etiquetas
          data: [20, 50, 60, 40,30, 15],
          barPercentage: 0.9, // Ajusta el ancho de las barras (0.5 significa la mitad del espacio disponible)
        },
      ],

      chartHeaders2: [
        "08:00 am",
        "09:00 am",
        "10:00 am",
        "11:00 am",
        "12:00 pm",
        "01:00 pm",
        "02:00 pm",
        "03:00 pm",
        "04:00 pm",
        "05:00 pm",
        "06:00 pm",
        
      ],
      chartData2: [
          {
              "label": "Ejecutadas",
              "backgroundColor": "transparent",
              "borderColor": "#65F621",
              "pointBackgroundColor": "white",
              "pointBorderColor": "white",
              "data": [
                  0,
                  0,
                  0,
                  1,
                  2,
                  0,
                  0,
                  0,
                  1,
                  1,
                  0
              ],
              "barPercentage": 0.5
          },
          {
              "label": "Canceladas",
              "backgroundColor": "transparent",
              "borderColor": "#EF0000",
              "pointBackgroundColor": "white",
              "pointBorderColor": "white",
              "data": [
                  0,
                  0,
                  3,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
              ],
              "barPercentage": 0.5
          }
      ],

      chartHeaders3: ["Tierra", "Vigente","Premium","Master"],
      chartData3: [
        {
          label: "Ejecutadas",
          borderColor: "transparent",
          backgroundColor: ["#7AFFC7", "#63ABFD","#D884FF","#E697FF"], // Asigna colores según el orden de las etiquetas
          data: [30, 40, 10,20],
          barPercentage: 0.5, // Ajusta el ancho de las barras (0.5 significa la mitad del espacio disponible)
        },
      ],
    };
  },
  components: {
    ChartsComponent,
    ChartsComponentDark
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
.container-candle {
  width: 500px;
}

.container-grafic-line {
  display: flex;
  padding: 19px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--Global-Black, #252525);
  background: var(--Global-Blue-100, #2c2d33);

  /* ShadowCard */
  box-shadow: 4px 6px 11px 0px #d6daea;
}

.container-cards-chart {
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

.text-container-cards-chart {
  color: #0b1354;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.5px;
}

.view-overflow {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  background: var(--Gradient-Blue, linear-gradient(180deg, #0abfbc 0%, #516395 100%));
  color: white;
  border: 1px solid transparent;
}

.container-card-child-task {
  border-radius: 4px 0px 0px 4px;
  border: 1px solid #caccdb;
}

.bg-gray-chart {
  background-color: #ebecf1;
}

.card-center-child {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  padding: 12px 0px;
}



.container-cards-chart {
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  align-self: stretch;
}

.container-text-team-chart{
  height: 30px;
  border-radius: 2px;
  background: #41466D;
  color: white;
  padding: 4px;
  display: flex;
  justify-content: end; 
  align-items: center;
}
</style>
