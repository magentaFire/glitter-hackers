<template>
  <div>
      <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2">
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
  </div>
</template>

<script>
import Register from './Register';
import Login from './Login';

export default {
  name: 'Home',
  components: { Register, Login },
  data() {
    return {
      Register: true,
      profile: false,
    };
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 100%;
}
</style>
