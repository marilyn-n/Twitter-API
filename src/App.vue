<template>
  <div id="app">
    <ToolBarComponent></ToolBarComponent>
    <router-view/>
  </div>
</template>

<script>
import ToolBarComponent from '@/components/ToolBarComponent';

export default {
  components: {
    ToolBarComponent,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
