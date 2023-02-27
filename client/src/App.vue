<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

  let obj:any = { //any means treat it like a java script object instead of type script
    msg: 'New Paltz Rocks!'
  }

  obj = 'hello world'


</script>

<template>
	
	<NavBar />

</template>

<style scoped>

</style>
