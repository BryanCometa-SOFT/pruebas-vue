<template>
  <div>

    <div class="container-tooltip">
      Tooltip CSS 3 - Coloca el mouse encima este texto
      <span class="tooltip-css3">Codex &amp; Tips</span>
    </div>


    <div class="d-flex justify-content-center">
      <span class="loader"></span>
    </div>

    <span class="loader"></span>

    <span class="loader"></span>

    <span class="loader"></span>

    <span class="loader"></span>

    <div class="row">
      <div class="col-3">
        <div class="container-tooltip">
          Tooltip CSS 3 - Coloca el mouse encima este texto
          <span class="tooltip-css3">Codex &amp; Tips</span>
        </div>
      </div>
      <div class="col-3">
        <div class="container-tooltip">
          Tooltip CSS 3 - Coloca el mouse encima este texto
          <span class="tooltip-css3">Codex &amp; Tips</span>
        </div>
      </div>

      <div class="col-3">
        <div class="container-tooltip">
          Tooltip CSS 3 - Coloca el mouse encima este texto
          <span class="tooltip-css3">Codex &amp; Tips</span>
        </div>
      </div>

      <div class="col-3">
        <div class="container-tooltip">
          Tooltip CSS 3 - Coloca el mouse encima este texto
          <span class="tooltip-css3">Codex &amp; Tips</span>
        </div>
      </div>


    </div>


    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
      Tooltip on top
    </button>
    




    <div  class="container" style="margin-bottom: 100px;">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for=""></label>
            <select class="form-control" name="" id="">
              <option>Hola mundo </option>
              <option>Hola mundo2 </option>
              <option>Hola mundo3 </option>

            </select>
          </div>
        </div>
      </div>

    </div>










    <button @click="changeViewCalendar('dayGridMonth')">Mes</button>
    <button @click="changeViewCalendar('dayGridWeek')">Semana</button>
    <button @click="changeViewCalendar('timeGridDay')">Día</button>

    <button @click="prueba()">hola mundo</button>
    <button @click="goBack()">back</button>
    <button @click="goNext()">Next</button>

    isDayView {{ isDayView }}

    <select v-model="selectedYear">
      <!-- Opciones para seleccionar el año -->
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <!-- Agrega más años según sea necesario -->
    </select>

    <select v-model="selectedMonth">
      <!-- Opciones para seleccionar el mes -->
      <option value="01">Enero</option>
      <option value="02">Febrero</option>
      <option value="03">Marzo</option>
      <option value="04">Abril</option>
      <option value="05">Mayo</option>
      <option value="06">Junio</option>
      <!-- Agrega más meses según sea necesario -->
    </select>

    <button @click="updateCalendar()">validar calendar</button>

    <FullCalendar ref="calendar" :options="calendarOptions" @datesSet="handleDatesSet($event)">
      <!-- Ranura para personalizar la información de los eventos -->
      <template #eventContent="{ event, view }">
        <div class="custom-event" :style="{backgroundColor: event.color}">
          <strong>{{ event.title }}</strong>
        </div>
      </template>
    </FullCalendar>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import timeGridPlugin from '@fullcalendar/timegrid';

