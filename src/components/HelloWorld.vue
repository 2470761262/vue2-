<template>
  <!-- <div class="hello">
     
  </div> -->
  <absrtactCom>
   <button @click="good">good
       <slot></slot>
   </button>
  </absrtactCom>
</template>

<script>
import absrtactCom from './abstractCom';
export default {
  name: 'HelloWorld',
  components:{
      absrtactCom
  },
  props: {
    msg: String
  },
  created() {
        this.$slots.default = <div>谢谢你</div>
  },
//   mounted() {

    
//   },
  methods: {
      good(){
          console.log("谢谢你");
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
