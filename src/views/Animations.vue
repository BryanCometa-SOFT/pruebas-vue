<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <img class="animated-image" src="@/assets/profile.png" alt="" srcset="">
                <img class="animated-image2" src="@/assets/profile.png" alt="" srcset="">
                <img class="animated-image3" src="@/assets/profile.png" alt="" srcset="">
                <img src="@/assets/profile.png" alt="" srcset="">
                <img src="@/assets/profile.png" alt="" srcset="">
            </div>
        </div>

        <div class="mt-5 animate__animated animate__backInDown">
          <img src="@/assets/profile.png" alt="" srcset="">
        </div>

        <div class="d-flex justify-content-between mt-5">
          <div class="d-flex flex-column">
            <img class="animate__animated  animate__backInDown" src="@/assets/profile.png" alt="" srcset="">
            <span class="animate__animated animate__backInDown">Animación unica</span>
          </div>
          
         
          <div class="d-flex flex-column">
            <img class="animate__animated animate__infinite animate__backInDown" src="@/assets/profile.png" alt="" srcset="">
            <span class="animate__animated animate__infinite animate__backInDown">Animación infinita</span>
          </div>
          

         
        </div>
        
    </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        chart: null,
      };
    },
    mounted() {

    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos si es necesario */
  .container-candle{
    width: 500px;
  }


  .animated-image {
    width: 100px; /* Ajusta el tamaño de tu imagen según sea necesario */
    height: 100px;
    animation: rotateAndMoveUp 0.5s infinite alternate;
  }
  
  @keyframes rotateAndMoveUp {
    0% {
      transform: translateY(0) ;
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
    0%, 100% {
      animation-timing-function: cubic-bezier(2, 0, 1,2);
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
      transform: translate(0px, 0px)  scale(1);
    }

    100% {
      transform: translate(0px, 10px)  scale(1.4);
    }
  }

  
  </style>
  