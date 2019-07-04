<template>
  <div class="myHeader">
    <video
      src="https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/login-head.mp4"
      class="login-video"
      autoplay
      loop
      poster="https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/header-top.png"
    ></video>
    <div class="headerBac"></div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {}
}
</script>

<style lang='scss'>
  .myHeader{
    position: relative;
    .menu{
      font-size: 100px;
    }
    .headerBac{
      position: absolute;
      top: 0;
      width: 100%;
      height: 150px;
      background: url("https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/1-login-icon.png") no-repeat;
    }
  }
</style>