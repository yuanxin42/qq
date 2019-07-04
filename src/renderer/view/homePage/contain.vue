<template>
  <div class="contain">
    <div class="ui-form ui-border-t">
      <form action class="login">
        <div class="ui-form-item ui-border-b">
          <label>用户名</label>
          <input type="text" placeholder="18位身份证号码" />
          <!-- <a href="#" class="ui-icon-close"></a> -->
        </div>
        <div class="ui-form-item ui-border-b">
          <label>密码</label>
          <input type="text" placeholder="18位身份证号码" />
          <!-- <a href="#" class="ui-icon-close"></a> -->
        </div>
        <div class="ui-btn-wrap">
          <button class="ui-btn-lg ui-btn-primary">确定</button>
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
  .ui-form{
    width: 200px;
    margin: 0 auto;
  }
  .login{
    width: 100%;
    input{
      width: 100px;
    }
  }
}
</style>