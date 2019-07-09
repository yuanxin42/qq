<!-- 好友列表页 --> 

<template>
  <div class="friends">
    111111
  </div>
</template>
<script>
// import {ipcRenderer} from 'electron'
const { remote } = require('electron')
export default {
  mounted () {
    // ipcRenderer.sendSync('synchronous-message', 'logined')
    remote.getCurrentWindow().setSize(1000, 1000)
  },
  components: {
  },
  methods: {}
}
</script>

<style>


*{
  margin: 0;
  padding: 0;
}
.homePage{
  width: 428px;
  height: 327px;
  background: #fff;
}
</style>