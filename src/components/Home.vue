<template>
  <div>
      <b-jumbotron header="TE APOYAMOS CON TU PLAN DE CARRERA">
        <p>Empieza ahora!</p>
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
