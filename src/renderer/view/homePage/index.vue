<!-- 登录页首页 --> 

<template>
  <div class="homePage">
    <myheader></myheader>
    <mycontain></mycontain>
  </div>
</template>
<script>
import myheader from './header'
import mycontain from './contain'
export default {
  components: {
    myheader,
    mycontain
  },
  methods: {}
}
</script>

<style scoped>
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