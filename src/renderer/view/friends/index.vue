<!-- 好友列表页 --> 

<template>
  <div class="friends">
    <div class="friendsHeader">
      <div class="iconLogo">
        <!-- 关闭 -->
        <div class="logoLeft minimize" @click="toClose()"></div> 
        <!-- 最小化 -->
        <div class="logoLeft closeTheWindow" @click="toMinimize()"></div>
        
      </div>
      <div class="headerDetail">
        <!-- 头像那块，现在啥都没有，放了一个图片 -->
      </div>
    </div>
    <div class="contain">
      <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="消息" name="first">
          <message></message>
        </el-tab-pane>
        <el-tab-pane label="联系人" name="second">
          <contact></contact>
        </el-tab-pane>
        <el-tab-pane label="动态" name="third">
          <dynamic></dynamic>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import {ipcRenderer} from 'electron'
import contact from './contact'
import message from './message'
import dynamic from './dynamic'
const { remote } = require('electron')
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    contact,
    message,
    dynamic
  },
  created () {
    remote.getCurrentWindow().setSize(277, 700)
    remote.getCurrentWindow().setBounds({
      x: remote.screen.getPrimaryDisplay().workAreaSize.width - 297,
      y: 0,
      width: 277,
      height: 700
    })
  },
  mounted () {},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
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
/* 如果不设置会有默认样式 */
html,
body,
#app {
  background: rgba(0, 0, 0, 0) !important;
}
.friends {
  /* -webkit-app-region: drag; */
  /* background: transparent; */
  height: 700px;
  width: 277px;
  border-radius: 5px;
  .iconLogo {
    height: 20px;
    overflow: hidden;
    .logoLeft {
      float: right;
      width: 20px;
      height: 20px;
      cursor: pointer;
      -webkit-app-region:no-drag;
    }
    .closeTheWindow {
      margin-right: 20px;
    }
    .minimize {
    }
  }

  .contain {
    width: 257px;
    height: 564px;
    background: #fff;
    padding: 0 10px;
    border-radius: 0px 0px 5px 5px;
  }
  .friendsHeader {
    width: 100%;
    height: 136px;
    background: url("../../assets/QQ图片20190711160842.png");
    -webkit-app-region: drag;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    background-size: 100% 136px;
    .headerDetail {
      width: 100%;
      height: 88px;
    }
  }
}
</style>