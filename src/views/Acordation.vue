<template>
  <div class="container">

    <div class="row">
      <div class="col-12">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="fileInput">Selecciona una imagen:</label>
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="fileInput" ref="fileInput" @change="handleFileChange">
              <label class="custom-file-label" for="fileInput">{{ selectedFileName }}</label>
            </div>
          </div>
          
          <div v-if="selectedImage">
            <label>Imagen seleccionada:</label>
            <img :src="selectedImage" alt="Imagen seleccionada" class="img-fluid">
          </div>
    
          <button type="submit" class="btn btn-primary mt-3">Subir</button>
        </form>
      </div>

    </div>












    <div class="row">
      <div class="col-12">
        <!-- Bucle para renderizar cada sección del acordeón -->
        <div
          class="container-accordion"
          v-for="(item, index) in listHours"
          :key="index"
        >
          <!-- Cada sección del acordeón -->
          <div class="accordion-item" :class="{ active: item.active }">
            <!-- Encabezado de la sección (hace clic para activar/desactivar) -->
            <div class="accordion-header">
              <div class="d-flex justify-content-start">
                <button @click="toggleSection(index)" class="mr-10px">
                  {{ item.active ? ">" : "V" }}
                </button>
                <h4 class="mb-0">{{ typeDayTradMixin(item.day)  }}</h4>
              </div>

              <input type="checkbox" :checked="item.status == 1 ? true : false" :value="item.status"/>
            </div>
            <!-- Contenido de la sección (se mostrará o ocultará) -->
            <div class="accordion-content">
              <div class="d-flex justify-content-between align-item-center">
                <h6>Hora de inicio</h6>
                <input type="time" />
              </div>
              <div class="d-flex justify-content-between align-item-center">
                <h6>Hora de inicio</h6>
                <input type="time" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Componente de steap personalizado -->
      <div class="col-12">


         <!-- Componente de steap personalizado -->
        <div style="padding: 0px 0px;">
          <div class="line"></div>
    
          <ul class="custom-steps">
            <li v-for="(step, index) in steps" :key="index" :class="{ 'active': index === currentStep }">
              <button @click="changeStep(index)">
                {{ index + 1 }}
               
              </button>
              <span>{{ step.label }}</span>
            </li>
          </ul>
        </div>
       
    
        <!-- Contenido de cada paso aquí -->
        <div v-if="currentStep === 0">
          hola mundo 1 
        </div>
        <div v-if="currentStep === 1">
          hola mundo 2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      sections: [
        { title: "Sección 1", content: "Contenido de la sección 1", active: false },
        { title: "Sección 2", content: "Contenido de la sección 2", active: false },
        { title: "Sección 3", content: "Contenido de la sección 3", active: false },
      ],

      selectedImage: null,
    selectedFileName: 'Selecciona una imagen',

      listHours: [
        {
          status: 0,
          day: "monday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
        {
          status: 0,
          day: "tuesday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
        {
          status: 1,
          day: "wednesday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
        {
          status: 1,
          day: "thursday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
        {
          status: 1,
          day: "friday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
        {
          status: 1,
          day: "saturday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
        {
          status: 1,
          day: "sunday",
          hour_start: "10:30:00",
          hour_end: "03:30:00",
          active: false,
        },
      ],

      //Steps

      currentStep: 0,
      steps: [
        { label: 'Obligaciones' },
        { label: 'Confirmación' },
        { label: 'Prueba' },
        { label: 'prueba2' },
        // Agrega más pasos según sea necesario
      ],
    };
  },
  methods: {

    handleFileChange(event) {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        this.selectedFileName = file.name;

        // Usa FileReader para mostrar la imagen localmente
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedFileName = 'Selecciona una imagen';
        this.selectedImage = null;
      }
    },
    submitForm() {
      // Aquí puedes enviar el archivo al servidor si es necesario
      // También puedes realizar otras operaciones con los datos del formulario
      console.log('Formulario enviado');
    },

    //Steps
    changeStep(index) {
      this.currentStep = index;
    },
    nextPage() {
      // Lógica para pasar a la siguiente página
      // Puedes implementar según tus necesidades
      this.currentStep++;
    },
    prevPage() {
      // Lógica para volver a la página anterior
      // Puedes implementar según tus necesidades
      this.currentStep--;
    },
    complete() {
      // Lógica para la página de completado, si es necesario
    },


    // Método para activar/desactivar una sección del acordeón
    toggleSection(index) {
      this.listHours[index].active = !this.listHours[index].active;
    },

    typeDayTradMixin(day) {
      // Utilizamos un switch para manejar los diferentes días de la semana
      switch (day) {
        case "monday":
          return "Lunes";
        case "tuesday":
          return "Martes";
        case "wednesday":
          return "Miércoles";
        case "thursday":
          return "Jueves";
        case "friday":
          return "Viernes";
        case "saturday":
          return "Sábado";
        case "sunday":
          return "Domingo";
        default:
          return "";
      }
    }
  },
  mounted() {},
};
</script>
<style>
  /* Estilos de los steps */
  .custom-steps {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  
  .custom-steps li {
    flex: 1;
    text-align: center;
    position: relative;
  }
  
  .custom-steps li button {
    border-radius: 50%;
    border: 0.54px solid var(--Global-Gray-20, #B5B5B5);
    background: var(--Global-White, #FFF);
    opacity: 0.7;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    padding: 3px 7px;

  }
  
  .custom-steps li.active button {
    border: 2px solid #B5B5B5;
    opacity: 1;
    background-color: #EFF6FF;
  }
  
  .custom-steps li button span {
    margin-top: 5px;
    font-size: 12px;
  }
  
  .line {
    height: 2px;
    width: 100%;
    background-color: #ccc;
    position: absolute;
    margin-top: 20px;
    z-index: -1;
  }











/* Estilos básicos para el acordeón */
.container-accordion {
  background-color: bisque;
  width: 100%;
  padding: 10px 20px;
}

.accordion-header {
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px 7px 0px 0px;
  border: 1px solid #ced4da;
  background: #e9ecef;
  padding: 10px;
  cursor: pointer;
  background-color: #e9ecef;
  color: black;
}

/* Contenido del acordeon */
.accordion-content {
  display: none;
  border-radius: 0px 0px 7px 7px;
  padding: 15px 30px;
  border: 1px solid #ced4da;
  background-color: white;
}

.accordion-item.active .accordion-content {
  display: block;
}
</style>
