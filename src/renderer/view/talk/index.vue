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
      </div>鼬
    </div>

    <el-row>
      <el-col :span="18">
        <div class="chartLine">
          <div class="dialogue"></div>
          <div class="sendBox">
            <!-- <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"> -->
            <div class="sendFoot">
              <el-button class="sendBtn">关闭</el-button>
              <el-button class="sendBtn" type="primary">发送</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="headPortrait">
          <img src="@/assets/QQ图片20190716185941.png" alt />
        </div>
      </el-col>
    </el-row>
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
  data () {
    return {
      textarea1: ''
    }
  },
  methods: {
    toMinimize () {
      remote.getCurrentWindow().minimize()
    },
    toClose () {
      remote.getCurrentWindow().close()
    }
  }
}
</script>

<style lang='scss' scoped>
.talk {
  background: #ffffff;
  .header {
    width: 100%;
    height: 40px;
    overflow: hidden;
    background: #22ccfe;
    -webkit-app-region: drag;
    line-height: 40px;
    color: #fff;
    position: relative;
    text-align: center;
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
  .headPortrait {
    height: 559px;
    border-left: 1px solid #ddd;
    text-align: center;
    img {
      // margin: 0 auto;
    }
  }
  .chartLine {
    height: 559px;
    .dialogue {
      height: 400px;
      border-bottom: 1px solid #ddd;
    }
    .sendBox {
      height: 159px;
      position: relative;
      .sendFoot{
        position: absolute;
        bottom: 10px;
        right: 10px;
        .sendBtn{
          height: 10px;
          line-height: 1px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>