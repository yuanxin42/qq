<!-- 好友列表页--消息页面 --> 

<template>
  <div class="message">
    <ul>
      <li class="messageList" v-for="(item, index) in arr" :key="index">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1798222681,2198720046&fm=26&gp=0.jpg"
          alt
        />
        <div class="nameAnddetail">
          <p class="name">鼬神</p>
          <p class="detail" :title="detail">{{detail}}</p>
        </div>
        <div class="time">00:00</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      detail: '还是不要仅凭外表和印象就判断一个人比较好',
      arr: [1, 1, 1, 1, 1]
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  },
  mounted () {},
  components: {}
}
</script>

<style lang='scss' scoped>
.message {
  .messageList {
    &:hover{
      background: #f6f2fa;
    }
    height: 60px;
    // background: red;
    margin-bottom: 2px;
    img {
      width: 50px;
      height: 50px;
      margin-top: 5px;
      border-radius: 50%;
      font-size: 0;
      float: left;
    }
    .nameAnddetail {
      height: 50px;
      width: 120px;
      margin-top: 5px;
      float: left;
      margin-left: 20px;
      p {
        height: 25px;
        line-height: 25px;
      }
      .name {
        font-size: 14px;
        color: #333;
      }
      .detail {
        font-size: 12px;
        color: #777;
        overflow: hidden; /*超出的部分隐藏起来。*/
        white-space: nowrap; /*不显示的地方用省略号...代替*/
        text-overflow: ellipsis; /* 支持 IE */
      }
    }
    .time {
      width: 50px;
      height: 60px;
      float: left;
      margin-left: 15px;
      font-size: 12px;
      line-height: 60px;
      color: #777;
    }
  }
}
</style>