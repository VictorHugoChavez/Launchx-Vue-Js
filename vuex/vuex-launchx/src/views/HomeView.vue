<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="contador">
      {{$store.state.contador}}
    </div>
    <div class="botones">
      <button @click="$store.dispatch('bajarcontador')">-</button>
      <button @click="$store.dispatch('subircontador')">+</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
 // data(){
   // return{
     // counter:0
    //} 
 // },
 // methods: {
   // /  bajarContador(){
       //   this.counter--
      //},
      //subircontador(){
       // this.counter++
      //}
  //},
}
</script>

<style>
  .contador{
    font-size: 80px;
  }
  div{
    margin-bottom: 10px
  }
  .botones button{
    font-size:50px;
    width: 100px;
    margin:0 10px
  }
</style>