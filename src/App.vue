<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
  overflow: hidden;
}
/* // 滚动条 */
::-webkit-scrollbar {
    width: 5px;
    height: 8px;
}
::-webkit-scrollbar-thumb {
    border-radius: 1em;
    background-color: #eaeaea;
}
::-webkit-scrollbar-track {
    border-radius: 1em;
    background-color: transparent;
}
</style>
