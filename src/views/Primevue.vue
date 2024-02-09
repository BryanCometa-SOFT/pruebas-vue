<template>
  <div class="container-fluid">
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="mr-2" />

    <Sidebar
      :visible.sync="visibleRight"
      position="right"
      :baseZIndex="1000"
      style="background: #ebecf1; width: 30vw"
    >
      <div class="mt-3 px-3">
        <h2 class="text-left text-black-pro">Mis tareas</h2>

        <div class="mt-4">
          <h5 class="text-left text-black-pro">Tareas pendientes</h5>
          <!-- Bucle para renderizar cada sección del acordeón -->
          <div class="container-accordion-pro" v-for="(item, index) in sections" :key="index">
            <!-- Cada sección del acordeón -->
            <div class="accordion-item" :class="{ active: item.active }">
              <!-- Encabezado de la sección (hace clic para activar/desactivar) -->
              <div class="accordion-header bg-purple-orange text-white">
                <div class="d-flex justify-content-start">
                  <img
                    @click="toggleSection(index)"
                    class="img-fluid mr-15px"
                    style="width:25px; cursor: pointer;"
                    :src="item.active ? '/assets/img/law-2300/flecha-abajo.png' : '/assets/img/law-2300/flecha-derecha.png'"
                  />
                  <h5 class="mb-0">{{ item.title }}</h5>
                </div>
                <img
                    class="img-fluid"
                    style="width:25px; cursor: pointer;"
                    :src="'/assets/img/law-2300/flecha-abajo.png'"
                  />
              </div>
              <!-- Contenido de la sección (se mostrará o ocultará) -->
              <div class="accordion-content" style="background-color: #EBECF1;">

                <h6 class="text-black-pro">PRUEBA NO LLAMAR EZEQUIEL VARGASs</h6>

                <!-- Fila de la fecha de la cuota -->
                <div class="row mt-3">
                  <div class="col-6 d-flex align-items-center">
                    <p>Fecha de la cuota</p>
                  </div>
                  <div class="col-6">
                    <p class="fw-600 mb-0">15 - Enero - 2023</p>
                    <p class="fw-600">15 - Enero - 2023</p>
                  </div>
                </div>

                <!-- Fila de la condonaciónes -->
                <div class="row mt-1">
                  <div class="col-6 d-flex align-items-center">
                    <p>Condonación</p>
                  </div>
                  <div class="col-6">
                    <p class="fw-600 mb-0">CON-S00222222</p>
                    <p class="fw-600">CON-S00222222</p>
                  </div>
                </div>

                 <!-- Fila de la condonaciónes -->
                 <div class="row mt-1">
                  <div class="col-6 d-flex align-items-center">
                    <p>Monto proyectado</p>
                  </div>
                  <div class="col-6">
                    <p class="btn-money-task fw-600 mb-0">$10.000.000</p>
                    <p class="btn-money-task fw-600">$10.000.000</p>
                  </div>
                </div>


              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center px-2 mt-2" >
              <span>Tiempo restante</span>
              <div class="btn-time-task">
                60 minutos
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <h4 class="text-center mt-5">Contacto preventivo</h4>
          <h6 class="text-center mt-4">Objetivo</h6>

          <div class="container-porcentaje-grafic" style="position: relative">
            <span class="element-porcentaje">80%</span>
            <ChartsComponent
              :headers="chartHeaders3"
              :data="chartData3"
              chartHeight="90px"
              :showLabel="false"
              :percentageLine="80"
            />
          </div>

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
  </div>
</template>

<script>
import ChartsComponent from "./ChartsComponent.vue";
export default {
  data() {
    return {
      visibleLeft: false,
      visibleRight: true,
      visibleTop: false,
      visibleBottom: false,
      visibleFull: false,

      active: false,

      sections: [
        { title: "Cumplimiento preventivo", content: "Cumplimiento preventivo", active: true },
      ],

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
  methods: {
        // Método para activar/desactivar una sección del acordeón
        toggleSection(index) {
          this.sections[index].active = !this.sections[index].active;
        },


  },
};
</script>

<style scoped>
/* Agrega estilos si es necesario */
@import url("@/assets/css/standart-style-ws.css");

.element-porcentaje {
  position: absolute;
  top: 34%;
  left: 32%;
  font-size: 20px;
  color: #41466d;
}

.container-porcentaje-grafic {
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

/* Estilos básicos para el acordeón */
.container-accordion-pro {
  width: 100%;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px 7px 0px 0px;
  border: 1px solid #ced4da;
  background: #e9ecef;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #e9ecef;
  color: black;
}

/* Contenido del acordeon */
.accordion-content {
  border-radius: 0px 0px 7px 7px;
  padding: 15px 30px;
  border: 1px solid #ced4da;
  background-color: white;
}

.btn-time-task{
  display: flex;
  padding: 6px 15px;
  align-items: flex-start;
  font-size: 16px;
  gap: 10px;
  border-radius: 8px;
  background: var(--Collect-State-Projected, #FFF511);
  color: #8D5D00;
}

.btn-money-task{
  display: flex;
  padding: 6px 15px;
  align-items: center;
  font-size: 16px;
  gap: 10px;
  border-radius: 8px;
  background: var(--Collect-State-Projected, #FFF511);
  color: #8D5D00;
  margin-bottom: 6px;
}
</style>
