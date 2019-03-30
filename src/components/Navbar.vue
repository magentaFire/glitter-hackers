<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Logo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-nav>
            <!-- <span @click="toggleRegister(true)" >Registro</span> -->
            <b-nav-item @click="toggleRegister(true)">Registro</b-nav-item>
            <b-nav-item @click="toggleRegister(false)">Login</b-nav-item>
            <!-- <span @click="toggleRegister(false)">Login</span> -->

          </b-navbar-nav>

          <b-nav-item-dropdown v-if="isLoggedIn" right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {
        register: true,
        isLoggedIn: false,
        currentUser: false,
      };
    },
    methods: {
      toggleRegister (value) {
        this.$emit('toggleRegister', value)
      }
    },
  }
</script>

