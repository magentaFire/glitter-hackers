<template>
  <div id="app">
    <router-view/>
    <!-- This is only example: -->
    <b-alert show>Default Alert</b-alert>
    <Register/>
    
    <VuexTest/>
  </div>
</template>

<script>
import VuexTest from './components/VuexExample';
import Register from './components/Register';
export default {
  name: 'App',
  components:{ Register, VuexTest },
  data :{

  },
  created:{
    
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
  margin-top: 60px;
}
</style>
