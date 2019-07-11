<!-- 好友列表页 --> 

<template>
  <div class="friends">
    <div class="header">
      <!-- <div class="logo">
        <div class="logoLeft"></div>
      </div>-->
    </div>
    <div class="contain">
      <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="消息" name="first">
          <div class="friendTab">消息</div>
        </el-tab-pane>
        <el-tab-pane label="联系人" name="second">
          <contact></contact>
        </el-tab-pane>
        <el-tab-pane label="动态" name="third">
          <div class="friendTab">联系人</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import {ipcRenderer} from 'electron'
import contact from './contact'
const { remote } = require('electron')
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    contact
  },
  mounted () {
    // ipcRenderer.sendSync('synchronous-message', 'logined')
    console.log(remote.getCurrentWindow())
    // remote.getCurrentWindow().resizable = false\
    remote.getCurrentWindow().setResizable(true)
    remote.getCurrentWindow().setSize(277, 700)
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 如果不设置会有默认样式 */
html,
body {
  background: rgba(0, 0, 0, 0);
}
.friends {
  /* -webkit-app-region: drag; */
  /* background: transparent; */
  height: 700px;
  width: 277px;
  border-radius: 5px;
}
.contain{
  width: 257px;
  height: 557px;
  background: #fff;
  padding: 0 10px;
  border-radius: 0px 0px 5px 5px;
}
.header {
  width: 100%;
  height: 136px;
  background: #27c4fd;
  -webkit-app-region: drag;
  border-radius: 5px 5px 0 0;
  /* background: url('../../assets/QQ图片20190710164231.png') no-repeat; */
  background-size: 100% 136px;
}
.logoLeft {
  width: 200px;
  height: 40px;
  background: url("https://sqimg.qq.com/qq_product_operations/im/pcqq/9.0/img/1-login-icon.png");
}
.friendTab {
  width: 300px;
}
</style>