<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import VuexTest from './components/VuexExample';

export default {
  name: 'App',
  components: { VuexTest },
};
</script>

<style>
#app {
  width:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