import moment from 'moment';

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      buttonActiveCalendar: "dayGridMonth",

      selectedYear: "2023", // Año seleccionado por defecto
      selectedMonth: "01",  // Mes seleccionado por defecto
      isDayView: false, // Variable para rastrear si se selecciona la vista de día

      calendarOptions: {
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,timeGridDay', // Agrega los botones de visualización aquí
        },
        plugins: [dayGridPlugin, interactionPlugin,timeGridPlugin ],
        initialView:  "dayGridMonth", // Puedes cambiar la vista inicial si lo deseas
        locale: esLocale, // Establece la localización en español
        initialDate: '2023-10-01',
        validRange: {
          start: '2023-10-01', // Rango de fecha inicial
          end: '2023-10-31'    // Rango de fecha final
        },
        events: [
          // Aquí puedes agregar tus eventos

          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-01 07:30",
            end: "2023-10-01 07:30",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            type: "pendiente",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-06",
            end: "2023-10-06",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-11",
            end: "2023-10-11",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-11",
            end: "2023-10-11",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-11",
            end: "2023-10-11",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-11",
            end: "2023-10-11",
            color: "#cc3300" // Color rojo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-11",
            end: "2023-10-11",
            color: "#aad440" // Color verde
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-08 07:30",
            end: "2023-10-08 07:30",
            color: "#ffea29" // Color amarillo
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-08 14:30",
            end: "2023-10-08 14:30",
            color: "#f0a32f" // Color naranja
          },
          {
            title: "$ 50.000.000", 
            start: "2023-10-20",
            end: "2023-10-20",
            color: "#cc3300" // Color rojo
          },
        ],
        eventMaxStack: 3,
      }
    };
  },
  methods: {
    async updateCalendar() {
      //Nota: sucede algo con el componente de terceros de asincronia por algun motivo de ninguna se puedo sino usando dos veces el llamado
      await this.setDateCalendarValid();
      await this.setDateCalendarValid();
    },

    setDateCalendarValid() {
      return new Promise(async (resolve) => {
        // Destruye y vuelve a renderizar el calendario y espera la respuesta
        await this.$refs.calendar.getApi().destroy();
        await this.$refs.calendar.getApi().render();

        // Actualiza el rango válido en función de las selecciones de año y mes
        const year = this.selectedYear;
        const month = this.selectedMonth;
        const lastDay = new Date(year, month, 0).getDate(); // Obtiene el último día del mes
        debugger
        const start = `${year}-${month}-01`;
        const end = `${year}-${month}-${lastDay + 1}`;

        // Mueve la vista del calendario al nuevo mes seleccionado y espera la respuesta
        this.$refs.calendar.getApi().gotoDate(start);

        // Actualiza el rango válido después de haber movido la vista
        this.calendarOptions.validRange.start = start;
        this.calendarOptions.validRange.end = end;

        resolve(); // Resuelve la promesa cuando todo esté listo
      });
    },


    changeViewCalendar(vista) {
      // Cambiar la vista del calendario según el botón clicado
      this.$refs.calendar.getApi().changeView(vista);

      this.buttonActiveCalendar = vista;

      //Si es dia o semana
      if(vista == "timeGridDay" || vista == "dayGridWeek"){
        
        //Endpoint 1
      }
      else{ // si es mes
        //Endpoint 2
      }
    },

    handleDatesSet(info) {
      console.log(info)
      // El método se llama cuando cambias la vista o el rango de fechas
      // Puedes verificar la vista actual y actualizar la variable isDayView en consecuencia

    },

    prueba(){
      this.$refs.calendar.getApi().gotoDate('2023-12-09');
      //this.calendarOptions.initialDate = '2020-09-01'
    },  
    changeView(viewName) {
      this.$refs.calendar.getApi().changeView(viewName);
    },
    goBack() {
      console.log(this.calendarOptions.initialDate);
      this.$refs.calendar.getApi().prev();

      const calendarApi = this.$refs.calendar.getApi();
      const currentView = calendarApi.view.type;

      if (currentView === 'timeGridDay') {
        const currentDate = calendarApi.getDate();
        const formattedDate = moment(currentDate).format('YYYY-MM-DD');

        console.log('Fecha actual:', formattedDate);
      } else {
        console.log('No estás en la vista timeGridDay.');
      }
    },
    goNext() {
      this.$refs.calendar.getApi().next();
      
      const calendarApi = this.$refs.calendar.getApi();
      const currentView = calendarApi.view.type;

      if (currentView === 'timeGridDay') {
        const currentDate = calendarApi.getDate();
        const formattedDate = moment(currentDate).format('YYYY-MM-DD');

        console.log('Fecha actual:', formattedDate);
      } else {
        console.log('No estás en la vista timeGridDay.');
      }
    },
  },
  mounted() {
    this.customizeHeaderToolbar();
  },
  
};
</script>
<style>
/* Estilos para el encabezado personalizado */
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3498db;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-decoration: none !important;
  /* Otras propiedades de estilo, si es necesario */
}

/* Cambia el color de fondo de los eventos */
.fc-event {
  background-color: transparent;
  border: none;
  text-decoration: none !important;
}

/* Cambia el color de fondo del día actual en la vista de mes */
.fc-dayGridMonth .fc-day-today {
  background-color: #d3d3d3;
  text-decoration: none !important;
}

.custom-event{
  color: black;
  padding: 10px 5px;
  margin-bottom: 5px;
  text-decoration: none !important;

}
.custom-event {
  overflow: hidden; /* Controla el desbordamiento del contenido del evento */
  white-space: nowrap; /* Evita que el contenido se rompa en varias líneas */
  text-overflow: ellipsis; /* Agrega puntos suspensivos si el contenido es demasiado largo */
  padding: 4px; /* Ajusta el relleno según tus preferencias */
  margin: 2px; /* Ajusta el margen según tus preferencias */
  text-decoration: none !important;
}

/* Personaliza la altura de las celdas de día en la vista de mes */
.fc-dayGridMonth-view .fc-day {
  height: 200px;
  max-height: 200px;
  border: 1px solid #b4b6c6;
  text-decoration: none !important;
}

/* Usando una clase específica para el encabezado de los días de la semana */
.fc-dayGridMonth-view .fc-col-header-cell {
  padding: 10px;
  height: 30px;
  color: black !important;
  background-color: #e1e3ed;
  border: 1px solid #b4b6c6;
  font-weight: bold;
  text-decoration: none !important;
  /* Otras propiedades de estilo, si es necesario */
}

