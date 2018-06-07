<template>
  <div class="hello">
    <h2>hello</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/tweets">Tweets</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
