<template>
  <div id="app">
    <nav>
      <router-link to="/" class="mr-5">Calendario</router-link>
      <router-link to="/acordation" class="mr-5">Acordeon</router-link>
      <router-link to="/grafic" class="mr-5">Graficos</router-link>
      <router-link to="/animations" class="mr-5">Animaciones</router-link>
      <router-link to="/primevue" class="mr-5">Primevue</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* App.vue o tu archivo de estilos */
.slideInDown {
  animation-duration: 1s; /* Duración de la animación */
  animation-delay: 0.5s;  /* Retardo antes de que comience la animación */
}
</style>