/* Estilo personalizado para el contenedor del encabezado (que incluye headerToolbar) */
.fc-toolbar.fc-header-toolbar {
  margin-bottom: 0px;
  background: linear-gradient(to right, #ED592A,#373181); /* Cambia el color de fondo según tus preferencias */
  border-bottom: 1px solid #ccc; /* Agrega un borde inferior si lo deseas */
  padding: 10px; /* Ajusta el relleno según sea necesario */
  color: white; /* Color del texto dentro de headerToolbar */
  font-weight: bold; /* Estilo de fuente, si es necesario */
  text-decoration: none !important;
  /* Otras propiedades de estilo, si es necesario */
}

/* Quitar margin-button al header toolbar */
.fc-header-toolbar.fc-toolbar.fc-toolbar-ltr{
  margin-bottom: 0px;
  text-decoration: none !important;
}

/* Estilo personalizado para los botones de mes, semana y día en headerToolbar */
.fc-toolbar.fc-header-toolbar .fc-dayGridMonth-button {
  background-color: #d3d3d3; /* Cambia el color de fondo según tus preferencias */
  color: black; /* Cambia el color del texto según tus preferencias */
  border: none; /* Elimina el borde si lo deseas */
  padding: 5px 10px; /* Ajusta el relleno según*/
  text-decoration: none !important;
}

.fc .fc-view-harness .fc-event, .fc .fc-view-harness .fc-event-main {
  background: transparent;
  border: 1px solid transparent;
  color: black;
  text-decoration: none !important;
}

a{
  color: black;
  text-decoration: none !important;
}


/* Estilo personalizado para los botones de mes, semana y día en headerToolbar */
.fc-toolbar.fc-header-toolbar .fc-button {
  background-color: #ffffff; /* Cambia el color de fondo según tus preferencias */
  color: black; /* Cambia el color del texto según tus preferencias */
  border: none; /* Elimina el borde si lo deseas */
  padding: 5px 10px; /* Ajusta el relleno según*/
  text-decoration: none !important;
}

/* Estilo personalizado para los botones de mes, semana y día en headerToolbar */
.fc-toolbar.fc-header-toolbar .fc-button:hover {
  background-color: #d3d3d3; /* Cambia el color de fondo según tus preferencias */
  color: black; /* Cambia el color del texto según tus preferencias */
  border: none; /* Elimina el borde si lo deseas */
  padding: 5px 10px; /* Ajusta el relleno según*/
  text-decoration: none !important;
}

/* Estilo personalizado para los botones de mes, semana y día en headerToolbar */
.fc-toolbar.fc-header-toolbar .fc-button-active {
  background-color: #d3d3d3; /* Cambia el color de fondo según tus preferencias */
  color: black; /* Cambia el color del texto según tus preferencias */
  border: none; /* Elimina el borde si lo deseas */
  padding: 5px 10px; /* Ajusta el relleno según*/
  text-decoration: none !important;
}



select {
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  border: 1px solid #ccc !important;
  background-color: #fff !important;
  background-image: url('/src/assets/select-img-down.png') !important;
  background-repeat: no-repeat !important;
  background-position: right 10px center; /* Ajusta el valor de la separación a 20px */
  background-size: 16px !important;
}

/* Estilo para la opción seleccionada */
select:focus {
  outline: none !important;
  border-color: #007bff !important;
  padding-right: 30px; /* Ajusta el valor del padding según tus necesidades */
}


.loader {
  transform: translateZ(1px);
  width: 48px; /* Adjust the width and height as needed */
  height: 48px;
}

.loader:after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  background: url('@/assets/Logo_Aquila.png') center center no-repeat;
  background-size: cover;
  animation: coin-flip 20s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes coin-flip {
  0%, 100% {
    animation-timing-function: cubic-bezier(2, 0, 1,2);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
   
/* Tooltip CSS3 */
.tooltip-css3:before {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 20px solid #777777;
  bottom: -15px;
  content: "";
  height: 0;
  left: 50%;
  margin-left: -8px; /* Ajusta el valor para centrar el triángulo */
  position: absolute;
  transform: skew(-45deg);
  width: 0;
}

.tooltip-css3 {
  background-color: #777777;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  display: none;
  padding: 20px 30px;
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%); /* Centrar el tooltip horizontalmente */
  z-index: 999; /* Asegurar que el tooltip esté encima de otros elementos */
}

/* Contenedor del Tooltip */
.container-tooltip {
  cursor: pointer;
  position: relative;
}

/* Mostrando los tooltips */
.container-tooltip:hover .tooltip-css3 {
  display: block;
}
</style>
