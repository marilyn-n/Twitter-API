<template>
  <div class="menu">
    <v-toolbar color="blue lighten-1">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Twitter API</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
    <router-link to="/">
          <v-btn flat>Home</v-btn>
      </router-link>
    <router-link to="/tweets">
          <v-btn flat>Tweets</v-btn>
      </router-link>
    </div>
  </v-toolbar>
  </div>
</template>

