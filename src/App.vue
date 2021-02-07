<template>
  <div id="app">
    <!-- <absrtactCom> -->
      <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- </absrtactCom> -->
    <wowo></wowo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import absrtactCom from './components/abstractCom.vue';
import wowo from './components/wowo'
export default {
  name: 'App',
  components: {
    HelloWorld,
    wowo
   // absrtactCom
  },
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
