<template>
  <div id="app">
    <Navbar @toggleRegister="toggleRegister"/>
    <router-view/>
    <div>
      <b-jumbotron header="" lead="Bootstrap 4 Components for Vue.js 2">
        <p>For more information visit website</p>
        <Register v-if="Register"/>
        <Login v-if="!Register"/>
      </b-jumbotron>
    </div>
    <VuexTest/>
  </div>
</template>

<script>
import VuexTest from './components/VuexExample';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';


export default {
  name: 'App',
  components: { Navbar, Register, Login, VuexTest },
  data() {
    return {
      Register: true,
    }
  },
  methods: {
    toggleRegister(value){
      this.Register=value
    },
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
