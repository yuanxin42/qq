<!-- 好友列表页 --> 

<template>
  <div class="friends">
    <div class="header">
      <div class="logo">
        <div class="logoLeft"></div>
        <!-- <img style="float:right;" src="https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/1-login-icon.png" alt=""> -->
      </div>
    </div>
    <input type="text">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="消息" name="first">消息</el-tab-pane>
      <el-tab-pane label="联系人" name="second">联系人</el-tab-pane>
      <el-tab-pane label="动态" name="third">动态</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// import {ipcRenderer} from 'electron'
const { remote } = require('electron')
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  mounted () {
    // ipcRenderer.sendSync('synchronous-message', 'logined')
    console.log(remote.getCurrentWindow())
    // remote.getCurrentWindow().resizable = false\
    remote.getCurrentWindow().setResizable(true)
    remote.getCurrentWindow().setSize(277, 700)
  },
  components: {},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.friends {
  /* -webkit-app-region: drag; */
}
.header {
  width: 100%;
  height: 136px;
  background: #27c4fd;
  -webkit-app-region: drag;
  /* background: url('../../assets/QQ图片20190710164231.png') no-repeat; */
  background-size: 100% 136px;
}
.logoLeft {
  width: 200px;
  height: 40px;
  background: url("https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/1-login-icon.png");
}
</style>