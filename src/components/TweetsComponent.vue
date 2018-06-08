<template>
  <div class="body">
    <h1>tweets</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      tweets: [],
    }
  },

  mounted(){
    this.getTweets();
  },

  methods: {
    getTweets() {
      axios.get('')

    }

  }
}

</script>

<style>

</style>

