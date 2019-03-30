<template>
  <div>
    <h1>{{ getWholeState.key1 }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapGetters([
      'getWholeState',
    ]),
  },
  methods: {
    ...mapActions([
      'dspUpdateKey1',
    ]),
  },
  mounted() {
    console.log(this.getWholeState.key1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
