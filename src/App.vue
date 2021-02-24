<template>
  <p class="title">this is app2</p>
</template>
<script>
import img from "./assets/images/265565857-c6ae13fe6e83170f_articlex.png"
export default {
  name:'App',
  created() {
    console.log(img)
  }
}
</script>
<style lang="scss" scoped>
  .title{
    font-size: 24px;
    color: red;
  }
</style>