<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar';


export default {
  name: 'app',
  components: {
    navbar
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Verdana';
}
</style>
