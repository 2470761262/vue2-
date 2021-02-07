<template>
    <div>
        <div>{{qo}}</div>
        <div>{{gogo}}</div>
    </div>
</template>

<script>
    export default {
        props:["gogo"],
        data(){
            return {
                qo:"sgsg"
            }
        },
        created() {
            console.log(this);
        },
    }
</script>

<style lang="less" scoped>

</style>