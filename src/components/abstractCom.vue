
<script>
export default {
  // abstract: true,
  render () {
    let click = this.$slots.default[0].data.on.click;

    this.$slots.default[0].data.on.click = function () {
      console.log("嘻嘻");
      click();
    }
    //   return this.$slots.default;
    return this.$slots.default[0]
  },
}
</script>

<style  scoped>
</style>