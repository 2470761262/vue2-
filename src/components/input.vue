<template>
   <div>
       <input type="text" v-model="xioxi">
   </div>
</template>

<script>
    export default {
        props:{
            value:String
        },
        data(){
            return{
                xioxi:"677"
            }
        },
        watch:{
            xioxi(value){
                console.log("???");
                this.$emit("input",value);
            }
        },
    }
</script>

<style lang="less" scoped>

</style>