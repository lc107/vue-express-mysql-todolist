<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todolist :msg="title"/>
  </div>
</template>

<script>
import Todolist from './components/Todolist.vue'

export default {
  name: 'app',
  components: {
    Todolist
  },
  data(){
    return{
      title:'TODOLIST'
    }
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
  margin-top: 10px;
}
</style>
