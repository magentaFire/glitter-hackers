<template>
  <div id="app">
    <Navbar @toggleRegister="toggleRegister"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      Register: true,
      profile: false,
    };
  },
  methods: {
    toggleRegister(value) {
      this.Register = value;
    },
  },

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
  /* margin-top: 60px; */
}
</style>
