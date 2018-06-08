<template>
  <div class="menu">
    <v-toolbar class="menu" color="blue lighten-1">
    <v-toolbar-title class="white--text">Twitter API</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
    <router-link to="/">
          <v-btn flat class="white--text">Home</v-btn>
      </router-link>
    <router-link to="/tweets">
          <v-btn flat class="white--text">Tweets</v-btn>
      </router-link>
    </div>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.menu {
width: 1270px;
}
</style>


