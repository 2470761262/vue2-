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
</style>
