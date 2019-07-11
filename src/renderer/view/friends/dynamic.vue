<!-- 好友列表页--联系人页面 --> 

<template>
  <div class="动态页">
    <div class="ui-feeds">
      <ul>
        <li>
          <img src="@/assets/QQ图片20190711155734.png" alt />
        </li>
        <li>
          <img src="@/assets/QQ图片20190711160050.png" alt />
        </li>
      </ul>
      <ul>
        <li>
          <img src="@/assets/QQ图片20190711160148.png" alt />
        </li>
        <li>
          <img src="@/assets/QQ图片20190711160219.png" alt />
        </li>
      </ul>
            <ul>
        <li>
          <img src="@/assets/QQ图片20190711160247.png" alt />
        </li>
        <li>
          <!-- <img src="@/assets/QQ图片20190711155734.png" alt /> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {},
  mounted () {},
  components: {}
}
</script>

<style lang='scss' scoped>
  .ui-feeds{
    ul{
      li{
        img{
          // width: 100%;
          height: 100%;
        }
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
</style>