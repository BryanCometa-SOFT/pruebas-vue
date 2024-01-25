<template>
  <div class="container-fluid">
    <Button icon="pi pi-arrow-right" @click="visibleLeft = true" class="mr-2" />
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2" />
    <Button icon="pi pi-arrow-down" @click="visibleTop = true" class="mr-2" />
    <Button icon="pi pi-arrow-up" @click="visibleBottom = true" class="mr-2" />
    <Button icon="pi pi-th-large" @click="visibleFull = true" />

    <Sidebar
      :visible.sync="visibleLeft"
      :baseZIndex="1000"
      style="background: #ebecf1; width: 20vw"
    >
      <h3>Left Sidebar</h3>
    </Sidebar>

    <Sidebar
      :visible.sync="visibleRight"
      position="right"
      :baseZIndex="1000"
      style="background: #ebecf1; width: 20vw"
    >
      <div class="mt-3 px-3">
        <h3>Detalle de la tarea</h3>

        <div class="mt-5">
          <h4 class="text-center mt-5">Contacto preventivo</h4>
          <h6 class="text-center mt-4">Objetivo</h6>

          <div class="container-porcentaje-grafic" style="position: relative;" >
            <span class="element-porcentaje">80%</span>
            <ChartsComponent
              :headers="chartHeaders3"
              :data="chartData3"
              chartHeight="90px"
              :showLabel="false"
              :percentageLine="80" />
          </div>
         

          <img src="@/assets/img/tacks/task1.png" class="w-100 m-auto mt-3" />

          <!-- boton de editar objetivo -->
          <div
            v-if="isEditInfoTaks == true"
            class="btn-edit-objetive-task m-auto mt-5"
            @click="openModalEditObjectTask()"
          >
            <img
              title="Editar"
              src="/assets/img/iconos/editar.svg"
              width="25px"
              class="cursor-pointer mr-5px"
            />
            <span>Editar objetivo</span>
          </div>
        </div>
      </div>
    </Sidebar>

    <Sidebar :visible.sync="visibleTop" :baseZIndex="1000" position="top">
      <h3>Top Sidebar</h3>
    </Sidebar>

    <Sidebar :visible.sync="visibleBottom" :baseZIndex="1000" position="bottom">
      <h3>Bottom Sidebar</h3>
    </Sidebar>

    <Sidebar :visible.sync="visibleFull" :baseZIndex="1000" position="full">
      <h3>Full Screen</h3>
    </Sidebar>
  </div>
</template>

<script>
import ChartsComponent from "./ChartsComponent.vue";
export default {
  data() {
    return {
      visibleLeft: false,
      visibleRight: false,
      visibleTop: false,
      visibleBottom: false,
      visibleFull: false,

      chartHeaders3: ["Tierra"],
      chartData3: [
        {
          label: "Ejecutadas",
          borderColor: "transparent",
          backgroundColor: ["#EF0000", "#CACCDB"], // Asigna colores según el orden de las etiquetas
          data: [80, 20],
          barPercentage: 0.5, // Ajusta el ancho de las barras (0.5 significa la mitad del espacio disponible)
          
        },
      ],
    };
  },
  components: { ChartsComponent },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
.container-candle {
  width: 500px;
}

.animated-image {
  width: 100px; /* Ajusta el tamaño de tu imagen según sea necesario */
  height: 100px;
  animation: rotateAndMoveUp 0.5s infinite alternate;
}

@keyframes rotateAndMoveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

.animated-image2 {
  width: 100px; /* Ajusta el tamaño de tu imagen según sea necesario */
  height: 100px;
  animation: rotateExample 2s infinite alternate;
}

@keyframes rotateExample {
  0%,
  100% {
    animation-timing-function: cubic-bezier(2, 0, 1, 2);
  }
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(3600deg);
  }
}

.animated-image3 {
  width: 100px; /* Ajusta el tamaño de tu imagen según sea necesario */
  height: 100px;
  animation: rotateExample2 1s infinite alternate;
}

@keyframes rotateExample2 {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  100% {
    transform: translate(0px, 10px) scale(1.4);
  }
}

.element-porcentaje{
  position: absolute;
  top: 34%;
  left: 32%;
  font-size: 20px;
  color: #41466D;
}

.container-porcentaje-grafic{
  background-color: white;
  width: 100px;
  padding: 0px;
  border-radius: 50%;
  height: 100px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
