<template>
  <div v-if="!profile">

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
      profile: false
    }
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
