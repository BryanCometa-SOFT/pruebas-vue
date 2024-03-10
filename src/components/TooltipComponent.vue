<template>
  <div class="container-tooltip" :style="{ width: width }" :class="{ 'dark-mode': darkMode }">
    <span style="min-width: 150px;" :class="['tooltip-css3', positionClass]">{{ text }}</span>
    <img
      style="cursor: pointer;"
      :src=" logo"
      :style="{ width: width }"
    />
  </div>
</template>

<script>
export default {
  props: {
    //Tipo de tooltip clara o oscura
    darkMode: {
      default: false,
      type: Boolean
    },
    //Url del logo
    logo: {
      default: null,
      required: true,
      type: String
    },
    //Posición del tooltip
    position: {
      default: null,
      validator: function(value) {
        return ['top', 'bottom', 'left', 'right'].includes(value);
      }
    },
    //Tamaño de la imagen
    width:{
      default: "25px",
      type: String
    },
    //Texto del tooltip
    text: {
      default: "Sin información",
      type: String
    }
  },
  computed: {
    positionClass() {
      return `position-${this.position}`;
    }
  }
};
</script>

<style>
.tooltip-css3 {
  background-color: red;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  font-weight: 600;
  line-height: 18px;
  color: black;
  display: none;
  padding: 10px 15px;
  border-radius: 8px;
  position: absolute;
  z-index: 999;
}

.tooltip-css3:before {
  content: "";
  position: absolute;
  border: 8px solid transparent;
}

.tooltip-css3.position-top {
  bottom: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-css3.position-top:before {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  border-top-color: #322C50;
  bottom: -16px; /* Ajusta la distancia de la flecha hacia arriba */
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-css3.position-bottom {
  top: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-css3.position-bottom:before {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  border-bottom-color: #322C50;
  top: -16px; /* Ajusta la distancia de la flecha hacia abajo */
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-css3.position-left {
  top: 50%;
  right: calc(100% + 20px);
  transform: translateY(-50%);
}

.tooltip-css3.position-left:before {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  border-left-color: #322C50;
  top: 50%;
  right: -16px; /* Ajusta la distancia de la flecha hacia la izquierda */
  transform: translateY(-50%);
}

.tooltip-css3.position-right {
  top: 50%;
  left: calc(100% + 20px);
  transform: translateY(-50%);
}

.tooltip-css3.position-right:before {
  content: "";
  position: absolute;
  border: 8px solid transparent;
  border-right-color: #322C50;
  top: 50%;
  left: -16px; /* Ajusta la distancia de la flecha hacia la derecha */
  transform: translateY(-50%);
}



.container-tooltip {
  cursor: pointer;
  position: relative;
}

.container-tooltip:hover .tooltip-css3 {
  display: block;
}

.dark-mode {
  background-color: #1f1f1f !important; /* Cambia el color de fondo en modo oscuro */
  color: #ffffff  !important; /* Cambia el color del texto en modo oscuro */
}
</style>
