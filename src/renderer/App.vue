<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'my-qq'
}
</script>

<style>
/* CSS */
/* 整个body可以拖动的css */
body {
  -webkit-app-region: drag; 
}
</style>
