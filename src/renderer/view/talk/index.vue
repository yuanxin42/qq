<!-- 登录页首页 --> 

<template>
  <div class="talk">
    <div class="header">
      <div class="headMenu">
        <img src="@/assets/QQ图片20190716162749.png" alt />
        <div class="iconLogo">
          <!-- 关闭 -->
          <div class="logoLeft minimize" title="关闭" @click="toClose()"></div>
          <!-- 最小化 -->
          <div class="logoLeft closeTheWindow" title="最小化" @click="toMinimize()"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from '../homePage/header'
import mycontain from '../homePage/contain'
const { remote } = require('electron')
export default {
  components: {
    myheader,
    mycontain
  },
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
.header {
  height: 40px;
  background: #22ccfe;
  -webkit-app-region: drag;
  position: relative;
  .headMenu {
    margin-top: 4px;
    margin-right: 4px;
    float: right;
  }
  .iconLogo {
    height: 30px;
    overflow: hidden;
    .logoLeft {
      float: right;
      width: 30px;
      height: 30px;
      cursor: pointer;
      -webkit-app-region: no-drag;
      margin-right: 7px;
      position: absolute;
      top: 3px;
    }
    .closeTheWindow {
      right: 60px;
    }
    .minimize {
      right: 0;
    }
  }
}
</style>