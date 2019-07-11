<!-- 好友列表页--联系人页面 --> 

<template>
  <div class="contact">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        label: '我的好友',
        children: [{
          label: '二级 1-1'
        }]
      }, {
        label: '朋友',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '家人',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      },
      {
        label: '同学',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  },
  mounted () {
  },
  components: {}
}
</script>

<style scoped>
  .contact{
    height: 510px;
    /* background: #fff; */
  }
</style>