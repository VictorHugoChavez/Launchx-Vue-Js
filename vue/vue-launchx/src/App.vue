<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Bienvenido a Vue exprorers"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default { // QUE COSAS VAMOS A EXPORTAR
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
