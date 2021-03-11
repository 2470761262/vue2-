<template>
   <div>
       <div>wwwwwww</div>
       <input type="text" :value="value" @input="www">
       <br>
       <slot></slot>
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
        methods: {
            www(value){
                console.log(this.$attrs);
                console.log(value,"value");
                this.$emit("input",value.target.value);
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