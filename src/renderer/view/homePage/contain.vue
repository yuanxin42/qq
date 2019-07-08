<template>
  <div class="contain">
    <div class="ui-form ui-border-t">
      <form action class="login">
        <div class="ui-form-item ui-border-b">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" />
          <!-- <a href="#" class="ui-icon-close"></a> -->
        </div>
        <div class="ui-form-item ui-border-b">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
          <input type="text" placeholder="请输入密码" />
          <!-- <a href="#" class="ui-icon-close"></a> -->
        </div>
        <div class="ui-btn-wrap">
          <button class="ui-btn-lg ui-btn-primary">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {}
}
</script>

<style lang='scss'>
.contain {
  width: 100%;
  height: 160px;
  overflow: hidden;
  .ui-border-t:before{
    border-top: 0px;
  }
  .ui-form{
    width: 300px;
    margin: 0 auto;
  }
  .login{
    width: 100%;
    input{
      width: 200px;
      height: 40px;
      cursor: pointer;
    }
    .ui-btn-lg{
      height: 35px;
    }
  }
}
</style>