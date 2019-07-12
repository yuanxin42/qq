<template>
  <div class="myHeader">
    <video
      src="https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/login-head.mp4"
      class="login-video"
      autoplay
      loop
      poster="https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/header-top.png"
    ></video>
    <div class="headerBac">
      <div class="iconLogo">
        <!-- 关闭 -->
        <div class="logoLeft minimize" title="关闭" @click="toClose()"></div>
        <!-- 最小化 -->
        <div class="logoLeft closeTheWindow" title="最小化" @click="toMinimize()"></div>
      </div>
    </div>
  </div>
</template>
<script>
const { remote } = require('electron')
export default {
  components: {},
  methods: {
    toMinimize () {
      remote.getCurrentWindow().minimize()
    },
    toClose () {
      remote.getCurrentWindow().destroy()
    }
  }
}
</script>

<style lang='scss' scoped>
.myHeader {
  position: relative;
  height: 150px;
  overflow: hidden;
  -webkit-app-region: drag;
  .menu {
    font-size: 100px;
  }
  .headerBac {
    position: absolute;
    top: 0;
    width: 100%;
    height: 150px;
    background: url("https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/1-login-icon.png")
    no-repeat;
    .iconLogo {
      height: 20px;
      overflow: hidden;
      .logoLeft {
        float: right;
        width: 25px;
        height: 20px;
        cursor: pointer;
        -webkit-app-region: no-drag;
        margin-right: 7px;
      }
      .closeTheWindow {
        
      }
      .minimize {
      }
    }
    .headerDetail {
      width: 100%;
      height: 88px;
    }
  }
}
</style>