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
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
/* 整个body可以拖动的css */
/* #app {
  -webkit-app-region: drag; 
} */
</style>
