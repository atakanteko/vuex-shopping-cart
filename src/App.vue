<template>
  <div id="app" class="container">
   <nav-bar/>
   <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    'nav-bar':Navigation
  }
}
</script>

<style>

</style>
